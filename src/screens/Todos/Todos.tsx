import { FunctionComponent } from 'react';
import { Layout, TodoList } from '../../components';

export const Todos: FunctionComponent = () => {
  return (
    <Layout>
      <div className='text-center'>
        <TodoList />
      </div>
    </Layout>
  );
};

