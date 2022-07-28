import React from 'react';
import { Tests } from '../../react-app-env';

type Props = {
  user: Tests,
  index?: number,
}

export const UserInfoRow:React.FC<Props> = React.memo(({ user, index = 0}) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>Finding {user.label}</td>
      <td>{user.score? user.score : `NIL`}</td>
      <td>{user.speed? user.speed : `NIL`}</td>
      <td>{user.total}</td>
      <td>{user.expSpeed}</td>
      <td>{user.concept}</td>
      <td>{user.date}</td>
      <td>{user.abcent}</td>
      <td><input type="checkbox" readOnly /></td>
    </tr>
  );
});
