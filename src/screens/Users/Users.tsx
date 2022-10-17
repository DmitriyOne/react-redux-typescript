import { FunctionComponent } from 'react';

import { Layout, UserList } from '../../components';

export const Users: FunctionComponent = () => {
  return (
    <Layout>
      <div className='text-center w-50 mx-auto'>
        <UserList />
      </div>
    </Layout>
  );
};

