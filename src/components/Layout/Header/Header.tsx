import { FunctionComponent } from 'react';

import { Logo } from '../Logo';
import { Menu } from '../Menu';

export const Header: FunctionComponent = () => (
  <header>
    <nav className="navbar bg-light">
      <div className="container d-flex justify-content-between">
        <Logo />
        <ul className='d-flex navbar-nav flex-row'>
          <Menu />
        </ul>
      </div>
    </nav>
  </header>
);
