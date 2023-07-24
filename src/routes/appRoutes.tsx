import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import CadastroAluno from '../pages/alunos/CadastroAluno';
import EditarAluno from '../pages/alunos/EditarAluno';
import HomePage from "../pages/home/HomePage";
import ListaAlunos from './../pages/alunos/ListaAlunos';
import { RouteType } from "./config";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },
  {
    path: "/Início",
    element: <HomePage />,
    state: "inicio",
    sidebarProps: {
      displayText: "INÍCIO",
      icon: <HomeIcon />
    }
  },
  {
    path: "/alunos",
    element: <ListaAlunos />,
    state: "alunos",
    sidebarProps: {
      displayText: "ALUNOS",
      icon: <PeopleAltIcon />
    }
  },
  {
    path: "/cadastroAlunos",
    element: <CadastroAluno />,
    state: "alunos",
  },
  {
    path: "/editarAlunos",
    element: <EditarAluno />,
    state: "alunos",
  }
];

export default appRoutes;