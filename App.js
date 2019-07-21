import React, { Component } from 'react';

import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native';
import { timer } from 'rxjs';

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      stopwatchDisplay: 0,
      btnGo: "Go!"
    };

    this.currentTimer = null;

    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);

  };
  
  startTimer(){
    let startTimerState = this.state;

    // checks if the timer is running
    if (this.currentTimer != null) {
      
      // if the timer is running, then clearInterval to stop and set it back to null
      clearInterval(this.currentTimer);
      this.currentTimer = null;
    
      startTimerState.btnGo = "Go!";
      this.setState(startTimerState);

    } else {

      // set an interval to the timer
      this.currentTimer = setInterval(() => {
        startTimerState.stopwatchDisplay += 0.1;
        this.setState(startTimerState)
      }, 100)

      startTimerState.btnGo = "Stop!";
      this.setState(startTimerState);

    }

  };

  resetTimer(){
    let resetTimerState = this.state;

    // checks if the timer is running
    if (this.currentTimer != null) {

      // if the timer is running, then clearInterval to stop and set it back to null
      clearInterval(this.currentTimer);
      this.currentTimer = null;

    } 

    resetTimerState.stopwatchDisplay = 0;
    resetTimerState.btnGo = "Go!";
    this.setState(resetTimerState);

  };

  render() {
    return (
      <View style={myStyles.container}>
        
        {/* how to import an image */}
        <Image source = {require('./src/stopwatch.png')} style = {myStyles.stopwatchImg} />
        <Text style = {myStyles.counter}>{this.state.stopwatchDisplay.toFixed(2)}</Text>

        <View style = {myStyles.btnArea}>

          <TouchableOpacity style = {myStyles.btnStart} onPress = {this.startTimer} >
            <Text style = {myStyles.btnText}>{this.state.btnGo}</Text>
          </TouchableOpacity>

          <TouchableOpacity style={myStyles.btnClear} onPress = {this.resetTimer} >
            <Text style={myStyles.btnText}>Clear</Text>
          </TouchableOpacity>
        
        </View>

      </View>
    );
  }
}

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(167, 219, 216, 1)'
    
  },

  stopwatchImg: {
    height: 400,
    width: 400
  },

  counter: {
    marginTop: -100,
    marginBottom: 110,
    fontSize: 35    
  },

  btnStart: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF7E6BFF",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FF7E6BCC",
    height: 40,
    margin: 10
    
  },

  btnClear: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#FF7E6BFF",
    borderWidth: 2,
    borderRadius: 5,
    backgroundColor: "#FF7E6B33",
    height: 40,
    margin: 10
  },

  btnArea: {
    flexDirection: "row",
    borderColor: "red",
    height: 40,
    // borderWidth: 1
  },

  btnText: {
    color: "#FFF7F8",
    fontSize: 17,
    fontWeight: "600"
  }


});