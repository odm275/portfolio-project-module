import React, { Component } from 'react';
import './Projects.css';
//components
import JsProjectsList from './JsProjectsList';
import pseudoApi from '../pseudoApi';//Load our Pseudo API.

class Projects extends Component {
  constructor(){
    super();
    this.state = {
        display:true,
    };
  };
  render() {
    console.log(pseudoApi);
    const description = pseudoApi.data[0];

    return (
      <div className="Projects">
        <JsProjectsList
          icon = {description.icon}
          img = {description.imgpreview}
          text = {description.text}
        />
      </div>
    );
  }
}

export default Projects;
