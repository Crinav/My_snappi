import React, { Component } from 'react';
import {  View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import AutoHeightImage from 'react-native-auto-height-image';

export default class ModalScreen extends Component {

  constructor(props){
    super(props)
    this.state = {
      image: this.props.image,
      duration: this.props.duration,
      snap_id: this.props.snap_id,
      token: this.props.token
    }
  }

  componentDidMount(){
   
    setTimeout(() => {
      this.goToDelet();
    }, this.timeSnap(this.state.duration));
  }

  goToDelet = () => {
    Actions.delet({
        'token': this.state.token, 
        'snap_id': this.state.snap_id,
    })
  }

  timeSnap(sec){
    sec = sec + "000"
    console.log(sec)
    return sec
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}