import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemText
} from "@mui/material";
import Paper from "@mui/material/Paper";

import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import App from "../../components/common/Dialog";
import Title from "../../components/common/Title";
import colorConfigs from "../../configs/colorConfigs";
import { buscarListaAlunos } from "../../util/Api";
import { alunoType } from "./CadastroAluno";

const ListaAlunos = () => {

  const [listaAluno, setListaAluno] = useState<Array<alunoType>>([])

  useEffect(() => {
    buscarListaAlunos()
      .then(({data}) => {
        setListaAluno(data)
      })
      .catch((erro) => {
        console.error(erro)
      })
  })

  return (
    <div>
      <Title titulo={"Alunos"} />
      <Card sx={{backgroundColor: colorConfigs.listaAlunos.bg, padding: 0}}>
        <CardContent>
          <div>
            <Paper
              sx={{
                p: '2px 4px',
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                border: 'none',
                boxShadow: 'none',
                backgroundColor: colorConfigs.listaAlunos.bg
              }}
            >
              <InputBase
                sx={{
                  ml: 1,
                  flex: 1,
                  borderRadius: '15px',
                  paddingLeft: 2,
                  backgroundColor: colorConfigs.listaAlunos.inputSearch
                }}
                placeholder="Procurar aluno"
                inputProps={{ 'aria-label': 'search google maps' }}
              />
              <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
              </IconButton>
            </Paper>
            <Divider />
            <div
              style={{
                backgroundColor: colorConfigs.listaAlunos.aluno,
                marginTop: 5
              }}
            >
              <List>
                {listaAluno.map((item) =>
                  <ListItem
                    secondaryAction={
                      <div>
                        <IconButton
                          sx={{margin: 1}}
                          edge="end"
                          component={Link}
                          to="/editarAlunos"
                        >
                          <EditIcon />
                        </IconButton>
                        <IconButton sx={{margin: 1}} edge="end">
                          <App icone={<LockIcon />} />
                        </IconButton>
                        <IconButton sx={{margin: 1}} edge="end">
                          <App icone={<LockOpenIcon />}  />
                        </IconButton>
                      </div>
                    }
                  >
                    <ListItemText
                      primary={item.nome}
                    />
                  </ListItem>
                )}
              </List>
            </div>
          </div>
        </CardContent>
      </Card>
      <CardActions
        style={{
          justifyContent: 'end',
          marginTop: 30
          }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: colorConfigs.title,
            color: "#fff",
            borderRadius: '10px',
          }}
          component={Link}
          to="/cadastroAlunos"
        >
          Cadastrar
        </Button>

      </CardActions>
    </div>
  );
};

export default ListaAlunos;
