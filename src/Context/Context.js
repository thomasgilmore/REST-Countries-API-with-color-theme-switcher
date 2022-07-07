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

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }
  
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetch(`${API_URL}/name/${inputValue}`)
        .then(res => res.json())
        .then((result) => {
          setCountryList(result);
        })
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
    handleDarkMode
  }

  return (
    <CountriesContext.Provider value={value}>
      {children}
    </CountriesContext.Provider>
  )
}

export { CountriesContextProvider, CountriesContext }