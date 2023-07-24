import { Grid, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';

import colorConfigs from './../../configs/colorConfigs';

export type CardType = {
  titulo: string,
  alunoAtivo?: number,
  alunoBloqueado?: number,
  aVencer?: number,
  vencido?: number
}

type Props = {
  item: CardType
}

const text = {
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: 24
}

const CardBasic = ({ item }: Props) => {
  return (
    <Card
      sx={{backgroundColor: colorConfigs.card.main}}
    >
      <CardContent>
        <Typography
          sx={text}
          color={colorConfigs.title}
        >
          {item.titulo}
        </Typography>
        <Divider />
        <Grid
          container
          direction={"row"}
          justifyContent={"center"}
        >
          <Card
            sx={{
              marginRight: 3,
              marginTop: 2,
              backgroundColor: colorConfigs.card.child
            }}
          >
            <CardContent sx={{width: '180px'}}>
              <Typography
                sx={text}
              >
                {item.alunoAtivo ? item.alunoAtivo : 0}
              </Typography>
              <Typography sx={{textAlign: 'center'}}>
                { item.titulo === "Alunos" ?
                  "Alunos Ativos": " A vencer"}
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{marginTop: 2}}
          >
            <CardContent sx={{width: '180px'}}
              
            >
              <Typography sx={text}>
                {item.alunoBloqueado ? item.alunoBloqueado : 0}
              </Typography>
              <Typography sx={{textAlign: 'center'}}>
              { item.titulo === "Alunos" ?
                  "Alunos bloqueados": "Vencidos"}
                
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default CardBasic;