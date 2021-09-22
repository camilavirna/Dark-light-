import React from 'react';
import { ThemeProvider, DefaultTheme} from  'styled-components';
import usePersistedState from './utils/usePersistedState';

import light from './styles/themes/light';
import dark from './styles/themes/dark';

import GlobalStyles from './styles/global';
import Header from './components/Header';
import About from './components/About';
import { Container } from './components/Header/styles';

const App = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);
  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
      <GlobalStyles />
      <Header toggleTheme={toggleTheme} /> 
      <Container/>
      </div>
      <About/>
    </ThemeProvider>
  
  );
}

export default App;
