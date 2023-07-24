import { Card, CardContent } from "@mui/material";
import FormAluno from "../../components/common/FormAluno";
import Title from "../../components/common/Title";

const EditarAluno = () => {
  return (
    <div>
      <Title titulo={"Edição de aluno"}/>
      <Card>
        <CardContent>
          <FormAluno />
        </CardContent>
      </Card>
    </div>
  )
}

export default EditarAluno;