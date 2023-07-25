import Icon from "@mui/material/Icon";
import { useContext } from 'react';
import { DialogContext } from './index';

export default function ToggleAlert({icone}: any) {
  const [_, setAlertState] = useContext(DialogContext);
  return (
    <Icon onClick={() => setAlertState(true)}>{icone}</Icon>
  );
}
