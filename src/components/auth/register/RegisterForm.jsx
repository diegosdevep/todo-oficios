import React, { useState, useLayoutEffect } from 'react';
import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button, Icon, Input } from 'react-native-elements';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import Toast from 'react-native-toast-message';
import { initialValues, validationSchema } from '../register/registerForm.data';
import { useFormik } from 'formik';
import { styles } from './registerForm.styles';
import theme from '../../../theme/theme';

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [keyboardShown, setKeyboardShown] = useState(false);
  const navigation = useNavigation();

  const showHidePassword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        const auth = getAuth();
        await createUserWithEmailAndPassword(
          auth,
          formValue.email,
          formValue.password
        );
      } catch (error) {
        Toast.show({
          type: 'error',
          position: 'bottom',
          text1: 'Error al registrarse',
        });
      }
    },
  });

  useLayoutEffect(() => {
    const showListener = Keyboard.addListener('keyboardDidShow', () =>
      setKeyboardShown(true)
    );
    const hideListener = Keyboard.addListener('keyboardDidHide', () =>
      setKeyboardShown(false)
    );

    return () => {
      showListener.remove();
      hideListener.remove();
    };
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.content}
      behavior='padding'
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -250}
    >
      {!keyboardShown && (
        <View style={styles.containerTitle}>
          <Image
            source={require('../../../../assets/logoNails.png')}
            style={styles.img}
          />
          <Text style={styles.title}>Todo Oficios </Text>
        </View>
      )}

      <View style={styles.form}>
        <Input
          containerStyle={styles.input}
          placeholder='Email'
          keyboardType='email-address'
          rightIcon={
            <Icon
              type='material-community'
              name='at'
              size={24}
              color={theme.colors.primary}
            />
          }
          onChangeText={(text) => formik.setFieldValue('email', text)}
          errorMessage={formik.errors.email}
        />
        <Input
          containerStyle={styles.input}
          placeholder='Password'
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={theme.colors.primary}
              onPress={showHidePassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('password', text)}
          errorMessage={formik.errors.password}
        />
        <Input
          containerStyle={styles.input}
          placeholder='Confirm Password'
          secureTextEntry={showPassword ? false : true}
          rightIcon={
            <Icon
              type='material-community'
              name={showPassword ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color={theme.colors.primary}
              onPress={showHidePassword}
            />
          }
          onChangeText={(text) => formik.setFieldValue('repeatPassword', text)}
          errorMessage={formik.errors.repeatPassword}
        />
        <View>
          <Button
            title='Crear Cuenta'
            containerStyle={styles.btn}
            buttonStyle={styles.btnStyle}
            titleStyle={styles.btnText}
            onPress={formik.handleSubmit}
            loading={formik.isSubmitting}
          />

          <Text
            style={styles.text}
            onPress={() => navigation.navigate('login')}
          >
            Ya tienes cuenta? <Text style={styles.span}>Ingresa aqui</Text>
          </Text>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterForm;
