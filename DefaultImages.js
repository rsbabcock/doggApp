import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import CustomImage from './CustomImage';
import { getRandomImage } from './api'

class DefaultImages extends Component {
    state = {
        images: []
    }

    componentDidMount() {
        getRandomImage().then(images => this.setState({ images }))
    }
    render() {
        const images = this.state.images.slice(0, 3)
        const images2 = this.state.images.slice(3, 6)
        return (
            <View style={styles.wrapper}>
                <View >
                    <FlatList
                        data={images}
                        renderItem={({ item }) => <CustomImage image={item} />}
                        keyExtractor={item => (item.img)}
                    />
                </View>
                <View>
                    <FlatList
                        data={images2}
                        renderItem={({ item }) => <CustomImage image={item} />}
                        keyExtractor={item => (item.img)}
                    />
                </View>
            </View>
        )
    }

}

export default DefaultImages

const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   padding: 10,
    //   paddingTop: 45,
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   backgroundColor: '#E5E0E1'
    // },
    wrapper: {
      flex: 4,
      flexDirection: 'row',
      paddingTop: 15,
      alignItems: 'center',
      justifyContent: 'center',
    }
  });