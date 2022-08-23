import { Text, TextInput, View ,Button } from 'react-native'
import React, { Component } from 'react'

export class Home1 extends Component {
constructor(props){
  super(props);
  this.state={num1:""}
}

F1 = ()=>{
  var n1 = this.state.num1;
  alert(n1);
}


  render() {
    return (
      <View>
        <Text>Home1</Text>
        <TextInput style={{ borderWidth:1 , borderColor:"red" , margin:10 , borderRadius:10 ,}}   onChangeText={num1=>this.setState({num1})}></TextInput>
        <Button title="click me!" style={{margin:10 , borderRadius:10}} onPress={this.F1}/>
      </View>
    )
  }
}

export default Home1