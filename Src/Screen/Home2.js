import { Text, TextInput, View , Button} from 'react-native'
import React, { Component } from 'react'

export class Home2 extends Component {
  constructor(props){
    super(props);
    this.state ={ f1: 0,f2: 0,result: 0 };
  }

  Sum = ()=>{
   var N1 = parseInt(this.state.f1) ;
   var N2 = parseInt(this.state.f2) ;

    this.setState({result : N1 + N2 });
     
  }

  render() {
    return (
      <View>
        <TextInput style={{borderWidth:1, margin:10, borderColor:"red" , borderRadius:10}} placeholder="num1" onChangeText={(text) => this.setState({f1:parseInt(text)})}/>
        <TextInput style={{borderWidth:1, margin:10,borderColor:"red" , borderRadius:10}} placeholder="num2" onChangeText={(text) => this.setState({f2:parseInt(text)})}/>
        <Button title="sum" onPress={this.Sum}/>
        <Text>test {this.state.result}</Text>
      </View>
    )
  }
}

export default Home2