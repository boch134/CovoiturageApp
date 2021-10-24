import React from 'react'
import { StyleSheet, Text, View ,ImageBackground} from 'react-native'
import Button from './components/Button'
import Card from './components/Card'
import UserDetails from './components/UserDetails'
import {Container} from "./Config/ContainerConfig"

export default function PublicationDetail({title , prix , imageSrc}) {
    return (
        <ImageBackground blurRadius={2} style={[styles.background,Container]} source={require('../assets/back.jpg') }  >
        <View >
            
            <Card title={title} prix={prix} imageSrc={imageSrc}  />
            <View style={styles.container}>
                <UserDetails title="Melek Ketata" subTitle="29267362" imageSrc={imageSrc}  style={{top:30}}/>
                <Button title= "Reserver" color="beige" style={styles.Button}/>
            </View>
        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background :  {
        flex : 1 , 
        alignItems : 'center' 
        
    } ,
    container :
    {
        marginHorizontal : 30 ,
        
    
    } , 
    Button :{
        alignSelf :"center" , 
        top : 60 , 
        width : "100%"
    }
})
