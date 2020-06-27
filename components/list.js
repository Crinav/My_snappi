import React from 'react';
import { Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import { ListItem } from "react-native-elements";
import axios from 'axios';
import styles from '../src/style';


export default class Home extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        mail: [],
        userMail: "",
        token: this.props.token,
        image: this.props.image,
        filename: this.props.filename,
        filetype: this.props.filetype
      }
    }

    goToTiming = async () => {
            
      Actions.timing({
        'token': this.state.token, 
        'userMail': this.state.userMail, 
        'image': this.state.image,
        'filename': this.state.filename,
        'filetype': this.state.filetype
       })
    }

    componentDidMount(){
      
      this.getList()
     
    }
  
    sortArrayAsc(array, key) {
      return array.sort(function (a,b) {
        //console.info(b.email)
        a.email = a.email.trim()
        b.email = b.email.trim()
        return b.email > a.email ? -1
             : b.email < a.email ? 1
             : 0
      })
    }
    async getList(){
        try{
          let resp = await axios.get('http://snapi.epitech.eu/all',{
            headers: {"token": this.props.token}
          })
          let sortMail = this.sortArrayAsc(resp.data.data, 'email')
          this.setState({mail: sortMail})
          
        }
        catch(error){
          console.log(error);
        }
    }

   
    gotoDetail = (i, item) => {
      //console.log(item)
      this.setState({userMail: item});
      
      setTimeout(() => {
        this.attend();
      }, 1000);
    };attend(){
      
      this.goToTiming()
    }
    

    render(){
    
        return (
          <View style={styles.container}>
          <ImageBackground source={require('../src/sky.jpg')} style={styles.backgroundImage}></ImageBackground>
            <View>
               <ScrollView persistentScrollbar={true}>
               
                  {
                  this.state.mail.map((item, i) => (
                    <ListItem 
                      value={<Text style={styles.email}>{item.email}</Text>}
                      button onPress={(i) => this.gotoDetail(i, item.email)}
                      key={i}
                      title={item.email}
                      
                    />
                    ))
                  }
            
            </ScrollView>
            <Text>Loading list...</Text>
              <TouchableOpacity > 
                    <Text style={styles.buttonSend} onPress={this.getList}>Valid</Text>
                </TouchableOpacity>
              </View>
          </View>
        )
    }
}

