import React, { useState } from 'react';
import { PersonFromServer } from '../../react-app-env';
import './PeopleTable.scss';
import { PersonRow } from '../PersonRow';
import { getPeople } from '../../api/api';
import alfScroll from './alf_scroll.svg';
import arrowScrollId from './arrows_scroll.svg'

interface Props {
  people: PersonFromServer[],
  setPeople: (user: PersonFromServer[]) => void,
  usersRowNumber?: number,
  setUsersRowNumber: ( usersRowNumber: number ) => any,
  usersPage?: number,
  setUsersPage: (usersPage?: number) => any
}

export const PeopleTable:React.FC<Props> = React.memo(({ people, setPeople, usersRowNumber, usersPage }) => {
  const [sortDir, setSortDir] = useState(-1);
  const sortByAlf = () => {
    setSortDir(sortDir  * -1);
    getPeople(usersRowNumber, usersPage, `&sortBy=name&sortDir=${sortDir}`)
      .then(response => setPeople(response.data));
  };

  const sortByID = () => {
    setSortDir(sortDir  * -1);
    getPeople(usersRowNumber, usersPage, '')
      .then(response => setPeople(response.data));
  };

  const sortByClass = () => {
    setSortDir(sortDir  * -1);
    getPeople(usersRowNumber, usersPage, `&sortBy=class&sortDir=${sortDir}`)
      .then(response => setPeople(response.data));
  };

  const sortByScore = () => {
    setSortDir(sortDir  * -1);
    getPeople(usersRowNumber, usersPage, `&sortBy=score&sortDir=${sortDir}`)
      .then(response => setPeople(response.data));
  };

  const sortBySpeed = () => {
    setSortDir(sortDir  * -1);
    getPeople(usersRowNumber, usersPage, `&sortBy=speed&sortDir=${sortDir}`)
      .then(response => setPeople(response.data));
  };

  return (
    <>
      <table className="table">
        <thead className="table__head">
          <tr>
            <th><input type="checkbox" name='selectedUser' /></th>
            <th>
              <div className="table-name table-container">
                <span className="table-name__text">Name</span>
                <button 
                  className="table-name__button"
                  onClick={sortByAlf}
                >
                  <img src={alfScroll} alt="alfscroll" />
                </button>
              </div>
            </th>
            <th>
              <div className="table-id table-container">
                <span className="table-id__text">ID</span>
                <button 
                  className="table-name__button"
                  onClick={sortByID}
                >
                  <img 
                    className="table-id__img" 
                    src={arrowScrollId} 
                    alt="alfscroll" 
                  />
                </button>
              </div>
            </th>
            <th>
              <div className="table-class table-container">
                  <span className="table-class__text">Class</span>
                  <button 
                    className="table-name__button"
                    onClick={sortByClass}
                  >
                    <img 
                      className="table-class__img" 
                      src={arrowScrollId} 
                      alt="alfscroll" 
                    />
                  </button>
                </div>
            </th>
            <th>
              <div className="table-score table-container">
                <span>Av.Score, %</span>
                <button 
                  className="table-name__button"
                  onClick={sortByScore}
                >
                  <img 
                    className="table-score__img" 
                    src={arrowScrollId} 
                    alt="alfscroll" 
                  />
                </button>
              </div>
            </th>
            <th>
              <div className="table-score table-container">
                <span>Av.Speed</span>
                <button 
                  className="table-name__button"
                  onClick={sortBySpeed}
                >
                  <img 
                    className="table-score__img" 
                    src={arrowScrollId} 
                    alt="alfscroll" 
                  />
                </button>
              </div>
            </th>
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
