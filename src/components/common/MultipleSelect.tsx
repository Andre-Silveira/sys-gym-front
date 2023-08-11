
import { Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { aulaType } from '../../pages/alunos/CadastroAluno';
import { buscarAulas } from '../../util/Api';

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

const MultipleSelect = ({ aulas, arrayAulasSelecionadas, formatacao }: any) => {
  const [listaAulas, setListaAulas] = useState<any>([]);
  const [listaAulasSelecionada, setListaAulasSelecionada] = useState<any>([]);

  const indexOfAll = (arr:any, val:any) => arr.reduce((acc:any, el:any, i:any) => (el === val ? [...acc, i] : acc), []);
  
  const handleChange = (event: any) => {

    let aulasSelecionadas = event;
    let valorMensal = 0;
    const idsaulasSelecionadas:Array<[]> = [];
    
    aulasSelecionadas.forEach((item:any) => {
      idsaulasSelecionadas.push(aulasSelecionadas.findIndex((res:any) => res.nome === item.nome));  
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
    setListaAulasSelecionada(aulasSelecionadas)    
  };
  
  useEffect(() => {
    if (aulas){
      setListaAulasSelecionada(aulas)
    }    
  }, [aulas])

  useEffect(() => {
    buscarAulas()
      .then(({ data }) => {
        setListaAulas(data)        
      })
      .catch((error) => {
        console.error(error);
      }) 
  }, [])

  return (
    <div>
      <Typography sx={{ ml: 1, flex: 1 }}>
        Aulas:
      </Typography>
      <FormControl sx={{ m: 1, width: '100%', marginTop: 0 }}>
        <Select
          labelId="multipleSelect-label"
          id="multipleSelect"
          multiple
          variant='standard'
          sx={formatacao}
          value={listaAulasSelecionada}
          onChange={(e) => {
            setListaAulasSelecionada(e.target.value)
            handleChange(e.target.value)}
          }
          renderValue={(selected) => selected.map((x:any) => x.nome).join(', ')}
          MenuProps={MenuProps}
          disableUnderline
        >
          {listaAulas.map((aula:any) => (
            <MenuItem key={aula.nome} value={aula}>
              <Checkbox
                key={aula.nome + '1'}
                checked={
                  listaAulasSelecionada.findIndex((item:any) => item.nome === aula.nome) >= 0
                }
              />
              <ListItemText key={aula.nome +'2'} primary={aula.nome} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default MultipleSelect;