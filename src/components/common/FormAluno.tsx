import { Box, Button, Grid, InputBase, TextField, Typography } from '@mui/material';
import * as React from 'react';
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

const FormAluno = () => {
  const [valorMensal, setValorMensal] = React.useState<Number>(12345.42)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValorMensal(Number(event.target.value));
  };

  return (
    <form>
      <Typography
        sx={{ ml: 1, flex: 1 }}
      >
        Nome completo:
      </Typography>
      <InputBase
        sx={inputConfigGrande}
      />
      <Grid sx={{ marginTop: 2 }} direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            CPF:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
        <div style={{ width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            E-mail:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
      </Grid>
      <Typography sx={{ ml: 1, flex: 1, marginTop: 2 }}>
        Endereço:
      </Typography>
      <InputBase
        sx={inputConfigGrande}
      />
      <Grid sx={{ marginTop: 2 }} direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            Data Nascimento:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
        <div style={{ width: '44%' }}>
          <Typography sx={{ ml: 1, flex: 1 }}>
            Telefone de contato:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
      </Grid>
      <Grid sx={{ marginTop: 2 }} direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%' }}>
          <MultipleSelect />
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