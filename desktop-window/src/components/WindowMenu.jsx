import React, { useState } from "react";
import windows from "../styles/img/windowsIcon.png";

function WindowMenu() {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="menu_container">
      <div className="menu-btn" onClick={handleMenu}>
        <img src={windows} alt="windows-icon" />
      </div>

      {menu && <div className="menu-window-container"></div>}
    </div>
  );
}

export default WindowMenu;
