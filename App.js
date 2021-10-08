import React, { Component, useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function App() {

  const [validateScore, setValidateScore] = useState(true);
  const [validateNum, setValidateNum] = useState(true);
  const [validatePass, setValidatePass] = useState('');
  const [sixCharStrength, setSixCharStrength] = useState(false);
  const [oneNumStrength, setOneNumStrength] = useState(false);
  const [oneUpperStrength, setOneUpperStrength] = useState(false);
  const [oneSpecialChar, setOneSpecialChar] = useState(false);
  

  function validateScore2(text) {
    let validScore = new RegExp(/^[\d]+$/);

    if (validScore.test(text)) {
      setValidateScore(true);
    }
    else {
      setValidateScore(false);
    }
  }

  function validatePhoneNum2(text) {
    let validNum = new RegExp(/^\(?([\d]{3})\)?[-. ]?([\d]{3})[-. ]?([\d]{4})+$/);

    if (validNum.test(text)) {
      setValidateNum(true);
    }
    else {
      setValidateNum(false);
    }
  }

  function validatePassword2(text) {
    let validWeakPassword = new RegExp('(?=.{6,})');
    let validMediumPassword = new RegExp('(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9])))(?=.{7,})');
    let validStrongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\\W)(?=.{8,})');

    let sixCharacterRegex = new RegExp('[a-zA-Z0-9@$!%*#?&]{6,}');
    let oneNumRegex = new RegExp('[0-9]');
    let oneUppercaseRegex = new RegExp('[A-Z]');
    let oneSepcialCharRegex = new RegExp('[@$!%*#?&]');

    if(sixCharacterRegex.test(text)){
      setSixCharStrength(true)
    }
    else{
      setSixCharStrength(false)

    }

    if(oneNumRegex.test(text)){
      setOneNumStrength(true)
    }
    else{
      setOneNumStrength(false)
    }

    if(oneUppercaseRegex.test(text)){
      setOneUpperStrength(true)
    }
    else{
      setOneUpperStrength(false)
    }

    if(oneSepcialCharRegex.test(text)){
      setOneSpecialChar(true)
    }
    else{
      setOneSpecialChar(false)
    }

    if (!validWeakPassword.test(text)) {
      setValidatePass("Weak")
    }
    else if (validStrongPassword.test(text)) {
      setValidatePass("Strong")
    }

    else if (validMediumPassword.test(text)) {
      setValidatePass("Medium")
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={[styles.textBoxContainer3, validateScore ? '' : styles.error]}
        placeholder="Enter a Score"
        maxLength={5}
        onChangeText={(text) => validateScore2(text)}
      />

      <Text style={styles.inputErrors}>
        {validateScore ? '' : 'Please enter numbers only'}
      </Text>

      <TextInput style={[styles.textBoxContainer1, validateNum ? '' : styles.error]} 
      placeholder = "Enter a Phone Number"
      onChangeText = {(text) => validatePhoneNum2(text)}
      />

      <Text style = {styles.inputErrors}>
      {validateNum ? '' : "Please enter a valid 10 digit phone number"}
      </Text>

      <TextInput style={styles.textBoxContainer2}
      placeholder = "Enter a Password"
      onChangeText = {(text) => validatePassword2(text)}
      />

      <Text style = {styles.inputErrors}>
        {validatePass=="Weak" ? 'WEAK' : ''}

        <Text style = {styles.mediumPassword}>
          {validatePass=="Medium" ? 'MEDIUM' : ''}
        </Text>

        <Text style = {styles.greenText}>
          {validatePass=="Strong" ? 'STRONG' : ''}
        </Text>

      </Text>

      <Text style={styles.passMustHaveContainer}>
      The password must contain:
      </Text>

      <Text style={[sixCharStrength ? styles.greenText : null]}>
        {sixCharStrength ? <Ionicons name="md-checkmark-circle" size={15} color="green"/> : null}
        {"At least 6 characters"}
      </Text>

      <Text style={[oneNumStrength ? styles.greenText : null]}>
        {oneNumStrength ? <Ionicons name="md-checkmark-circle" size={15} color="green"/> : null}
        {"At least one number"}
      </Text>

      <Text style={[oneUpperStrength ? styles.greenText : null]}>
        {oneUpperStrength ? <Ionicons name="md-checkmark-circle" size={15} color="green"/> : null}
        {"At least one uppercase letter"}
      </Text>

      <Text style={[oneSpecialChar ? styles.greenText : null]}>
        {oneSpecialChar ? <Ionicons name="md-checkmark-circle" size={15} color="green"/> : null}
        {"At least one special character"}
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignContent: 'center',
    padding: 40,
    backgroundColor: '#fff',
  },
  textBoxContainer1: {
    borderColor: 'black',
    borderWidth: 2,
    width: '70%',
    height: '12%',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 12,
  },
  textBoxContainer2: {
    borderColor: 'black',
    borderWidth: 2,
    width: '70%',
    height: '12%',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 12,
  },
  textBoxContainer3: {
    borderColor: 'black',
    borderWidth: 2,
    width: '70%',
    height: '12%',
    borderRadius: 15,
    padding: 10,
    paddingLeft: 12,
  },
  passMustHaveContainer:{
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,

  },
  error: {
    borderWidth: 3,
    borderColor: 'red',
  },
  inputErrors: {
    color: 'red',
  },
  mediumPassword: {
    color: 'orange',
  },

  greenText: {
    color: 'green'
  },

});


