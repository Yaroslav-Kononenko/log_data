import React, { useEffect, useState } from 'react';
import { getPeople } from '../../api/api';
import { PeopleTable } from '../../components/PeopleTable';
import { PersonFromServer } from '../../react-app-env';
import { SearchBar } from '../SearchBar';
import './PeoplePage.scss';

export const PeoplePage:React.FC = React.memo(() => {
  const [people, setPeople] = useState<PersonFromServer[]>([]);

  useEffect(() => {
    getPeople()
      .then(response => setPeople(response.data));
  }, []);

  return (
    <div className="PeoplePage">
      <SearchBar 
        users = {people} 
        setPeople = {setPeople}
      />
      <PeopleTable people = {people} setPeople={setPeople}/>
    </div>
  );
});
