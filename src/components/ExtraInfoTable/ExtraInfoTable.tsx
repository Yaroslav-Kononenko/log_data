import React from 'react';
import { PersonFromServer } from '../../react-app-env';
import './ExtraInfoTable.scss';
import { UserInfoRow } from '../UserInfoRow';

interface Props {
  people: PersonFromServer,
}

export const ExtraInfoTable:React.FC<Props> = React.memo(({ people }) => {
  const testsArray = people.tests; 

  return (
    <>
      <table className="ExtraInfoTable">
        <thead>
          <tr>
            <th>#</th>
            <th>Test Label</th>
            <th>Score</th>
            <th>Speed</th>
            <th>Total Q-ns</th>
            <th>Exp.Speed</th>
            <th>Concept</th>
            <th>Date</th>
            <th>Abcent</th>
          </tr>
        </thead>
        <tbody>
          {testsArray?.map((person, index) => (
            <UserInfoRow user={person} index={index}/>
          ))}
        </tbody>
      </table>

      <table className="ExtraInfoTable ExtraInfoTable__total">
        <tbody>
          <tr>
            <td></td>
            <td>AVERAGE</td>
            <td>{people.score}</td>
            <td>{people.speed}</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </>
  );
});