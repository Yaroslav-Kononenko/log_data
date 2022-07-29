import React from 'react';
import { PersonFromServer } from '../../react-app-env';
import './ExtraInfoTable.scss';
import { UserInfoRow } from '../UserInfoRow';
import classnames from 'classnames';

interface Props {
  people: PersonFromServer,
}

export const ExtraInfoTable:React.FC<Props> = React.memo(({ people }) => {
  const testsArray = people.tests;
  let color_score = '';
  let color_speed = '';
  const percent_score = +people.score.slice(0, 2);

  if (percent_score >= 90) {
    color_score = 'blue';
  } else if (percent_score >= 80) {
    color_score = 'green';
  } else if (percent_score >= 50) {
    color_score = 'yellow';
  } else if (percent_score < 50) {
    color_score = 'orange';
  }

  if (people.speed.toLowerCase() === 'above expected') {
    color_speed = 'blue';
  } else if (people.speed.toLowerCase() === 'as expected') {
    color_speed = 'green';
  } else if (people.speed.toLowerCase() === 'below expected') {
    color_speed = 'orange';
  }

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
            <td >AVERAGE</td>

            <td 
              className={classnames(
                {'blue': color_score === 'blue'},
                {'green': color_score === 'green'},
                {'yellow': color_score === 'yellow'},
                {'orange': color_score === 'orange'}
              )}
            >
              {people.score}
            </td>

            <td className={classnames(
                {'blue': color_speed === 'blue'},
                {'green': color_speed === 'green'},
                {'orange': color_speed === 'orange'}
              )}
            >
              {people.speed}
            </td>

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