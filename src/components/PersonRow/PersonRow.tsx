import React, { useState } from 'react';
import '../PeopleTable/PeopleTable.scss';
import './PersonRow.scss';
import opened from './opened.svg';
import closed from './closed.svg'

import { PersonFromServer } from '../../react-app-env';
import { ExtraUserInfo } from '../ExtraUserInfo';

type Props = {
  person: PersonFromServer,
}

export const PersonRow:React.FC<Props> = React.memo(({ person }) => {
  const [openStatus, setOpenStatus] = useState(false);

  return (
    <>
      <tr>
        <td><input type="checkbox" readOnly /></td>
        <td>{person.name}</td>
        <td>{person.id}</td>
        <td>{person.class}</td>
        <td>{person.score}</td>
        <td>{person.speed}</td>
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
