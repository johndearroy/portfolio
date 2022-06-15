import React from "react";

const Switch = () => {
  const [darkMode, setDarkMode] = React.useState(true);
  return (
    <div className="switch">
      <input 
        type="checkbox" 
        name="switch" 
        className="switch-checkbox" 
        id="switch" 
        tabIndex="0"
        checked={darkMode} 
        onChange={() => setDarkMode(!darkMode)}
      />
      <label className="switch-label" htmlFor="switch"/>
    </div>
  )
}

export default Switch;
