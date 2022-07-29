import React from 'react';
import { Tests } from '../../react-app-env';
import classnames from 'classnames';

type Props = {
  user: Tests,
  index?: number,
}

export const UserInfoRow:React.FC<Props> = React.memo(({ user, index = 0}) => {
  let color_score = '';
  const percent_score = user.score / user.total;

  if (percent_score >= 0.9) {
    color_score = 'blue';
  } else if (percent_score >= 0.8) {
    color_score = 'green';
  } else if (percent_score >= 0.5) {
    color_score = 'yellow';
  } else if (percent_score < 0.5) {
    color_score = 'orange';
  }

  if (!user.score) {
    color_score = '';
  }

  return (
    <tr>
      <td>{index + 1}</td>
      <td>Finding {user.label}</td>
      <td className={classnames(
          {'blue': color_score === 'blue'},
          {'green': color_score === 'green'},
          {'yellow': color_score === 'yellow'},
          {'orange': color_score === 'orange'}
        )}
      >
        {user.score? user.score : `NIL`}
      </td>

      <td>
        {user.speed? user.speed : `NIL`}
      </td>
      <td>{user.total}</td>
      <td>{user.expSpeed}</td>
      <td>{user.concept}</td>
      <td>{user.date}</td>
      <td>{user.abcent}</td>
      <td><input type="checkbox" readOnly /></td>
    </tr>
  );
});
