import React, { useState, useEffect } from 'react';
import './SearchBar.scss';
import { PersonFromServer } from '../../react-app-env';
import searchButton from './searchbar_logo.svg';
import exportImg from './export_csv.svg';
import { getPeople } from '../../api/api';

type Props = {
  users: PersonFromServer[];
  setPeople: (user: PersonFromServer[]) => void; 
}

export const SearchBar: React.FC<Props> = ({ users, setPeople }) => {
  const [listOfUsers, setListofUsers] = useState('');

  const filterFunc = (user: PersonFromServer) => {
    let nameFilter = user.name.toLowerCase().includes(listOfUsers.toLowerCase());
    let idFilter = user.id.toString().toLowerCase().includes(listOfUsers.toLowerCase());
    let parents = user.parents?.join(', ');
    let parentFilter = false;

    if(parents) {
      parentFilter = parents.toLowerCase().includes(listOfUsers.toLowerCase());
    }

    return nameFilter || idFilter || parentFilter;
  };

  useEffect(() => {
    getPeople()
      .then(response => setPeople(response.data.filter(filterFunc)));
  }, [ listOfUsers ]);
  
  const filterTodosByTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setListofUsers(event.target.value);
  };

  return (
    <div className="SearchBar">
      <h1 className="SearchBar__title">
        Students
      </h1>

      <div className="SearchBar__inputField input">
        <label>
          <input
            type="text"
            className="SearchBar__inputField-sizes input__field"
            value={listOfUsers}
            onChange={filterTodosByTitle}
            tabIndex={1}
            placeholder="Enter Student Name, Parent or ID here"
          />
        </label>

        <button 
          type="button" 
          className="input__button"
          onClick={()=>{console.log('clicked')}}
        >
          <img src={searchButton} alt="searchbar" className="input__button--sizes"/>
        </button>
      </div>

      <div className="SearchBar__export">
        <img 
          src={exportImg} 
          alt="export_logo" 
          className="exportImg" 
        />

        <span>
         EXPORT CSV
        </span>
      </div>
    </div>
  )
};