import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { router, useLocalSearchParams } from 'expo-router';
import CustomButton from '../../components/CustomButton';

export default function ResetPassword() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleBack = () => {
    // go back to previous screen
    router.back();
  }

  const token = useLocalSearchParams();
  console.log(token);

  const handleNext = async () => {
      if(password !== confirmPassword) {
        Alert.alert('Chyba', 'Hesla se neshodují');
        return;
      }
      try {
        console.log(password);
        const response = await fetch('https://mba.bsfaplikace.cz/Auth/reset-password', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ password, token }),
        });
        console.log(response.status);
        const data = await response.json();
        if (response.status === 200) {
            console.log(data);
            router.push('/');
        } else {
            Alert.alert('Chyba', 'Nepodařilo se obnovit heslo');
        }
      } catch (error) {
        Alert.alert('Chyba', 'Nepodařilo se obnovit heslo');
      }
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={styles.header}>
          <View style={styles.headerBack}>
            <TouchableOpacity onPress={handleBack}>
            <FeatherIcon
              color="#1D2A32"
              name="chevron-left"
              size={30} />
            </TouchableOpacity>
          </View>

          <Text style={styles.title}>Forgot password?</Text>

          <Text style={styles.subtitle}>
            Enter the email associated with your account.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.input}>
            <Text style={styles.inputLabel}>Email Address</Text>

            <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="while-editing"
                keyboardType="password"
                onChangeText={setPassword}
                placeholder="novy heslo"
                placeholderTextColor="#6b7280"
                style={styles.inputControl}
                value={password}
                className={`my-3`}
                secureTextEntry
            />
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              clearButtonMode="while-editing"
              keyboardType="password"
              onChangeText={setConfirmPassword}
              placeholder="potvrdit heslo"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={confirmPassword}
              secureTextEntry
            />
          </View>

          <View style={styles.formAction}>
            <CustomButton title="Potvrdit" handlePress={handleNext} />
          </View>
        </View>
    </KeyboardAvoidingView>

      <TouchableOpacity
        onPress={() => {
          // handle link
        }}>
        <Text style={styles.formFooter}>
          Already have an account?{' '}
          <Text style={{ textDecorationLine: 'underline' }}>Sign in</Text>
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  title: {
    fontSize: 31,
    fontWeight: '700',
    color: '#1D2A32',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
  },
  /** Header */
  header: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  headerBack: {
    padding: 8,
    paddingTop: 0,
    position: 'relative',
    marginLeft: -16,
    marginBottom: 6,
  },
  /** Form */
  form: {
    marginBottom: 24,
    paddingHorizontal: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginTop: 4,
    marginBottom: 16,
  },
  formFooter: {
    paddingVertical: 24,
    fontSize: 15,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  /** Input */
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 50,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    borderStyle: 'solid',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});