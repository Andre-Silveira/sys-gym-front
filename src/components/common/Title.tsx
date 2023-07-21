import { Typography } from '@mui/material';
import colorConfigs from '../../configs/colorConfigs';


const Title = ({titulo}: any) => {
  return (
    <Typography 
      variant='h3'
      color={colorConfigs.title}
      fontWeight={"bold"}
      style={{marginBottom: '3%'}}
    >
      {titulo}
    </Typography>
  )
}

export default Title