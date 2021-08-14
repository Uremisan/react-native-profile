import React from 'react';
import { View, StyleSheet,Image, TouchableOpacity, Text } from 'react-native';



const ProfileScreen = () => {
    return (

        <View style= {styles.container} >
            
            <View style= {styles.imageContainer} >
               
                <Image 
                   style= {styles.image}
                   source ={require('../../assets/Dave.jpg')}
                />
            </View>


        <View style={styles.textContainer}>
            <View style={styles.text} >
            <Text  style={styles.textHeader}>School</Text>
            <Text style={styles.textDetails}>Regent University College</Text>
        </View>
        
        
        <View  style={styles.text}>
            <Text style={styles.textLabel}>Email</Text>
            <Text style={styles.textContent}>myg@gmail.com</Text>
            
        </View>

        <View style={styles.text}>
            <Text style={styles.textLabel}>Name</Text>
            <Text style={styles.textContent}>Santan Dave</Text>
            <View style = {styles.line}></View>
        </View>

        <View style={styles.text}>
            <Text style={styles.textLabel}>Nick Name</Text>
            <Text style={styles.textContent}>SD</Text>
            <View style = {styles.line}></View>
        </View>

        <View style={styles.text}>
            <Text style={styles.textLabel}>Emergency Contact</Text>
            <Text style={styles.textContent}>+44 56907 3343</Text>
            <View style = {styles.line}></View>

        </View> 

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
                <Text  style={styles.buttonText}>Update Profile</Text>
            </TouchableOpacity>

        </View>         

     </View>
     </View>
     
       

    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 25,
        
        
    },
    imageContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    textContainer: {
        flex: 0.5,
       
       
    },

    text: {
        marginTop:20,
        marginHorizontal: 25,
        marginBottom: 4,
        
    },
    textHeader: {
        color: 'gray',
        fontSize:20,
        fontStyle: 'italic',   
    },
     
    textLabel: {
        color: "#1d87fb",
        fontSize: 18,
        fontStyle:'italic', 
        marginBottom: 4, 
           
     },
     textDetails:{
        fontSize: 18,
        color: '#36454F',  
        borderBottomColor: "#bec5cc",
        borderBottomWidth: 0.2,
        fontStyle: 'italic', 
          
    },


    textContent:{
        fontSize: 18,
        color: '#36454F',
        fontStyle: 'italic',   
    },
    line : {
        width : '100%',
        height : 1,
        backgroundColor : 'lightgray',     
    },

    buttonContainer:{
        flex: 0.1,
        borderBottomColor: '#bec5cc',
        borderBottomWidth: 0.4,
        alignItems: 'center',    
    },
    button: {
        width:300,
        height: 55,
        backgroundColor: '#1d87fb',
        borderRadius: 50,
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
       
    },
    
    buttonText: {
        color: "white",
        fontSize: 18,
        textTransform: "uppercase",
        fontStyle:'italic',
        
      },

});
export default ProfileScreen;