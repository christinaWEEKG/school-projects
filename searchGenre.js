import * as React from "react";
import { StyleSheet, Text, View, SafeAreaView, TextInput, Image, FlatList,Dimensions, Button} from 'react-native';

const data = require('./data.json');

export default class SearchGenre extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        searchText: '',
      };
    }

  render() {
    const filteredData = this.state.searchText
        ? data.filter(x =>
            x.Genre.toLowerCase().includes(this.state.searchText.toLowerCase())): data;
      return (
        
      <View style={styles.container}>
        <View style = {{flexDirection:'row', justifyContent:'center',alignItems:'center',backgroundColor:"#000"}}>

          <TextInput style={styles.inputBox}
              underlineColorAndroid="rgba(0,0,0,0)"
              placeholder="Search by Genre..."
              selectionColor="black"
              keyboardType="default"
              onChangeText={text => this.setState({ searchText: text })}
              value={this.state.searchText}
          />
          <Button color='transparent'
            onPress={()=>this.setState({searchText:""})}
              title='🗑️' />
          </View>
          
        <SafeAreaView style={{paddingBottom:250}}>
            <FlatList styles={{ flex: 1 }}
                  data={filteredData}
                  renderItem={({ item }) => 
                <View style={styles.item}>
                  <Image source={{uri:item.image}} style={{width:190,height:110,marginTop:20, borderRadius:4, resizeMode:'contain'}}/>
                      <View style={styles.text}>
                          <Text style={{fontWeight:'bold'}}>{item.title}</Text>
                        <Text>{item.Genre}</Text>
                      </View>
                </View>
                }
              />
        </SafeAreaView>
      </View>
      );
    }
}
  
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ecf0f1',
  },
    inputBox: {
      height: 40,
      borderWidth: 1,
      paddingLeft: 30,
      paddingRight: 30,
      margin: 10,
      borderRadius: 8,
      backgroundColor: '#FFFFFF',
  },
    item: {
      flexDirection: 'row',
      flex:1,
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignItems: 'center',
      width: Dimensions.get('screen').width,
      borderWidth: 0.01,
      shadowColor: "#000",
        shadowOffset: { width: 0, height: 0.2 },
        shadowOpacity: 0.01,
        shadowRadius:3,
        elevation: 3,
  },
  text: {
    width: Dimensions.get('screen').width,
    marginBottom:5,
    alignItems: 'center',
    justifyContent: 'center'
  }
})