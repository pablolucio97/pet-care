
import { GlobalStyle } from "./styles/GlobalStyles";
import Routes from "./routes/routes";
import { DatesProvider } from './context/DatesContext'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <DatesProvider>
      <AuthProvider>
        <GlobalStyle />
        <>
          <Routes />
        </>
      </AuthProvider>
    </DatesProvider>
  );
}

export default App;
