import * as Yup from 'yup';
import { schemaAlunoValidation } from '../../constants';

const AlunoValidation = Yup.object().shape({
  nome: Yup.string()
    .min(4, schemaAlunoValidation.minValue)
    .required(schemaAlunoValidation.require),
  cpf: Yup.string()
    .required(schemaAlunoValidation.require),
  telefone: Yup.string()
    .min(15, schemaAlunoValidation.minValue)
    .required(schemaAlunoValidation.require),
  email: Yup.string()
    .min(7, schemaAlunoValidation.minValue)
    .required(schemaAlunoValidation.require),
  endereco: Yup.string()
    .required(schemaAlunoValidation.require),
  dataNascimento: Yup.date()
    .max(new Date().getFullYear() - 16, schemaAlunoValidation.minValue),
  aula: Yup.array()
    .of(
      Yup.object().shape({
        mensalidade: Yup.number().min(1, schemaAlunoValidation.require)
      })  
    )
})

export default AlunoValidation;