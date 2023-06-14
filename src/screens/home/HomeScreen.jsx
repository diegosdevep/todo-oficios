import { View, Text, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { signOut as signOutAction } from '../../redux/authReducer';

const HomeScreen = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    const auth = getAuth();
    await signOut(auth);
    await AsyncStorage.removeItem('@userToken');
    dispatch(signOutAction()); // Despacha la acción signOut para actualizar el estado de autenticación
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title='Logout' onPress={logout} />
    </View>
  );
};

export default HomeScreen;
