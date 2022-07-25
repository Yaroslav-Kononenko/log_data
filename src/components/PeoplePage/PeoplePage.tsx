import React, { useEffect, useState } from 'react';
import { getPeople } from '../../api/api';
import { PeopleTable } from '../../components/PeopleTable';
import { PersonFromServer } from '../../react-app-env';
import './PeoplePage.scss';

export const PeoplePage:React.FC = React.memo(() => {
  const [people, setPeople] = useState<PersonFromServer[]>([]);

  useEffect(() => {
    getPeople()
      .then(response => setPeople(response.data));
  }, []);

  return (
    <div className="PeoplePage">
      <h1 className="PeoplePage__title">
        Students
      </h1>
      <PeopleTable people={people} />
    </div>
  );
});
