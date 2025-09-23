import "./App.css";
import Main from "./components/main";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme/theme';

function App() {
  //const [count, setCount] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Main />
      {/* <Table count={count} setCount={setCount} /> */}
    </ThemeProvider>
  );
}

export default App;
