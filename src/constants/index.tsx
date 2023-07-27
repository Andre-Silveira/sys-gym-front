import { alunoType } from "../pages/alunos/CadastroAluno"

export const dialogAlunoBloquear = {
  title: 'Bloquear aluno',
  body: 'Ao confirmar o aluno será bloqueado.'
}

export const dialogAlunoDesbloquear = {
  title: 'Desbloquear aluno',
  body: 'Ao confirmar o aluno será desbloqueado.'
}

export const dadosAluno: alunoType[] = [
  {
    "id": 0,
    "nome": "João dos veneno",
    "email": "joaomaromba@gmail.com",
    "telefone": "(99) 99999-9999",
    "cpf": "99999999999",
    "endereco": "Rua dos maromba, 1",
    "aula": [
      {
        id: 0,
        aula: "musculação",
        mensalidade: 10
      },
      {
        id: 1,
        aula: "natação",
        mensalidade: 12.5
      },
      {
        id: 2,
        aula: "luta",
        mensalidade: 15.75
      }
    ],
    "mensalidade": 0,
    "dataNascimento": new Date(),
    "ativo": true
  },
  {
    "id": 1,
    "nome": "José frango",
    "email": "frango@gmail.com",
    "telefone": "(99) 99999-9999",
    "cpf": "99999999999",
    "endereco": "Rua dos frango, 1",
    "aula": [
      {
        id: 0,
        aula: "musculação",
        mensalidade: 10
      }
    ],
    "mensalidade": 0,
    "dataNascimento": new Date(),
    "ativo": false
  },
  {
    "id": 2,
    "nome": "Arnold Schwarzenegger",
    "email": "arnold@gmail.com",
    "telefone": "(99) 99999-9999",
    "cpf": "99999999999",
    "endereco": "Rua dos maromba, 2",
    "aula": [
      {
        id: 0,
        aula: "musculação",
        mensalidade: 10
      }
    ],
    "mensalidade": 0,
    "dataNascimento": new Date(),
    "ativo": true
  },
  {
    "id": 0,
    "nome": "Menino Maromba",
    "email": "marombinha@gmail.com",
    "telefone": "(99) 99999-9999",
    "cpf": "99999999999",
    "endereco": "Rua dos maromba, 3",
    "aula": [
      {
        id: 0,
        aula: "musculação",
        mensalidade: 10
      }
    ],
    "mensalidade": 0,
    "dataNascimento": new Date(),
    "ativo": true
  },
  {
    "id": 0,
    "nome": "André Frango",
    "email": "andre@gmail.com",
    "telefone": "(99) 99999-9999",
    "cpf": "99999999999",
    "endereco": "Rua dos frango, 2",
    "aula": [
      {
        id: 0,
        aula: "musculação",
        mensalidade: 10
      }
    ],
    "mensalidade": 0,
    "dataNascimento": new Date(),
    "ativo": true
  }
]