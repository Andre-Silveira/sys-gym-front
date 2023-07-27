import { Card, CardContent } from "@mui/material";
import { useLocation } from "react-router-dom";
import FormAluno from "../../components/common/FormAluno";
import Title from "../../components/common/Title";
import { alunoType } from "./CadastroAluno";

const EditarAluno = () => {
  let params = useLocation();
  const aluno:alunoType = params.state.aluno;
  
  return (
    <div>
      <Title titulo={"Edição de aluno"}/>
      <Card>
        <CardContent>
          <FormAluno aluno={aluno} />
        </CardContent>
      </Card>
    </div>
  )
}

export default EditarAluno;