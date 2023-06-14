import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/account/auth/login/LoginScreen';
import RegisterScreen from '../screens/account/auth/register/RegisterScreen';

const Stack = createNativeStackNavigator();

const AuthCheckStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='login' component={LoginScreen} />
      <Stack.Screen name='register' component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AuthCheckStack;
