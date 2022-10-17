import { FunctionComponent, useEffect } from 'react';
import classNames from 'classnames'

import { Spinner } from '../Spinner';
import { Error } from '../Error';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

import styles from './todoList.module.scss'

export const TodoList: FunctionComponent = () => {
  const pages = [1, 2, 3, 4, 5]
  const store = useTypedSelector(state => state.todos)
  const { fetchTodos, setTodoPage } = useActions()

  useEffect(() => {
    fetchTodos(store.page, store.limit)
  }, [store.page])

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
      <div className='d-flex justify-content-center'>
        {pages.map((page, idx) =>
          <div
            key={idx}
            className={classNames(
              page === store.page ? styles.active : '',
              styles.pagination
            )}
            onClick={() => setTodoPage(page)}
          >
            {page}
          </div>
        )}
      </div>
    </div>
  );
};
