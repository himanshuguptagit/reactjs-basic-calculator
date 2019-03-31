import React, { Component } from 'react';
import './App.css';
import KeyButton from './containers/keyButton';

class App extends Component {

  constructor(){

    super();

    this.state = {
      currentScreen: "",
      currentResult: 0,
    };

    this.keyClickListener = this.keyClickListener.bind(this);


  }


  keyClickListener(value){
    console.log(value);
    let operation = value;
    switch(operation){

      case '=':
        let result = this.state.currentResult;
        result = eval(this.state.currentScreen);
        this.setState({currentResult: result});
      break;

      case 'AC':
        this.setState({currentScreen: ""});
        this.setState({currentResult: 0});
      break;

      default:
        let newScreen = this.state.currentScreen;
        newScreen += operation;
        this.setState({currentScreen: newScreen});
    }


  }


  render() {
    return (
      <div className="App">
      <div className="calculator">
        <div className="screen">
        {this.state.currentScreen}
        </div>
        <div className="result">
        {this.state.currentResult}

        </div>
        <div className="keypad">
          <div class="row">
            <KeyButton value="7" keyClickListener={this.keyClickListener}/>
            <KeyButton value="8" keyClickListener={this.keyClickListener}/>
            <KeyButton value="9" keyClickListener={this.keyClickListener}/>
            <KeyButton value="*" keyClickListener={this.keyClickListener}/>
          </div>
          <div class="row">
            <KeyButton value="4" keyClickListener={this.keyClickListener}/>
            <KeyButton value="5" keyClickListener={this.keyClickListener}/>
            <KeyButton value="6" keyClickListener={this.keyClickListener}/>
            <KeyButton value="-" keyClickListener={this.keyClickListener}/>

          </div>

          <div class="row">
            <KeyButton value="1" keyClickListener={this.keyClickListener}/>
            <KeyButton value="2" keyClickListener={this.keyClickListener}/>
            <KeyButton value="3" keyClickListener={this.keyClickListener}/>
            <KeyButton value="+" keyClickListener={this.keyClickListener}/>
          </div>

          <div class="row">
            <KeyButton value="0" keyClickListener={this.keyClickListener}/>
            <KeyButton value="=" keyClickListener={this.keyClickListener}/>
            <KeyButton value="AC" keyClickListener={this.keyClickListener}/>
            <KeyButton value="/" keyClickListener={this.keyClickListener}/>

          </div>

        </div>
      </div>

      </div>
    );
  }
}

export default App;
