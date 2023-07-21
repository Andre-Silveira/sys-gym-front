import HomeIcon from '@mui/icons-material/Home';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
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
  }
];

export default appRoutes;