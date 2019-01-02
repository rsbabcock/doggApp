import React, { Component } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import CustomImage from './CustomImage';

class SearchImages extends Component {

    render() {
        const images = this.props.images.slice(0, 3)
        const images2 = this.props.images.slice(3, 6)
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

export default SearchImages

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