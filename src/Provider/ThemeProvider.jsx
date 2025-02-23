import { createContext, useEffect, useState } from "react"

export const ThemeContext = createContext();

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState(localStorage.getItem("theme")? localStorage.getItem("theme") : 'light');

    useEffect(()=>{
        const root = document.documentElement;
        root.setAttribute("data-theme", theme)

        if(theme == 'dark'){
            root.classList.add('dark');
        }
        else{
            root.classList.remove('dark')
        }

        localStorage.setItem("theme", theme)

    },[theme])

    const handleTheme = () =>{
        setTheme(prtheme =>
            prtheme == "light" ? "dark" : "light"
        )
    } 

  return (
    <ThemeContext.Provider value={{theme, handleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
