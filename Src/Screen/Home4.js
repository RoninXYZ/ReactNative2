import { Text, View ,TextInput ,Button, ScrollView, Alert } from 'react-native'
import React, { Component } from 'react'

export class Home4 extends Component {
  constructor(props){
    super(props);
    this.state={
    alfa :"",
    alfa1:"" ,
    N:"" ,
    N1:"",
   
  }
  }

 f1=()=>{
  this.setState({N:this.state.alfa * this.state.alfa1})
  var N2 = this.state.N;
  alert(N2)
  
 } 

 f2 = ()=>{
  this.setState({N1: this.state.alfa / this.state.alfa1})
  var N3 = this.state.N1;
  alert(N3)
  
 }
  

  render() {
    return (
      <View>
        <ScrollView>
        <TextInput  onChangeText={(Num1)=>{this.setState({alfa:parseInt(Num1)})}}/>
        <TextInput onChangeText={(Num1)=>{this.setState({alfa1:parseInt(Num1)})}}/>
        <Button title="Perkalian" onPress={this.f1} />
        <Text style={{ color:"red" , fontSize:30 }}>{this.state.N}</Text>
        <Button title="Pembagian" onPress={this.f2} />
        <Text style={{ color:"red" , fontSize:40 }}>{this.state.N1}</Text>
        </ScrollView>
      </View>
    )
  }
}

export default Home4