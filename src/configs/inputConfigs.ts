import colorConfigs from "./colorConfigs";

const inputConfig = {
  inputConfigGrande: {
    marginTop: '8px',
    marginLeft: '8px',
    borderRadius: '10px',
    width: '95%',
    height: '32px',
    paddingLeft: 8,
    border: 0,
    backgroundColor: colorConfigs.listaAlunos.inputSearch
  },
  
  inputConfigGrandeError: {
    marginTop: '8px',
    marginLeft: '8px',
    borderRadius: '10px',
    width: '95%',
    height: '32px',
    paddingLeft: 8,
    borderColor: 'red',
    backgroundColor: colorConfigs.listaAlunos.inputSearch
  },
  
  inputConfigPequeno: {
    ml: 1,
    flex: 1,
    borderRadius: '10px',
    width: '100%',
    paddingLeft: 1,
    marginTop: 1,
    backgroundColor: colorConfigs.listaAlunos.inputSearch
  },

  inputConfigPequenoError: {
    ml: 1,
    flex: 1,
    borderRadius: '10px',
    width: '100%',
    paddingLeft: 1,
    marginTop: 1,
    borderColor: 'red',
    backgroundColor: colorConfigs.listaAlunos.inputSearch
  },
  
  inputConfigPequenoMask: {
    marginTop: '8px',
    marginLeft: '8px',
    borderRadius: '10px',
    width: '100%',
    height: '49%',
    paddingLeft: 8,
    border: 0,
    paddingBottom: '5px',
    paddingTop: '4px',
    backgroundColor: colorConfigs.listaAlunos.inputSearch
  },

  inputConfigPequenoMaskError: {
    marginTop: '8px',
    marginLeft: '8px',
    borderRadius: '10px',
    width: '100%',
    height: '49%',
    paddingLeft: 8,
    paddingBottom: '5px',
    paddingTop: '4px',
    borderColor: 'red',
    backgroundColor: colorConfigs.listaAlunos.inputSearch
  },

  errorText: {
    color: 'red',
    marginLeft: '8px',
    marginTop: '-10px',
    fontStyle: 'italic'
  },

  selectError: {
    ml: 1,
    flex: 1,
    borderRadius: '10px',
    width: '100%',
    marginLeft: '0',
    border: 2,
    paddingLeft: 1,
    marginTop: 1,
    borderColor: 'red',
    backgroundColor: colorConfigs.listaAlunos.inputSearch
  },

  select: {
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
}

export default inputConfig;