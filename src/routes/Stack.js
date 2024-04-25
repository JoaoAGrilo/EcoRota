import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "../pages/Welcome";
import LoginScreen from "../pages/Login";
import Home from "../pages/Home";
import MapRender from "../pages/MapRender";


const Stack = createStackNavigator()

export default props => {
    return (
            <Stack.Navigator
            initialRouteName='LoginScreen'
            screenOptions={{headerShown: false }}>
                <Stack.Screen name='LoginScreen' component={LoginScreen}/>
                <Stack.Screen name='Welcome' component={Welcome}/>
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='MapRender' component={MapRender} />
            </Stack.Navigator>
    )
}