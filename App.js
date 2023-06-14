import { NavigationContainer } from '@react-navigation/native';
import AuthCheckScreen from './src/screens/account/AccountScreen';
import Toast from 'react-native-toast-message';
import { initFirebase } from './src/firebase/firebase';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Provider store={store}>
          <AuthCheckScreen />
        </Provider>
      </NavigationContainer>
      <Toast />
    </>
  );
}
