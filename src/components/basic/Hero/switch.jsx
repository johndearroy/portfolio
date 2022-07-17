import React from "react";
import { changeCssVariable } from "services/helper";

const Switch = () => {
  const [darkMode, setDarkMode] = React.useState(false);


React.useEffect(() => {
  const background = darkMode ? '#000000' : '#FFFFFF';
  const color = darkMode ? '#d5d5d5' : '#242d49';
  changeCssVariable('black', color);
  changeCssVariable('background', background);
}, [darkMode]);

  const handleToggle = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className="switch">
      {/* <input 
        type="checkbox" 
        name="switch" 
        className="switch-checkbox" 
        id="switch" 
        tabIndex="0"
        checked={darkMode} 
        onChange={handleToggle}
      />
      <label className="switch-label" htmlFor="switch"/> */}
      <p>
        <i className={`bx ${darkMode ? 'bx-sun': 'bx-moon'}`} onClick={() => setDarkMode(!darkMode)}/>
      </p>
    </div>
  )
}

export default Switch;
