import React from 'react'
import {
  Text,
  View,
  TextInput,
  Button,

} from 'react-native';

const SignUp = () => {
  return (
    <>

      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Create Account</Text>
      </View>


      <View style={{ alignItems: 'center' }}>

        <TextInput TextInput placeholder={"Full Name"}
          style={{
            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15,


          }} />


        <TextInput placeholder="Email"
          style={{
            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15
          }} />


        <TextInput TextInput placeholder={"Password"}
          style={{

            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15
          }} />


        <TextInput TextInput placeholder={"Confirm Password"}
          style={{

            height: 42,
            width: "50%",
            borderBottomWidth: 1,
            fontWeight: 'bold',
            fontSize: 15
          }} />
      </View>

      <View style={{
        paddingBottom: 10,
        paddingTop: 20,
        width: 100,
        alignSelf: 'center'
      }}>
        <Button title='SignUp'></Button>
      </View>


      <View>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 20,
          textAlign: 'center'
        }}>Already have an account?</Text>

      </View>
    </>
  )
}


export default SignUp;