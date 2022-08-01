import React, { useEffect, useState } from 'react';
import { getPeople } from '../../api/api';
import { PeopleTable } from '../../components/PeopleTable';
import { PersonFromServer } from '../../react-app-env';
import { Pagination } from '../Pagination';
import { SearchBar } from '../SearchBar';
import './PeoplePage.scss';

export const PeoplePage:React.FC = React.memo(() => {
  const [people, setPeople] = useState<PersonFromServer[]>([]);
  const [totalPeople, setTotalPeople] = useState<number>(0);
  const [totalPages, setTotalPage] = useState<number>(0);
  const [usersRowNumber, setUsersRowNumber] = useState<any>(10);
  const [usersPage, setUsersPage] = useState<any>(1);


  useEffect(() => {
    getPeople()
      .then(response => {
        setPeople(response.data)
        setTotalPeople(response.totalCount)
        setTotalPage(response.totalPages)
      });
  }, []);

  return (
    <div className="PeoplePage">
      <SearchBar 
        users = {people} 
        setPeople = {setPeople}
      />
      <PeopleTable 
        people={people}
        setPeople={setPeople}
        usersRowNumber={usersRowNumber}
        usersPage={usersPage} 
        setUsersRowNumber={setUsersRowNumber} 
        setUsersPage={setUsersPage}
      />
      <Pagination 
        totalPages={totalPages}
        totalPeople={totalPeople}
        setPeople={setPeople}
        usersRowNumber={usersRowNumber}
        usersPage={usersPage} 
        setUsersRowNumber={setUsersRowNumber} 
        setUsersPage={setUsersPage}
      />
    </div>
  );
});
