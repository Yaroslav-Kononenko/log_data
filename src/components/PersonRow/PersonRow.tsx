import React, { useState } from 'react';
import '../PeopleTable/PeopleTable.scss';
import './PersonRow.scss';
import opened from './opened.svg';
import closed from './closed.svg';
import classnames from 'classnames';

import { PersonFromServer } from '../../react-app-env';
import { ExtraUserInfo } from '../ExtraUserInfo';

type Props = {
  person: PersonFromServer,
}

export const PersonRow:React.FC<Props> = React.memo(({ person }) => {
  const [openStatus, setOpenStatus] = useState(false);

  let color_score = '';
  let color_speed = '';
  const percent_score = +person.score.slice(0, 2);

  if (percent_score >= 90) {
    color_score = 'blue';
  } else if (percent_score >= 80) {
    color_score = 'green';
  } else if (percent_score >= 50) {
    color_score = 'yellow';
  } else if (percent_score < 50) {
    color_score = 'orange';
  }

  if (person.speed.toLowerCase() === 'above expected') {
    color_speed = 'blue';
  } else if (person.speed.toLowerCase() === 'as expected') {
    color_speed = 'green';
  } else if (person.speed.toLowerCase() === 'below expected') {
    color_speed = 'orange';
  }

  return (
    <>
      <tr>
        <td><input type="checkbox" readOnly /></td>
        <td>{person.name}</td>
        <td>{person.id}</td>
        <td>{person.class}</td>

        <td className={classnames(
            {'blue': color_score === 'blue'},
            {'green': color_score === 'green'},
            {'yellow': color_score === 'yellow'},
            {'orange': color_score === 'orange'}
          )}
        >
          {person.score}
        </td>

        <td className={classnames(
            {'blue': color_speed === 'blue'},
            {'green': color_speed === 'green'},
            {'orange': color_speed === 'orange'}
          )}
        >
          {person.speed}
        </td>

        <td>{person.parents?.join(', ')}</td>
        <td>
          <button 
            onClick={() => setOpenStatus(!openStatus)}
            className="select-button"
          >
            {openStatus? (
              <img src={opened} alt="opened" />
            ) : (
              <img src={closed} alt="closed" />
            )}
          </button>
        </td>
      </tr>

      { openStatus && (
            <tr>
              <ExtraUserInfo users={person} />
            </tr>
        )
      }
    </>
  );
});
