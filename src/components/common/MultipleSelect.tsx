
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { aulaType } from '../../pages/alunos/CadastroAluno';

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


const variants: Array<any> = [
  {
    aula: "musculação",
    mensalidade: 10
  },
  {
    aula: "natação",
    mensalidade: 12.5
  },
  {
    aula: "luta",
    mensalidade: 15.75
  }
];

const MultipleSelect = ({ aulas, arrayAulasSelecionadas, formatacao }: any) => {
  const [listaAulas, setListaAulas] = useState<any>([]);

  const indexOfAll = (arr:any, val:any) => arr.reduce((acc:any, el:any, i:any) => (el === val ? [...acc, i] : acc), []);
  
  const handleChange = (event: any) => {

    let aulasSelecionadas = event;
    let valorMensal = 0;
    const idsaulasSelecionadas:Array<[]> = [];
    
    aulasSelecionadas.forEach((item:any) => {
      idsaulasSelecionadas.push(aulasSelecionadas.findIndex((res:any) => res.aula === item.aula));  
    });
    
    const unico:any = idsaulasSelecionadas.filter((item:any, index:any) => idsaulasSelecionadas.indexOf(item) !== index);
    const indice:any = indexOfAll(idsaulasSelecionadas, unico[0])
    let numero = indice.length;

    while (numero > 0) {
      aulasSelecionadas.splice(indice[numero-1], 1);
      numero--
    }
    
    aulasSelecionadas.map((aula:aulaType) =>  valorMensal += aula.mensalidade)
    arrayAulasSelecionadas(aulasSelecionadas)
    setListaAulas(aulasSelecionadas)    
  };
  
  useEffect(() => {
    if (aulas){
      setListaAulas(aulas)
    }    
  }, [aulas])

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
          sx={formatacao}
          value={listaAulas}
          onChange={(e) => {
            setListaAulas(e.target.value)
            handleChange(e.target.value)}
          }
          renderValue={(selected) => selected.map((x:any) => x.aula).join(', ')}
          MenuProps={MenuProps}
          disableUnderline
        >
          {variants.map((variant) => (
            <MenuItem key={variant.aula} value={variant}>
              <Checkbox
                key={variant.aula + '1'}
                checked={
                  listaAulas.findIndex((item:any) => item.aula === variant.aula) >= 0
                }
              />
              <ListItemText key={variant.aula +'2'} primary={variant.aula} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;