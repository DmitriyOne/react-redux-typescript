import * as TodoActionCreate from './todo';
import * as UserActionCreate from './user';

export default {
  ...TodoActionCreate,
  ...UserActionCreate
}
