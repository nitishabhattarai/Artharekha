//custom hook
import { useState } from 'react';

const useDarkMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(
      localStorage.getItem("isDarkMode") === "true"
    );

    // function to toggle
    const toggleDarkMode = () => {
      setIsDarkMode((prevMode) => {
        localStorage.setItem("isDarkMode", !prevMode as any);
        return !prevMode;
      });
    };
    return { isDarkMode, toggleDarkMode };
  };
  
  export default useDarkMode;
