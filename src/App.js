import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SignUpPage from "./Components/SignUpPage/SignUpPage";
import LoginPage from "./Components/LoginPage/LoginPage";
import HomePage from "./Components/HomePage/HomePage";
import NewsPage from "./Components/News/NewsPage";
import LiteracyPage from "./Components/Literacy/LiteracyPage";
import WelcomePage from "./Components/WelcomePage/WelcomePage"
import PodcastPage from "./Components/PodcastPage/PodcastPage"
import PodcastPage1 from "./Components/PodcastPage1/PodcastPage1"
import PortfolioPage from "./Components/PortfolioPage/PortfolioPage"
import ReportsPage from "./Components/ReportsPage/ReportsPage";
import NomuraPandSPage from "./Components/NomuraPandS/NomuraPandSPage";
import FirstTime from "./Components/FirstTime/FirstTime";
import StocksPage from "./Components/StocksPage/StocksPage";

import React, { useState, useEffect } from "react";
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Components/globalStyles";
import { lightTheme, darkTheme } from "./Theme";
import "./App.css";

function App() {

  const [theme, setTheme] = useState('light');
  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
}

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
      <GlobalStyles/>


    <div className="App">
    <button  onClick={themeToggler}>Switch Theme</button>


      <BrowserRouter>
        <Routes>
          <Route path="/home"            element={<HomePage />} />
          <Route path="/literacy"        element={<LiteracyPage />} />
          <Route path="/news"            element={<NewsPage />} />
          <Route path="/"                element={<WelcomePage />} />

          <Route path="/login"           element={<LoginPage />} />
          <Route path="/signup"          element={<SignUpPage />} />
          <Route path="/podcast"         element={<PodcastPage />} />
          
          <Route path="/podcast1"        element={<PodcastPage1 />} />
          <Route path="/portfolio"       element={<PortfolioPage />} />
          <Route path="/stocks"          element={<StocksPage />} />
          <Route path="/reports"         element={<ReportsPage />} />
          <Route path="/nomurapands"     element={<NomuraPandSPage />} />
          <Route path="literacyDetails"  element={<LiteracyPage />} /> 
          <Route path="firsttime"        element={<FirstTime />} /> 
        </Routes>
      </BrowserRouter>
    </div>
    
    
    </>
    </ThemeProvider>

  );
}

export default App;



