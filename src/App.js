import React from "react";
import { SafeAreaView } from "react-native"
import LoginForm from "./components/molecules/LoginForm";

export default () => {
  return (
    <SafeAreaView style={{flex: 1}}>
        <LoginForm />
    </SafeAreaView>
  )
}
