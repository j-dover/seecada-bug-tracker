import React from 'react';
// import logo from './logo.svg';
import logo from './seecada_logo_square_small.png'
import profile_pic from './default_profile_pic.png';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons'
// import { faBars } from '@fortawesome/free-solid-svg-icons'
import MenuButton from './MenuButton'

function App() {
  return (
    <div className="App">
      <div className="Wrapper">
        {/* Header */}
        <header className="App-header">
          <div className="header-nav">

            <MenuButton/>
            <img class="logo" src={logo} alt="Seecada logo"/>
            <form className="header-nav-search">
              <input type="text"/>
            </form>
            <div className="user">
              <img src={profile_pic} className="user-profile-pic"/>
            </div>
          </div>
        </header>
        {/* Side Menu */}
        <aside className="App-sidemenu">
          <div class="sidemenu">
            <ul>
              <li>
                <a>My Dashboard</a>
              </li>
              <li>
                Admin
                <ul></ul>
              </li>
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="App-main">
          <p>This should be content!</p>
        </main>

        {/* Footer */}
        <footer className="App-footer">

        </footer>
      </div>
    </div>
  );
}

export default App;
