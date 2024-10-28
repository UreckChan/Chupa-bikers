import React from 'react';

const Header = ({page}) => {
  return (
    
    <header id="header">
      <div className="container">
        <div className="logo">
          <a href="/">
            <img src='/images/logoo.png' alt="Sports" />
          </a>
        </div>
        <nav id="nav">
          <div className="opener-holder">
            <a href="#" className="nav-opener"><span></span></a>
          </div>
          <a href="/register" className="btn btn-primary rounded">Unete al reto</a>
          <div className="nav-drop">
          <ul>
          {page !== "Formulario" ? (
          <>
            <li className="active visible-sm visible-xs"><a href="#">Home</a></li>
            <li><a href="#inicio">Inicio</a></li>
            <li><a href="#acerca">Acerca de</a></li>
            <li><a href="#reto">Reto</a></li>
          </>
          ) : null}
          </ul>

            <div className="drop-holder visible-sm visible-xs">
              <span>Follow Us</span>
              <ul className="social-networks">
                <li><a className="fa fa-github" href="#"></a></li>
                <li><a className="fa fa-twitter" href="#"></a></li>
                <li><a className="fa fa-facebook" href="#"></a></li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
