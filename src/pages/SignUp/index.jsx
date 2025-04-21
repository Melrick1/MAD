import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap} from '../../components/atoms/';
import {Header, Profile, TextInput} from '../../components/molecules/';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.pageContainer}>
      <Header title="Sign Up" />
      <View style={styles.contentContainer}>
        <Profile />
        <Gap height={26} />
        <TextInput label="Full Name" placeholder="Type full name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button label="Continue" />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
  },
  contentContainer: {
    backgroundColor: '#FFFFFF',
    marginTop: 24,
    flex: 1,
    paddingHorizontal: 24,
  },
});
