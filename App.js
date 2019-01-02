import React from 'react';
import { StyleSheet, TextInput, View, ActivityIndicator } from 'react-native';
import DefaultImages from './DefaultImages';
import { getBreedImages } from './api';
import SearchImages from './SearchImages';

export default class App extends React.Component {
  state = {
    text: "Search for a dog Breed",
    isLoading: false,
    images: [],
    searchComplete: false
  }

  _renderImages() {
    if (this.state.isLoading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size='large' color="#403E3E" />
        </View>
      )
    }
    if(this.state.searchComplete){
      return(
        <SearchImages images={this.state.images} />
      )
    }
    else {
      return (
        <DefaultImages />
      )
    }
  }

  _onSearch() {
    this.setState({ text: '', isLoading: true })
  }

  _onSubmit(){
    console.log(this.state.text)
    getBreedImages(this.state.text).then(images => this.setState({ images: images, isLoading: false, searchComplete: true }))
    // this.setState({isLoading: false})
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder={this.state.text}
            onChangeText={(text) => this.setState({ text })}
            onFocus={()=>this._onSearch()}
            onSubmitEditing={() => this._onSubmit()}
            value={this.state.text}
          />
        </View>
        {this._renderImages()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 45,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E5E0E1'
  },
  wrapper: {
    flex: 4,
    flexDirection: 'row',
    paddingTop: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 25,
    height: 50,
    width: 400,
    backgroundColor: 'white',
    borderRadius: 25
  },
  input: {
    height: 40,
    fontSize: 30,
    fontWeight: '400',
    fontStyle: 'italic',
    color: 'black',
    textDecorationStyle: 'double'
  }
})
