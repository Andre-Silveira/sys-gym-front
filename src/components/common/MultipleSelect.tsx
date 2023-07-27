
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import colorConfigs from '../../configs/colorConfigs';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
      disableUnderline: true
    },
  },
};

const inputConfig = {
  ml: 1,
  flex: 1,
  borderRadius: '10px',
  width: '100%',
  marginLeft: '0',
  border: 'none',
  paddingLeft: 1,
  marginTop: 1,
  backgroundColor: colorConfigs.listaAlunos.inputSearch
}

type tipo = {
  id: number
  aula: string
  mensalidade: number
}

const variants: Array<any> = [
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
];

const MultipleSelect = ({ aulas }: any) => {
  const [listaAulas, setListaAulas] = useState<Array<tipo>>([]);

  const handleChange = (event: any) => {
    const {
      target: { value },
    } = event;

    setListaAulas(typeof value === 'string'
      ? value.split(',')
      : value
    );
  };

  useEffect(() => {
    if (aulas != null || aulas != undefined) {
      setListaAulas(aulas)
    }
  })

  return (
    <div>
      <Typography sx={{ ml: 1, flex: 1 }}>
        Aluas:
      </Typography>
      <FormControl sx={{ m: 1, width: '100%', marginTop: 0 }}>
        <Select
          labelId="multipleSelect-label"
          id="multipleSelect"
          multiple
          variant='standard'
          sx={inputConfig}
          value={listaAulas}
          onChange={handleChange}
          renderValue={(selected) => selected.map((x) => x.aula).join(', ')}
          MenuProps={MenuProps}
          disableUnderline
        >
          {variants.map((variant) => (
            <MenuItem key={variant.id} value={variant}>
              <Checkbox
                checked={
                  listaAulas.findIndex((item) => item.id === variant.id) >= 0
                }
              />
              <ListItemText primary={variant.aula} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;