import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import colors from '../../Assets/colors'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerName}>{this.props.name} </Text>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        backgroundColor: "#FFFF"
    },
    headerName: {
        color: colors.main,
        fontSize: 20,
        fontWeight: "bold"
    }
})
