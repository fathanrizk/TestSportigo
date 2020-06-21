import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Splash, Login, Register, WelcomeAuth ,Court} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Splash" component={Splash} 
            options={{
                headerShown: false,
            }}/>
            <Stack.Screen name="Login" component={Login} 
            options={{
                headerShown: false,
            }}
            />
            <Stack.Screen name="Register" component={Register}
            options={{
            headerShown: false,
            }} />
            <Stack.Screen name="Court" component={Court}
            options={{
            headerShown: false,
            }} />
            <Stack.Screen name="WelcomeAuth" component={WelcomeAuth} />
            
        </Stack.Navigator>
    );
};

export default Router;