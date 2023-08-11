import { createContext, useState } from 'react';
import DialogAlert from './Dialog';
import ToggleDialog from './ToggleDialog';

export const DialogContext = createContext<any>([]);

export default function App({icone, texto, idAluno, setListAlunos}: any) {
  const alertState = useState(false);

  const getListAluno = (lista:any) => {
    setListAlunos(lista)
  }
  return (
    <DialogContext.Provider value={alertState}>
      <ToggleDialog icone={icone} />
      <DialogAlert title={texto?.title} body={texto?.body} idAluno={idAluno} setlistaAlunos={getListAluno}/>
    </DialogContext.Provider>
  );
}
