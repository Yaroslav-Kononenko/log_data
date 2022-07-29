import React from 'react';
import './ExtraInfoUser.scss';
import { PersonFromServer } from '../../react-app-env';
import { ExtraInfoTable } from '../ExtraInfoTable/ExtraInfoTable';
import arrowDropDown from './arrow_drop_down.png';
import reloadButton from './reload_button.png';

type Props = {
  users: PersonFromServer;
}

export const ExtraUserInfo: React.FC<Props> = ({ users }) => {

  return (
    <div className="ExtraUserInfo">
      <div className="ExtraUserInfo__title">
        <span>
          student:{` `}  
          <span className="title-bold">
            {users.name}
          </span>
        </span>
        <span>
          id:{` `} 
          <span className="title-bold">
            {users.id}
          </span>
        </span>
      </div>

      <div className="ExtraUserInfo__selectors">
        <div className="selector">
          <span className="selector__text">
            All&nbsp;concepts
          </span>

          <img src={arrowDropDown} alt="drop-down triangle" />
        </div>

        <div className="selector">
          <span className="selector__text">
            All&nbsp;score
          </span>

          <img src={arrowDropDown} alt="drop-down triangle" />
        </div>

        <div className="selector">
          <span className="selector__text">
            All&nbsp;speed
          </span>

          <img src={arrowDropDown} alt="drop-down triangle" />
        </div>

        <div className="selector selector__calendar">
          <input 
            type="date" 
            placeholder='select period'
            className="selector__input"
          />
        </div>

        <button type='button' className='button button__reload'>
          <img src={reloadButton} alt="reload_button" />
        </button>
      </div>

      <div className="ExtraUserInfo__description description">
        <div className="description__score">
          <span className="lightgrey">score</span>

          <div className="blue">
            <div className="round blue-bg"></div>
            <span>90%+ Accuracy</span>
          </div>
          
          <div className="green">
            <div className="round green-bg"></div>
            <span>80 - 89% Accuracy</span>
          </div>

          <div className="yellow">
            <div className="round yellow-bg"></div>
            <span>50 - 79% Accuracy</span>
          </div>

          <div className="orange">
            <div className="round orange-bg"></div>
            <span>below 50% Accuracy</span>
          </div>
        </div>

        <div className="description__speed">
          <span className="lightgrey">speed</span>

          <div className="blue">
            <div className="round blue-bg"></div>
            <span>above expected</span>
          </div>
          
          <div className="green">
            <div className="round green-bg"></div>
            <span>as expected</span>
          </div>

          <div className="orange">
            <div className="round orange-bg"></div>
            <span>below expected</span>
          </div>
        </div>
      </div>

      <ExtraInfoTable 
        people={users}
      />
  
    </div>
  )
};