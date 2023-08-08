import { useEffect, useState } from 'react';

import { Box, Button, Grid, TextField, Typography } from '@mui/material';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { ptBR } from "@mui/x-date-pickers/locales";
import { Field, Form, Formik } from 'formik';
import InputMask from 'react-input-mask';

import dayjs from 'dayjs';
import colorConfigs from '../../configs/colorConfigs';
import inputConfig from '../../configs/inputConfigs';
import { alunoType, aulaType } from '../../pages/alunos/CadastroAluno';
import AlunoValidation from '../../pages/alunos/ValidationShemaAluno';
import { atualizarAluno } from '../../util/Api';
import Currency from './Currency';
import MultipleSelect from './MultipleSelect';

const FormAluno = ({aluno}: any) => {
  const [valorMensal, setValorMensal] = useState<Number>(0)
  const [dataNasc, setDataNasc] = useState<Date>(new Date());
  const [exibeFormulario, setExibeFormilario] = useState(true);
  const [listaAulaSelecionada, setListaAulaSelecionada] = useState<Array<aulaType>>([])
  const [dadosAluno, setDadosAluno] = useState<alunoType>({
    id: undefined || aluno?.id,
    nome: "" || aluno?.nome,
    ativo: false || aluno?.ativo,
    aula: [
      {
        id: undefined,
        aula: "",
        mensalidade: 0
      }
    ] || aluno?.aula,
    cpf: "" || aluno?.cpf,
    dataNascimento: "" || aluno?.dataNascimento,
    email: "" || aluno?.email,
    endereco: "" || aluno?.endereco,
    telefone: "" || aluno?.telefone
  })

  useEffect(() => {
    if (aluno != null) {
      console.log(aluno);
      
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
      aluno.aula.map((res:any) => {
        valor = valor + res.mensalidade;
      })
      setValorMensal(valor)
      setExibeFormilario(true);
    }
  }, [])

  const getAulas = (aulasSelecionadas:any) => {
    const aulas:Array<aulaType> = aulasSelecionadas;
    let mensalidade = 0
    
    aulas.map((aula:aulaType) =>  mensalidade += aula.mensalidade)
    setValorMensal(mensalidade)
    setListaAulaSelecionada(aulas);
        
  }

  const salvarFormulario = (dados:any) => {
    let alunoParaSalvar:alunoType = dados;
    if (aluno === null ){
      alunoParaSalvar.aula = listaAulaSelecionada;
      alunoParaSalvar.dataNascimento = dataNasc
    }
    console.log(alunoParaSalvar);

    if (alunoParaSalvar.id !== undefined) {
      atualizarAluno(alunoParaSalvar).then(()=>{
        return (
          <Alert severity="success">
            <AlertTitle>Cadastro Atualizado</AlertTitle>
            O cadastro do aluno {alunoParaSalvar.nome} foi atualizado
          </Alert>
        )
      }).catch((e) => {
        console.error(e);
        return (
          <Alert severity="error">
            <AlertTitle>Erro ao atualizar</AlertTitle>
            O cadastro do aluno {alunoParaSalvar.nome} não foi atualizado devido a um erro
          </Alert>
        )
      })
      
    } else {
      //salvar
      console.log("salvar");
      
    }
  }

  return (
    <div>
      {exibeFormulario ? (
        <Formik
          initialValues={dadosAluno}
          validationSchema={AlunoValidation}
          onSubmit={(values) => salvarFormulario(values) }
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
                <p/>
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
                    <p/>
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
                    <p/>
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
                <p/>
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
                  >
                    {({ field }: any) => (
                      <DemoContainer sx={{ padding: 0}} components={["DateTimePicker"]}>
                        <DateTimePicker
                          {...field}
                          value={dayjs(values.dataNascimento)}
                          onChange={(e:any) => setFieldValue(field.name, dayjs(e).toDate())}
                          sx={{ border: 0, padding: 0}}
                          views={["year", "month", "day"]}
                          format={"DD/MM/YYYY"}
                        />
                      </DemoContainer>
                    )}
                  </Field>
                </LocalizationProvider>
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
                    <p/>
                    *{errors.telefone}
                  </div>
                ) : null}
              </div>
            </Grid>
            <Grid sx={{ marginTop: 2 }} direction={'row'} container>
              <div
                style={errors.aula && touched.aula ? 
                  { marginRight: '7%', width: '44%', borderColor: 'red', border: '1px' } :
                  { marginRight: '7%', width: '44%' } }
              >
                <MultipleSelect
                  formatacao={errors.aula && touched.aula ? inputConfig.selectError : inputConfig.select}
                  aulas={aluno?.aula}
                  arrayAulasSelecionadas={getAulas}
                />
                {errors.aula && touched.aula ? (
                  <div style={inputConfig.errorText}>
                    <p/>
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
                  {({ field }:any) =>  (
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
                onClick={() => {
                  console.log(errors);
                  
                }}
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
      ): null }
    </div>
  )
}

export default FormAluno;