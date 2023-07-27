import * as React from 'react';
import { useContext, useEffect } from 'react';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import { DialogContext } from '.';
import { dialogAlunoDesbloquear } from '../../../constants';
import { ativarAlunoApi, desativarAlunoApi } from '../../../util/Api';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DialogAlert = ({title, body, idAluno}:any) => {
  const [alertState, setAlertState] = useContext<any>(DialogContext);

  const handleClose = () => {
    setAlertState(false);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    if (alertState){
      title === dialogAlunoDesbloquear.title ?
        ativarAluno() : desativarAluno();
    }
  })
  
  const ativarAluno = () => {
    ativarAlunoApi(idAluno)
      .then(() => {
        console.log("pronto");
        
      })
      .catch((erro) => {
        console.error(erro.response.data)
      })
  }
  
  const desativarAluno = () => {
    desativarAlunoApi(idAluno)
      .then(() => {
        console.log("pronto");
        
      })
      .catch((erro) => {
        console.error(erro.response.data)
      })
  }
  return (
    <div>
      <Dialog
        open={alertState}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {body}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={() => setAlertState(false)}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DialogAlert