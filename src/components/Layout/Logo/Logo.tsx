import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import { REACT_ROUTES } from '../../../constans/routes';

export const Logo: FunctionComponent = () => (
  <Link
    to={REACT_ROUTES.HOME}
    className="navbar-brand"
  >
    Home
  </Link>
);
