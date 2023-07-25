import { Grid } from '@mui/material';
import { useEffect } from 'react';
import CardBasic, { CardType } from '../../components/common/Card';
import Title from '../../components/common/Title';
import { buscarListaAlunos } from '../../util/Api';
import { alunoType } from '../alunos/CadastroAluno';

let itemAluno: CardType = {
  titulo: "Alunos"
}
const itemTreino: CardType = {
  titulo: "Treino"
}

const HomePage = () => {

  useEffect(() => {
    buscarListaAlunos()
      .then(({data}) => {
        
        const alunosAtivos = data.filter((aluno: alunoType) => aluno.ativo)     
        const alunosDesativos = data.filter((aluno: alunoType) => !aluno.ativo)     
        
        itemAluno.alunoAtivo = alunosAtivos.length
        itemAluno.alunoBloqueado = alunosDesativos.length
      })
      .catch((erro) => {
        console.error(erro.response.data)
      })
  })

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