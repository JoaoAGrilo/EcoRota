import React from "react";
import { View, StyleSheet } from "react-native"
import Button from "../atoms/Button";
import TextInput from "../atoms/TextInput";

const LoginForm = () => {
  return (
    <View style={style.container}>
      <TextInput style={style.textInput} placeholder=" Email"/>
      <TextInput placeholder=" Senha"/>
      <Button onPress={() => console.warn("Olá função")}>Entrar</Button>
    </View>
  )
}

export default LoginForm

const style = StyleSheet.create({
  container: {
    width: '70%',
    alignSelf: "center",
    alignItems: "center",
  },
})