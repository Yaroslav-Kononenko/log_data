import React, { useEffect, useCallback } from 'react';
import './Pagination.scss';
import arrow_left from './arrow_left.svg';
import arrow_right from './arrow_right.svg';
import { PersonFromServer } from '../../react-app-env';
import { getPeople } from '../../api/api';

interface Props {
  totalPeople: number,
  totalPages: number,
  setPeople: (user: PersonFromServer[]) => void,
  usersRowNumber: number,
  setUsersRowNumber: ( usersRowNumber: number ) => void,
  usersPage: number,
  setUsersPage: (usersPage?: number) => void
}

export const Pagination: React.FC<Props> = ({ 
  setPeople, 
  totalPages, 
  totalPeople,
  usersRowNumber,
  setUsersRowNumber,
  usersPage,
  setUsersPage
}) => {
  const updateUsers = useCallback(() => {
    getPeople(usersRowNumber, usersPage)
    .then(response => setPeople(response.data))
  }, [setPeople, usersPage, usersRowNumber]);

  let fromUser = usersRowNumber * usersPage - usersRowNumber + 1;
  let beforeUser = usersRowNumber * usersPage;

  const handleChange = ( event: any ): void => {
    const { value } = event.target;
    setUsersRowNumber(+value);
  }

  useEffect(() => {
    updateUsers();
  }, [updateUsers, usersRowNumber]);

  useEffect(() => {
    updateUsers();
  }, [updateUsers, usersPage]);

  return (
    <div className="Pagination">
      <div className="Pagination__field">
        Rows per page:
        <label className="select-pagination">
          <select name="users" value={usersRowNumber} onChange={handleChange}>
            <option value="10">10</option>
            {totalPeople >= 20 && (
              <option value="20">
                20
              </option>
            )}
            {totalPeople >= 50 && (
              <option value="50">50</option>
            )}
            {totalPeople >= 100 && (
              <option value="100">100</option>
            )}
          </select>
        </label>
      </div>


      <span 
        className="Pagination__info"
      >
        {`${fromUser}-${beforeUser} of ${totalPeople}`}
      </span>

      <div className="Pagination__control control">
        <button className="control">
          <img 
            src={arrow_left} 
            alt="nav-arrow-left"
            className="control__arrow"
            onClick={() => {
              if (usersPage > 1) {
                setUsersPage(usersPage - 1)
              }
            }} 
          />
        </button>
        <button className="control">
          <img 
            src={arrow_right} 
            alt="nav-arrow-right"
            className="control__arrow"
            onClick={() => {
              if (usersPage < totalPages) {
                setUsersPage(usersPage + 1)
              }
            }} 
          />
        </button>
      </div>
    </div>
  )
};
