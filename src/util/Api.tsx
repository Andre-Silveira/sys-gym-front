import axios from "axios";

export const API_Base = 'https://api.mockfly.dev/mocks/ae219aac-7ce4-49f5-a67d-93915ec3b740';

export function buscarListaAlunos() {
  return axios.get(`${API_Base}/listaAluno`);
}

export function criarAluno() {
  return axios.get(`${API_Base}/listaAluno`);
}

export function atualizarAluno() {
  return axios.get(`${API_Base}/listaAluno`);
}

export function ativarDesativarAluno() {
  return axios.get(`${API_Base}/listaAluno`);
}