import { FunctionComponent, useEffect } from 'react';

import { useActions } from '../../hooks/useActions';
import { useTypedSelector } from '../../hooks/useTypedSelector';

import { Spinner } from '../Spinner';
import { Error } from '../Error';

export const UserList: FunctionComponent = () => {
  const store = useTypedSelector(state => state.users)
  const { fetchUsers } = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  if (store.loading) {
    return <Spinner />
  }

  if (store.error) {
    return <Error />
  }

  return (
    <div>
      {store.users.map((user) =>
        <div
          key={user.id}
          className="card mt-2"
        >
          <div className="card-body">
            <h2 className="card-title fs-4">
              Name: {user.name}
            </h2>
            <h3 className="card-subtitle text-muted fs-6">
              Username: {user.username}
            </h3>
            <a href={`mailto:${user.email}`} className="card-link">
              {user.email}
            </a>
          </div>
        </div>
      )}
    </div>
  )
};
