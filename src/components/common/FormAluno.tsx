import { useEffect, useState } from 'react';

import { Box, Button, Grid, Snackbar, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ptBR } from "@mui/x-date-pickers/locales";
import { Field, Form, Formik } from 'formik';
import InputMask from 'react-input-mask';

import dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import inputConfig from '../../configs/inputConfigs';
import { alunoType, aulaType } from '../../pages/alunos/CadastroAluno';
import AlunoValidation from '../../pages/alunos/ValidationShemaAluno';
import { atualizarAluno, criarAluno } from '../../util/Api';
import Currency from './Currency';
import MultipleSelect from './MultipleSelect';

const FormAluno = ({ aluno }: any) => {
  const [valorMensal, setValorMensal] = useState<Number>(0)
  const [alertAberto, setAlertAberto] = useState(false)
  const [alertAbertoError, setAlertAbertoError] = useState(false)
  const [exibeFormulario, setExibeFormilario] = useState(true);
  const [mensagemAlert, setMensagemAlert] = useState('');
  const navigate = useNavigate()
  const [listaAulaSelecionada, setListaAulaSelecionada] = useState<Array<aulaType>>([])
  const [dadosAluno, setDadosAluno] = useState<alunoType>({
    id: undefined || aluno?.id,
    nome: "" || aluno?.nome,
    ativo: false || aluno?.ativo,
    aula: [
      {
        id: undefined,
        nome: "",
        mensalidade: 0
      }
    ] || aluno?.aula,
    cpf: "" || aluno?.cpf,
    dataNascimento: aluno?.dataNascimento || new Date(),
    email: "" || aluno?.email,
    endereco: "" || aluno?.endereco,
    telefone: "" || aluno?.telefone
  })

  useEffect(() => {
    if (aluno != null) {
      setExibeFormilario(false);
      setDadosAluno({
        ativo: aluno.ativo,
        aula: aluno.aula,
        cpf: aluno.cpf,
        dataNascimento: aluno.dataNascimento,
        email: aluno.email,
        endereco: aluno.endereco,
        nome: aluno.nome,
        telefone: aluno.telefone,
        id: aluno.id
      })
      let valor = 0
      // eslint-disable-next-line array-callback-return
      aluno.aula.map((res: any) => {
        valor = valor + res.mensalidade;
      })
      setValorMensal(valor)
      setExibeFormilario(true);
    }
  }, [aluno])

  const getAulas = (aulasSelecionadas: any) => {
    const aulas: Array<aulaType> = aulasSelecionadas;
    let mensalidade = 0

    aulas.map((aula: aulaType) => mensalidade += aula.mensalidade)
    setValorMensal(mensalidade)
    setListaAulaSelecionada(aulas);

  }

  const salvarFormulario = (dados: any) => {
    let alunoParaSalvar: alunoType = dados;
    if (listaAulaSelecionada.length > 0) {
      alunoParaSalvar.aula = listaAulaSelecionada;
    }

    if (alunoParaSalvar.id !== undefined) {
      atualizarAluno(alunoParaSalvar).then(() => {
        setAlertAberto(true)
        navigate("/alunos");
        setMensagemAlert(`O Aluno ${alunoParaSalvar.nome} foi atualizado com sucesso!`)
      }).catch((e) => {
        console.error('erro update', e.message);
        console.log(e.response.data.message);

        setAlertAbertoError(true)
        const errorMessage = e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : `Erro ${e.message} ao atualizar o aluno ${alunoParaSalvar.nome}`;

        setMensagemAlert(errorMessage);
      })

    } else {
      alunoParaSalvar.ativo = true;
      criarAluno(alunoParaSalvar).then(() => {
        setAlertAberto(true)
        navigate("/alunos");
        setMensagemAlert(`O Aluno ${alunoParaSalvar.nome} foi salvo com sucesso!`)
      }).catch((e) => {
        console.error('erro salvar ', e.message);
        setAlertAbertoError(true)
        const errorMessage = e.response && e.response.data && e.response.data.message
          ? e.response.data.message
          : `Erro ${e.message} ao salvar o aluno ${alunoParaSalvar.nome}`;

        setMensagemAlert(errorMessage);
      })
    }
  }

  return (
    <div>
      <Snackbar
        sx={{ width: '60%' }}
        open={alertAberto || alertAbertoError}
        autoHideDuration={6000}
        onClose={() => {
          setAlertAberto(false);
          setAlertAbertoError(false)
        }}>
        <Alert
          onClose={() => {
            setAlertAberto(false);
            setAlertAbertoError(false)
          }
          }
          severity={alertAberto ? "success" : "error"}
          sx={{ width: '100%' }}>
          {mensagemAlert}
        </Alert>
      </Snackbar>
      {exibeFormulario ? (
        <Formik
          initialValues={dadosAluno}
          validationSchema={AlunoValidation}
          onSubmit={(values) => salvarFormulario(values)}
        >
          {({ errors, touched, setFieldValue, isValid, values }) => (
            <Form>
              <Typography
                sx={{ ml: 1, flex: 1 }}
              >
                Nome completo:
              </Typography>
              <Field
                name='nome'
                style={errors.nome && touched.nome ?
                  inputConfig.inputConfigGrandeError : inputConfig.inputConfigGrande}
              />
              {errors.nome && touched.nome ? (
                <div style={inputConfig.errorText}>
                  <p />
                  *{errors.nome}
                </div>
              ) : null}
              <Grid sx={{ marginTop: 2 }} direction={'row'} container>
                <div style={{ marginRight: '7%', width: '44%' }}>
                  <Typography sx={{ ml: 1, flex: 1 }}>
                    CPF:
                  </Typography>
                  <Field
                    name='cpf'
                  >
                    {({ field }: any) => (
                      <InputMask
                        {...field}
                        mask="999.999.999-99"
                        type="text"
                        style={errors.cpf && touched.cpf ?
                          inputConfig.inputConfigPequenoMaskError : inputConfig.inputConfigPequenoMask}
                      />
                    )}
                  </Field>
                  {errors.cpf && touched.cpf ? (
                    <div style={inputConfig.errorText}>
                      <p />
                      *{errors.cpf}
                    </div>
                  ) : null}
                </div>
                <div style={{ width: '44%' }}>
                  <Typography sx={{ ml: 1, flex: 1 }}>
                    E-mail:
                  </Typography>
                  <Field
                    type='email'
                    name='email'
                    style={errors.email && touched.email ?
                      inputConfig.inputConfigPequenoMaskError : inputConfig.inputConfigPequenoMask}
                  />
                  {errors.email && touched.email ? (
                    <div style={inputConfig.errorText}>
                      <p />
                      *{errors.email}
                    </div>
                  ) : null}
                </div>
              </Grid>
              <Typography sx={{ ml: 1, flex: 1, marginTop: 2 }}>
                Endereço:
              </Typography>
              <Field
                name='endereco'
                style={errors.endereco && touched.endereco ?
                  inputConfig.inputConfigGrandeError : inputConfig.inputConfigGrande}
              />
              {errors.endereco && touched.endereco ? (
                <div style={inputConfig.errorText}>
                  <p />
                  *{errors.endereco}
                </div>
              ) : null}
              <Grid sx={{ marginTop: 2 }} direction={'row'} container>
                <div style={{ marginRight: '7%', width: '44%' }}>
                  <Typography sx={{ ml: 1, flex: 1 }}>
                    Data Nascimento:
                  </Typography>
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    localeText={
                      ptBR.components.MuiLocalizationProvider.defaultProps.localeText
                    }
                  >
                    <Field
                      name='dataNascimento'
                      type='date'
                    >
                      {({ field }: any) => (
                        <DemoContainer sx={{ padding: 0 }} components={["DateTimePicker"]}>
                          <DateTimePicker
                            {...field}
                            value={dayjs(values.dataNascimento)}
                            onChange={(e: any) => setFieldValue(field.name, dayjs(e).toDate())}
                            sx={{ border: 0, padding: 0 }}
                            views={["year", "month", "day"]}
                            format={"DD/MM/YYYY"}
                          />
                        </DemoContainer>
                      )}
                    </Field>
                  </LocalizationProvider>
                  {errors.dataNascimento && touched.dataNascimento ? (
                    <div style={inputConfig.errorText}>
                      <p />
                      *O aluno precisa de ter pelo menos 16 anos
                    </div>
                  ) : null}
                </div>
                <div style={{ width: '44%' }}>
                  <Typography sx={{ ml: 1, flex: 1 }}>
                    Telefone de contato:
                  </Typography>
                  <Field
                    name='telefone'
                    style={errors.telefone && touched.telefone ?
                      inputConfig.inputConfigPequenoMaskError : inputConfig.inputConfigPequenoMask}
                  >
                    {({ field }: any) => (
                      <InputMask
                        {...field}
                        mask="(99) 99999-9999"
                        style={errors.telefone && touched.telefone ?
                          inputConfig.inputConfigPequenoMaskError : inputConfig.inputConfigPequenoMask}
                      />
                    )}
                  </Field>
                  {errors.telefone && touched.telefone ? (
                    <div style={inputConfig.errorText}>
                      <p />
                      *{errors.telefone}
                    </div>
                  ) : null}
                </div>
              </Grid>
              <Grid sx={{ marginTop: 2 }} direction={'row'} container>
                <div
                  style={errors.aula && touched.aula ?
                    { marginRight: '7%', width: '44%', borderColor: 'red', border: '1px' } :
                    { marginRight: '7%', width: '44%' }}
                >
                  <MultipleSelect
                    formatacao={errors.aula && touched.aula ? inputConfig.selectError : inputConfig.select}
                    aulas={aluno?.aula}
                    arrayAulasSelecionadas={getAulas}
                  />
                  {errors.aula && touched.aula ? (
                    <div style={inputConfig.errorText}>
                      <p />
                      * Selecione um curso
                    </div>
                  ) : null}
                </div>
                <div style={{ width: '44%' }}>
                  <Typography sx={{ ml: 1, flex: 1 }}>
                    Valor da mensalidade:
                  </Typography>
                  <Field
                    name='aula.0.mensalidade'
                  >
                    {({ field }: any) => (
                      <TextField
                        {...field}
                        value={valorMensal}
                        onChange={() => setFieldValue(field.name, listaAulaSelecionada.at(0)?.mensalidade)}
                        sx={inputConfig.inputConfigPequeno}
                        name="numberformat"
                        id="formatted-numberformat-input"
                        InputProps={{
                          inputComponent: Currency as any,
                          disableUnderline: true
                        }}
                        variant="standard"
                      />
                    )}
                  </Field>
                </div>
              </Grid>

              <Box
                textAlign={'end'}
                sx={{
                  marginTop: 5,
                  marginRight: 7
                }}
              >
                <Button
                  type='submit'
                  variant="contained"
                  sx={{
                    backgroundColor: colorConfigs.title,
                    color: "#fff",
                    borderRadius: '10px',
                  }}
                >
                  salvar
                </Button>
              </Box>
            </Form>
          )}
        </Formik>
      ) : null}
    </div>
  )
}

export default FormAluno;