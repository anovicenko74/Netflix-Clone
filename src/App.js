import useSettings from './hooks/useSettings';

import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from './theme.js';

import { Routes } from './components/Routes'

function App() {
  const { settings } = useSettings()
  const theme = createTheme(settings.theme)

  return (
    <>
        <ThemeProvider
          theme={theme}
        >
          <Routes />
        </ThemeProvider>
    </>
  );
}

export default App;
