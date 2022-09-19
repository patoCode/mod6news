export const API_KEY = `25d3250c777f4ee6b89a1e70c5062b8c`
export const endpoint = `https://newsapi.org/v2/top-headlines`
export const country = 'ar'

// * FIRESTORE
export const collectionNews = 'news'
/*

import React, { useState, useEffect } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import analytics from '@react-native-firebase/analytics';


const LoginFunction = (props) => {

    const [name, setName] = useState("")

    //crecion
    useEffect(() => {
        console.log("Init App")
    }, [])


    // Update of state variable
    useEffect(() => {
        if (name != '')
            console.log("Updated")
    }, [name])

    // Eliminacion
    useEffect(() => {
        return () => {
            console.log("Component Deleted!")
        }
    }, [])

    const handleButton = () => {
        setName('Denis')
    }

    return (
        <View>
            <Text style={style.headerColor}>Componente de función: {name} {props.lastName}</Text>
            <Button onPress={handleButton} title="Nombre Funcion" />
            <Button onPress={async () => {
                await analytics().logEvent('LOG_ET')
                console.log("LOGEADO")
            }
            }
                title="LOGGER" />
        </View>
    )
}

const style = StyleSheet.create({
    headerColor: {
        color: 'black',
        fontWeight: "bold"
    }
})

export default LoginFunction

*/