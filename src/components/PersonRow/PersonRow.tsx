import React from 'react';

import { PersonFromServer } from '../../react-app-env';

type Props = {
  person: PersonFromServer,
}

export const PersonRow:React.FC<Props> = React.memo(({ person }) => {
  return (
    <tr>
      <td><input type="checkbox" readOnly /></td>
      <td>{person.name}</td>
      <td>{person.id}</td>
      <td>{person.class}</td>
      <td>{person.score}</td>
      <td>{person.speed}</td>
      <td>{person.parents?.join(', ')}</td>
    </tr>
  );
});
