import { View, SafeAreaView, StatusBar } from 'react-native';
import RegisterForm from '../../../../components/auth/register/RegisterForm';
import { styles } from './registerScreen.styles';

const RegisterScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle='light-content' />
      <View style={styles.leftCircle} />
      <View style={styles.rightCircle} />

      <RegisterForm />
    </SafeAreaView>
  );
};

export default RegisterScreen;
