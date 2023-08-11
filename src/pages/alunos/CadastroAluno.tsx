import { Card, CardContent } from '@mui/material';
import FormAluno from "../../components/common/FormAluno";
import Title from "../../components/common/Title";

export type alunoType = {
  id?: number,
  nome: string,
  email: string,
  telefone: string,
  cpf: string,
  endereco: string,
  aula: Array<aulaType>,
  dataNascimento: Date,
  ativo: boolean
}

export type aulaType = {
  id?: number
  nome: string,
  mensalidade: number
}

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