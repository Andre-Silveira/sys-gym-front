import { Box, Button, Grid, InputBase, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
// @ts-ignore
//import CurrencyInput from 'react-currency-masked-input';
import { Link } from 'react-router-dom';
import colorConfigs from '../../configs/colorConfigs';
import Currency from './Currency';
import MultipleSelect from './MultipleSelect';

const inputConfigGrande = {
  ml: 1,
  flex: 1,
  borderRadius: '10px',
  width: '95%',
  paddingLeft: 1,
  marginTop: 1,
  backgroundColor: colorConfigs.listaAlunos.inputSearch
}

const inputConfigPequeno = {
  ml: 1,
  flex: 1,
  borderRadius: '10px',
  width: '100%',
  paddingLeft: 1,
  marginTop: 1,
  backgroundColor: colorConfigs.listaAlunos.inputSearch
}

const FormAluno = ({aluno}: any) => {
  const [valorMensal, setValorMensal] = useState<Number>(0)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorMensal(Number(event.target.value));
  };

  const getValorMensal = (valor:Number) => {
    setValorMensal(valor)
  }

  useEffect(() => {
    if (aluno != null) {
      let valor = 0
      aluno.aula.map((res:any) => {
        valor = valor + res.mensalidade;
      })
      setValorMensal(valor)
    }
  }, [aluno])

  return (
    <form>
      <Typography
        sx={{ ml: 1, flex: 1 }}
      >
        Nome completo:
      </Typography>
      <InputBase
        sx={inputConfigGrande}
        value={aluno?.nome || null}
      />
      <Grid sx={{ marginTop: 2 }} direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            CPF:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
            value={aluno?.cpf || null}
          />
        </div>
        <div style={{ width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            E-mail:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
            value={aluno?.email || null}
          />
        </div>
      </Grid>
      <Typography sx={{ ml: 1, flex: 1, marginTop: 2 }}>
        Endereço:
      </Typography>
      <InputBase
        sx={inputConfigGrande}
        value={aluno?.endereco || null}
      />
      <Grid sx={{ marginTop: 2 }} direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            Data Nascimento:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
            value={aluno?.dataNascimento || null}
          />
        </div>
        <div style={{ width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            Telefone de contato:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
            value={aluno?.telefone || null}
          />
        </div>
      </Grid>
      <Grid sx={{ marginTop: 2 }} direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%' }}>
          <MultipleSelect aulas={aluno?.aula} valorMensalidade={getValorMensal} />
        </div>
        <div style={{ width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            Valor da mensalidade:
          </Typography>
          <TextField
            value={valorMensal}
            sx={inputConfigPequeno}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: Currency as any,
              disableUnderline: true
            }}
            variant="standard"
          />
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
          variant="contained"
          sx={{
            backgroundColor: colorConfigs.title,
            color: "#fff",
            borderRadius: '10px',
          }}
          component={Link}
          to="/alunos"
        >
          salvar
        </Button>
      </Box>
    </form>
  )
}

export default FormAluno;