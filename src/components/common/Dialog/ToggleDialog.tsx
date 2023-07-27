import Icon from "@mui/material/Icon";
import { useContext } from 'react';
import { DialogContext } from './index';

export default function ToggleAlert({icone}: any) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, setAlertState] = useContext(DialogContext);
  return (
    <Icon onClick={() => setAlertState(true)}>{icone}</Icon>
  );
}
