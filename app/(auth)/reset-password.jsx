import React, { useState } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { router } from 'expo-router';

export default function ResetPassword() {
  const [form, setForm] = useState({
    email: '',
  });

  const handleBack = () => {
    // go back to previous screen
    router.back();
  }

  const handleNext = async () => {
      try {
          const response = await axios.post('https://mba.bsfaplikace.cz/Auth/forgot-password', { email });
          router.push('/reset-password');
      } catch (error) {
            Alert.alert('Chyba', 'Nepodařilo se obnovit heslo');
      }
  }

  return (
    <SafeAreaView style={{ flex: 1 }} className="bg-gray-100">
{/*       <KeyboardAwareScrollView style={styles.container}> */}
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
              onChangeText={email => setForm({ ...form, email })}
              placeholder="Enter Password"
              placeholderTextColor="#6b7280"
              style={styles.inputControl}
              value={form.email}
            />
            <TextInput
                style={{
                    height: 50,
                    backgroundColor: 'white',
                    paddingHorizontal: 10,
                    marginBottom: 15,
                    borderRadius: 10,
                    borderColor: '#ccc',
                    borderWidth: 1,
                    fontSize: 16,
                }}
                placeholder="Heslo"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                placeholderTextColor="#aaa"
            />
          </View>

          <View style={styles.formAction}>
            <TouchableOpacity
              onPress={handleNext()}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </KeyboardAvoidingView>
{/*       </KeyboardAwareScrollView> */}

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