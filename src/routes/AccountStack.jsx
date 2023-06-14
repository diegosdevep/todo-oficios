import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/account/profile/ProfileScreen';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name='profile' component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default AccountStack;
