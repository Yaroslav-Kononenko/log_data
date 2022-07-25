import React from 'react';
import { PersonFromServer } from '../../react-app-env';
import './PeopleTable.scss';
import { PersonRow } from '../PersonRow';

interface Props {
  people: PersonFromServer[],
}

export const PeopleTable:React.FC<Props> = React.memo(({ people }) => {
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Class</th>
            <th>Av.Score, %</th>
            <th>Av.Speed</th>
            <th>Parents</th>
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
