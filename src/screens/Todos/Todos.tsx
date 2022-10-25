import { FunctionComponent } from 'react';
import { Layout, TodoList } from '../../components';

export const Todos: FunctionComponent = () => {
  return (
    <Layout>
      <TodoList />
    </Layout>
  );
};

