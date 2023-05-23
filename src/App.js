import * as React from "react";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./components/header";
import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about/index";
import Projects from "./pages/projects";

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  return (
    <React.Fragment>
      <div className="Sphere-White-Matte"></div>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          borderRadius: 1,
          height: "100%",
          padding: {
            xs: 5, // Set padding to 0 for extra small screen sizes
            sm: 10, // Set padding to 10 for small and larger screen sizes
          },
        }}
      >
        <Box className="banner-box">
          <div className="gradient-Eclipse"></div>
          <Header colorMode={colorMode} theme={theme} />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="projects" element={<Projects />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Box>
      <div className="Pill-Blue-Glossy">
        <img
          width={150}
          src={process.env.PUBLIC_URL + "Pill-Blue-Glossy.png"}
          alt="aka"
        />
      </div>
      <div className="SuperToroid-Yellow-Glossy">
        <img
          width={120}
          src={process.env.PUBLIC_URL + "SuperToroid-Yellow-Glossy.png"}
          alt="aka"
        />
      </div>
      <div className="RoundCube-Orange-Glossy">
        <img
          width={100}
          src={process.env.PUBLIC_URL + "RoundCube-Orange-Glossy.png"}
          alt="aka"
        />
      </div>
    </React.Fragment>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
