import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TextInput, TouchableOpacity , ImageBackground} from 'react-native';
import axios from 'axios';
import styles from '../src/style';


export default class Timing extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        to: this.props.userMail,
        token: this.props.token,
        image: this.props.image,
        duration: "",
        filename: this.props.filename,
        filetype: this.props.filetype
      }
    }

    goToHome = () => {
        Actions.home({'token':this.state.token})
      }


    sendSnap =async()=>{
        const {to,token,image,duration,filetype,filename} = this.state;
        
        let formdata = new FormData()
        formdata.append('duration', duration)
        formdata.append('to', to)
        formdata.append('image', {uri:image, name: 'photo.jpg',
        type: 'image/jpg'});
          
       
        fetch('http://snapi.epitech.eu/snap', {
            method: 'post',
            dataType: 'json',
            headers: { 
                "Content-Type": "multipart/form-data",
                'token': token
                },
            body: formdata,
            
            })
        .then(response => response.json())
        .then(response => {
            
            console.log(response)
            if(response.data == 'Snap Created'){
                console.log(response.data)
                this.goToHome({'alert':'Your Snap has been sent !'});
            }
            else{
                this.goToHome({'alert':'Sorry, something went wrong !'});
            }
        })
        .catch((error) => {
            console.error(error);
            console.log('catch')
          });
    }

    render(){
        return (
            <View style={styles.container}>
        <ImageBackground source={require('../src/sky.jpg')} style={styles.backgroundImage}></ImageBackground>
            <View>
                <TextInput style={styles.inputBox}
                onChangeText={(duration) => this.setState({duration})}
                underlineColorAndroid='rgba(0,0,0,0)' 
                placeholder="Timing in sec"
                placeholderTextColor = "#002f6c"
                selectionColor="#fff"
                keyboardType="numeric"
                />
                <TouchableOpacity> 
                    <Text style={styles.buttonSend} onPress={this.sendSnap}> Send</Text>
                </TouchableOpacity>
            </View>
            </View>
        )
    }
}

