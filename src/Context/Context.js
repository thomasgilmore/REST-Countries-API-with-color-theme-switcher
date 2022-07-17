import { createTheme } from "@mui/material/styles";
import { createContext, useState, useEffect } from "react"
import { API_URL } from "../Constants/Constants";

const AppState = {

}

const CountriesContext = createContext();

const CountriesContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  const [countryToDisplay, setCountryToDisplay] = useState('');
  const [countryList, setCountryList] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: 'hsl(207, 26%, 17%)',
        darkBlue: 'hsl(209, 23%, 22%)',
        veryDarkBlueBackground: 'hsl(207, 26%, 17%)',
        veryDarkBlueText: 'hsl(200, 15%, 8%)',
        darkGray : 'hsl(0, 0%, 52%)',
        veryLightGray : 'hsl(0, 0%, 98%)',
        white : 'hsl(0, 0%, 100%)',
      }
    },
    typography: {
      fontFamily: "Nunito Sans",
      color: 'hsl(200, 15%, 8%)'
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (themeParam) => `
        h4 {
          color: ${themeParam.palette.primary.white};
        }
      `,
      }
    },
  });

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const handleSearchSubmit = (event) => {
    if (event.target.value === '') {
      fetch(`${API_URL}/all`)
      .then(res => res.json())
      .then((result) => {
        setCountryList(result);
      })
    } else {
      event.preventDefault();
      fetch(`${API_URL}/name/${event.target.value}`)
          .then(res => res.json())
          .then((result) => {
            setCountryList(result);
          })
    }
  }

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    fetch(`${API_URL}/all`)
      .then(res => res.json())
      .then((result) => {
        setCountryList(result);
      })
  }, [])

  const value = {
    inputValue,
    setInputValue,
    countryToDisplay, 
    setCountryToDisplay,
    countryList, 
    setCountryList,
    handleInputChange,
    handleSearchSubmit,
    darkMode, 
    setDarkMode,
    handleDarkMode,
    theme
  }

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  )
}

export { CountriesContextProvider, CountriesContext }