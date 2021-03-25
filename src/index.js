import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/app/app';

import Counter from './components/post-status-filter/Counter'



class WhoAmI extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   years: 26
    // }
    //this.nextYear = this.nextYear.bind(this);
    // this.nextYear = () => {
    //   this.setState(state => ({
    //     years: ++state.years
    //   }));
    // };
  }

  state = {
    years: 26
  }

  nextYear = () => {
      this.setState(state => ({
        years: ++state.years
      }));
    };
  // nextYear() {
  //   this.setState(state => ({
  //     years: ++state.years
  //   }));
  // }
  render(){
    const {name, surname, link} = this.props;
    const {years} = this.state;
    return (
      <>
      <button onClick={this.nextYear}>++</button>
        <h1>My name is {name}, surname - {surname}, years - {years}</h1>
        <a href={link}>My profile</a>
      </>
    );
  }
}

const All = () => {
  return (
    <>
      <WhoAmI name="John" surname="Smith" link="facebook.com" />
      <WhoAmI name="JoAlexhn" surname="Lecter" link="notthisshitagain.com" />
      <WhoAmI name="Alexxandron" surname="228" link="abaaba.com" />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
      <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);

