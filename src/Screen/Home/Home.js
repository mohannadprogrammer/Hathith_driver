import React, { Component } from 'react'
import { Text, View, StyleSheet, Switch } from 'react-native'
import Header from '../../Components/Header/Header'
import colors from '../../Assets/colors'

export default class Home extends Component {
    state = {
        orderDone: 2,
        Revenu: 100,
        orderRejected: 10,

    }
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header name="الرئسية" />
                <View style={[styles.container, { alignItems: "center" }]}>
                    <View style={[styles.dataView, { backgroundColor: colors.blue }]}>
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{"الطلبات المنفذه"}</Text>
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{this.state.orderDone}</Text>
                    </View>
                    <View style={[styles.dataView, { backgroundColor: colors.green }]}>
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{"العائد"}</Text>
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{this.state.Revenu}</Text>
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{"ريال "}</Text>
                    </View>
                    <View style={[styles.dataView, { backgroundColor: colors.danger }]}>
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{"الطلبات المرفوضة"}</Text>
                        <Text style={{ color: "#fff", fontSize: 16, textAlign: "center" }}>{this.state.orderRejected}</Text>
                    </View>

                </View>
                <View style={[styles.container, {
                    justifyContent: "space-around",
                    flexDirection: "row-reverse"

                }]}>
                    {/* <View style={{
                    }}> */}

                    <Switch>
                    </Switch>
                    <Text style={{ color: colors.blue, fontSize: 16, fontWeight: "bold" }}>استقبال الطلبات</Text>
                    {/* </View> */}

                </View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "center",
        alignItems: "flex-start",
        // backgroundColor: "red"
    },
    dataView: {
        flex: 1,
        height: 100,
        margin: 10,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"
        // flexGrow: 2
    }
})
