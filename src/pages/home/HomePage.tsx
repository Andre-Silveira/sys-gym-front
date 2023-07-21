import { Grid } from '@mui/material';
import CardBasic, { CardType } from '../../components/common/Card';
import Title from '../../components/common/Title';

const itemAluno: CardType = {
  titulo: "Alunos"
}
const itemTreino: CardType = {
  titulo: "Treino"
}

const HomePage = () => {
  return (
    <div>
      <Title titulo={"Dashboard"} />
      <Grid
        container
        direction={"row"}
        spacing={2}
        style={{
          marginLeft: '4px'}}>
        <div style={{marginRight: '5%', width: '45%'}}>
          <CardBasic item={itemAluno} />
        </div>
        <div style={{width: '45%'}}>
          <CardBasic item={itemTreino} />
        </div>
      </Grid>
    </div>
  );
};

export default HomePage;