import { FunctionComponent } from 'react';

export const Spinner: FunctionComponent = () => {
  return (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )
};
