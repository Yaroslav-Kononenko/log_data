import React from 'react';
import { PersonFromServer } from '../../react-app-env';
import './PeopleTable.scss';
import { PersonRow } from '../PersonRow';
import { getPeople } from '../../api/api';
import alfScroll from './alf_scroll.svg';

interface Props {
  people: PersonFromServer[],
  setPeople: (user: PersonFromServer[]) => void,
}

export const PeopleTable:React.FC<Props> = React.memo(({ people, setPeople }) => {
  return (
    <>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th><input type="checkbox" readOnly /></th>
            <th>
              <div className="table-name">
                <span className="table-name__text">Name</span>
                <button 
                  className="table-name__button"
                  onClick={() => {}}
                >
                  <img src={alfScroll} alt="alfscroll" />
                </button>
              </div>
            </th>
            <th>ID</th>
            <th>Class</th>
            <th>Av.Score, %</th>
            <th>Av.Speed</th>
            <th>Parents</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <PersonRow person={person} key={person.id}/>
          ))}
        </tbody>
      </table>
    </>
  );
});
