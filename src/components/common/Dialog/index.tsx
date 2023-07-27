import { createContext, useState } from 'react';
import DialogAlert from './Dialog';
import ToggleDialog from './ToggleDialog';

export const DialogContext = createContext<any>([]);

export default function App({icone, texto, idAluno}: any) {
  const alertState = useState(false);
    
  return (
    <DialogContext.Provider value={alertState}>
      <ToggleDialog icone={icone} />
      <DialogAlert title={texto?.title} body={texto?.body} idAluno={idAluno}/>
    </DialogContext.Provider>
  );
}
