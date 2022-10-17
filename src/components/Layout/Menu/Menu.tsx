import { FunctionComponent } from 'react';
import { NavLink } from 'react-router-dom';

import { MenuLinks } from '../../../constans/menu';

export const Menu: FunctionComponent = () => (
  <>
    {MenuLinks.map((item, idx) => {
      return (
        <li
          key={idx}
          className="nav-item px-2"
        >
          <NavLink
            to={item.link}
            className="nav-link"
          >
            {item.text}
          </NavLink>
        </li>
      )
    })}
  </>
);
