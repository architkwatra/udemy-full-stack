import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap.css'
import FirstComponent from './components/examples/firstComponent';
import ThirdComponent from './components/examples/thirdComponent';
import SecondComponent from './components/examples/secondComponent';
import {BasicCounterButton} from './components/counter/BasicCounterButton';
import Counter from './components/counter/BasicCounterButton';
import TodoApp from './components/todoApp/todoApp';

class App extends Component {
  render() { 
    return ( 
      <>
        <TodoApp></TodoApp>
      </>
    );
  }
}

function ExampleComponents() {
  return (
    <div className = 'example-components'>
    <FirstComponent></FirstComponent>
    <SecondComponent></SecondComponent>
    <ThirdComponent></ThirdComponent>
    </div>

  )
}

export default App;