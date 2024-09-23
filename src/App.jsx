import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme.jsx";
import Header1 from "./Components/Header/Header1.jsx"
import Header2 from "./Components/Header/Header2.jsx"
import Header3 from "./Components/Header/Header3.jsx"
import Hero from "./Components/Hero/Hero.jsx";
import Main from "./Components/Main/Main.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import ScrollToTop from "./Components/Scroll/ScrollToTop.jsx";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <Header1 />
        <Header2 />
        <Header3 />
        <Box sx={{ bgcolor: theme.palette.bg.main }}>
          <Hero />
          <Main />
        </Box>
        <Footer />
        <ScrollToTop />
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
