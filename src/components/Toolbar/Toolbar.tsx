import React from 'react';
import './Toolbar.scss';
import triangle from './triangle_pointer.svg';
import cross from './cross.svg';

export const Toolbar: React.FC = () => {
  return (
    <div className="Toolbar">
      <ul className="Toolbar__parametrs">
        <li className="nav-parametr">
          show all

          <div className="nav-parametr__container">
            <img 
              src={triangle} 
              alt="triangle"
              className="triangle"
            />
          </div>
        </li>

        <li className="nav-parametr">
          all grades

          <div className="nav-parametr__container">
            <img 
              src={triangle} 
              alt="triangle"
              className="triangle"
            />
          </div>
        </li>

        <li className="nav-parametr">
          all classes

          <div className="nav-parametr__container">
            <img 
              src={triangle} 
              alt="triangle"
              className="triangle" 
            />
          </div>
        </li>

        <li className="nav-parametr">
          av.score

          <div className="nav-parametr__container">
            <img 
              src={triangle} 
              alt="triangle"
              className="triangle" 
            />
          </div>
        </li>

        <li className="nav-parametr">
          av.speed

          <div className="nav-parametr__container">
            <img 
              src={triangle} 
              alt="triangle"
              className="triangle"
            />
          </div>
        </li>

        <li className="nav-parametr">
          all classes

          <div className="nav-parametr__container">
            <img 
              src={triangle} 
              alt="triangle"
              className="triangle" 
            />
          </div>
        </li>

        <li className="nav-parametr">
          <div className="nav-parametr__container">
            <img 
              src={cross} 
              alt="cross"
              className="cross" 
            />
          </div>

          clear all
        </li>
      </ul>
    </div>
  )
};