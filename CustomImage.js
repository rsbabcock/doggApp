{/* <Image source={item.img} style={{width: 50, height: 50}}/> */}

import React, { Component } from 'react'
import { StyleSheet, View, Image} from 'react-native'

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        // flexDirection: 'row',
        padding: 10,
        margin: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    }
});

class CustomImage extends Component{
    render(){
        // const imgArry = 
        // console.log(this.props.image)
        return (
            <View style={styles.container}>
                <Image source={{uri: this.props.image.img}} style={{width: 150, height: 150, borderRadius: 10}}/>                    
            </View>
        )
    }
}

export default CustomImage