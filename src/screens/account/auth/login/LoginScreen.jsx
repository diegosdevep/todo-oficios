import { View, SafeAreaView, StatusBar } from 'react-native';
import LoginForm from '../../../../components/auth/login/LoginForm';
import { styles } from './loginScreen.styles';

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.leftCircle} />
      <View style={styles.rightCircle} />
      <LoginForm />
    </SafeAreaView>
  );
};

export default LoginScreen;
