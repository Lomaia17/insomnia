import "./App.css";
import MainPage from "./Components/MainPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { MusicProvider } from "./Context/music-context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./Components/CardDetails/CardDetails";
function App() {
  const theme = createTheme({
    palette: {
      background: {
        default: "black",
      },
      primary: {
        main: "#D093C3",
      },
      secondary: {
        main: "#fff",
      },
    },
    typography: {
      fontFamily: "FiraGO",
      fontWeightLight: 100,
      fontWeightRegular: 200,
      fontWeightMedium: 300,
      fontWeightBold: 400,
    },
    props: {
      MuiIcon: {
        color: "#aa0011",
      },
    },
    components: {
      MuiIcon: {
        styleOverrides: {
          root: {
            primary: "#fff",
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            border: "none",
            outline: "none",
            borderRadius: "100px",
            textTransform: "lowercase",
            "&:focus": {
              outline: "none",
            },
          },
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: {
            backgroundColor: "#000",
          },
        },
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <MusicProvider>
          <Routes>
            <Route path="/" exact element={<MainPage />} />
            <Route path="/openCard/:id" exact element={<CardDetails />} />
          </Routes>
        </MusicProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
