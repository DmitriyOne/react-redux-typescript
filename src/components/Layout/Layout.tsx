import { FunctionComponent, ReactNode } from 'react';

import { Header } from './Header';

type TPops = {
  children?: ReactNode
}

export const Layout: FunctionComponent<TPops> = ({
  children
}) => (
  <div>
    <Header />
    <main className='pt-4 pb-4'>
      {children}
    </main>
  </div>
);
