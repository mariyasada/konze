import { createTheme, ThemeProvider } from '@mui/material';
import * as React from 'react';
import { GridwithCards,Header,FeatureComponent } from './components/index';

function App() {
  const lightTheme = createTheme ({
    palette: {
      type: "light",
    },
  });
  return (
    <div className="App">
      <ThemeProvider theme={lightTheme}>
          <Header/>
          <GridwithCards/>
          <FeatureComponent/>
      </ThemeProvider>
    </div>
  );
}

export default App;
