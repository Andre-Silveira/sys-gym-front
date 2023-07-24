import { Grid, InputBase, Typography } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';
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
  return(
    <form>
      <Typography
        sx={{ml: 1, flex: 1}}
      >
        Nome completo:
      </Typography>
      <InputBase
        sx={inputConfigGrande}
      />
      <Grid direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%'}}>
          <Typography sx={{ml: 1, flex: 1}}>
            CPF:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
        <div style={{width: '44%'}}>
          <Typography sx={{ml: 1, flex: 1}}>
            E-mail:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
      </Grid>
      <Typography sx={{ml: 1, flex: 1}}>
        Endereço:
      </Typography>
      <InputBase
        sx={inputConfigGrande}
      />
      <Grid direction={'row'} container>
        <div style={{ marginRight: '7%', width: '44%'}}>
          <Typography sx={{ml: 1, flex: 1}}>
            Data Nascimento:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
        <div style={{width: '44%'}}>
          <Typography sx={{ml: 1, flex: 1}}>
            Telefone de contato:
          </Typography>
          <InputBase
            sx={inputConfigPequeno}
          />
        </div>
      </Grid>
      <Grid direction={'row'} container>
        <MultipleSelect />
      </Grid>
    </form>
  )
}

export default FormAluno;