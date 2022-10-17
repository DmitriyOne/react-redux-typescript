import { FunctionComponent, useEffect } from 'react';

import { Spinner } from '../Spinner';
import { Error } from '../Error';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

export const TodoList: FunctionComponent = () => {
  const store = useTypedSelector(state => state.todos)
  const { fetchTodos } = useActions()

  useEffect(() => {
    fetchTodos()
  }, [])

  if (store.loading) {
    return <Spinner />
  }

  if (store.error) {
    return <Error />
  }
  return (
    <div>
      {store.todos.map((todo) =>
        <div className="input-group mb-3" key={todo.id}>
          <div className="input-group-text">
            <input
              className="form-check-input mt-0"
              type="checkbox"
              value=""
              aria-label="Checkbox for following text input"
              checked={todo.completed}
            />
          </div>
          <div
            key={todo.id}
            className="d-flex form-control align-items-center"
          >
            <span className='fs-5'>
              {todo.id}.&nbsp;
            </span>
            <h2 className='fs-5 mb-0 text-start fw-normal'>
              {todo.title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};
