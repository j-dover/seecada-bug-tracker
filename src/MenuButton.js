import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

function MenuButton() {
    return (
      <div className="MenuButton">
        <FontAwesomeIcon icon={faBars} />
      </div>
    );
}

export default MenuButton;
