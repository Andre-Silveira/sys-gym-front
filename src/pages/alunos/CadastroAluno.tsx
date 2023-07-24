import { Card, CardContent } from '@mui/material';
import FormAluno from "../../components/common/FormAluno";
import Title from "../../components/common/Title";

const CadastroAluno = () => {
  return (
    <div>
      <Title titulo={"Cadastro de aluno"} />
      <Card>
        <CardContent>
          <FormAluno />
        </CardContent>
      </Card>
    </div>
  )
}

export default CadastroAluno;