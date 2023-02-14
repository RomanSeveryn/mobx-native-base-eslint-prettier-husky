import React from 'react';
import {
  Input,
  Stack,
  Radio,
  View,
  Box,
  Select,
  CheckIcon,
  HStack,
  Checkbox,
  Button,
  Text,
  Switch,
  Pressable,
  Icon,
} from 'native-base';
import { Formik } from 'formik';
import { MaterialIcons } from '@expo/vector-icons';
import { signUpSchema } from '../helpers/validation-schema';
import { observer } from 'mobx-react-lite';
import store from '../store/store';

export const SignUp = observer(({ navigation }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const initialValues = {
    firstName: '',
    lastName: '',
    gender: 'male',
    country: '',
    password: '',
    terms: true,
    getInfo: false,
  };

  const onSubmit = (values) => {
    store.saveUser(values);
    navigation.navigate('Home');
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validationSchema={signUpSchema}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
        errors,
        handleBlur,
      }) => {
        return (
          <View mt={32}>
            <Stack space={4} w="75%" maxW="300px" mx="auto">
              <Text fontSize={24} fontWeight={500} mb={2}>
                Welcome
              </Text>
              <Input
                variant="rounded"
                placeholder="First Name"
                height={44}
                fontSize={16}
                value={values.firstName}
                onChangeText={handleChange('firstName')}
                _focus={{
                  _invalid: { backgroundColor: 'error.600' },
                }}
                borderColor={errors.firstName && 'error.600'}
                onBlur={handleBlur('firstName')}
              />
              <Input
                variant="rounded"
                placeholder="Last Name"
                height={44}
                fontSize={16}
                value={values.lastName}
                onChangeText={handleChange('lastName')}
                _focus={{
                  _invalid: { backgroundColor: 'error.600' },
                }}
                borderColor={errors.lastName && 'error.600'}
                onBlur={handleBlur('lastName')}
              />
            </Stack>
            <Radio.Group
              name="myRadioGroup"
              accessibilityLabel="favorite number"
              value={values.gender}
              onChange={(nextValue) => {
                setFieldValue('gender', nextValue);
              }}
            >
              <Stack
                space={4}
                w="75%"
                maxW="300px"
                mx="auto"
                flexDirection="row"
              >
                <Radio value="male" my={5}>
                  Male
                </Radio>
                <Radio value="female" my={5} ml={5}>
                  Female
                </Radio>
              </Stack>
            </Radio.Group>
            <Box alignItems="center">
              <Select
                selectedValue={values.country}
                w="75%"
                maxW="300px"
                height={44}
                fontSize={16}
                accessibilityLabel="Choose Country"
                placeholder="Choose Country"
                _selectedItem={{
                  bg: 'teal.600',
                  endIcon: <CheckIcon size="5" />,
                }}
                mt={1}
                onValueChange={(itemValue) => {
                  setFieldValue('country', itemValue);
                }}
              >
                <Select.Item label="Ukraine" value="Ukraine" />
                <Select.Item label="England" value="England" />
                <Select.Item label="USA" value="USA" />
                <Select.Item label="Poland" value="Poland" />
                <Select.Item label="Germany" value="Germany" />
              </Select>
              <Input
                value={values.password}
                onChangeText={handleChange('password')}
                _focus={{
                  _invalid: { backgroundColor: 'error.600' },
                }}
                borderColor={errors.password && 'error.600'}
                onBlur={handleBlur('password')}
                w={{
                  base: '77%',
                  md: '25%',
                }}
                height={44}
                fontSize={16}
                mt={5}
                type={showPassword ? 'text' : 'password'}
                InputRightElement={
                  <Pressable onPress={() => setShowPassword(!showPassword)}>
                    <Icon
                      as={
                        <MaterialIcons
                          name={showPassword ? 'visibility' : 'visibility-off'}
                        />
                      }
                      size={5}
                      mr="2"
                      color="muted.400"
                    />
                  </Pressable>
                }
                placeholder="Password"
              />
            </Box>

            <HStack ml={45} mr={45} mt={5}>
              <Checkbox
                shadow={2}
                value="terms"
                defaultIsChecked={values.terms}
                onChange={(checkbox) => {
                  setFieldValue('terms', checkbox);
                }}
                _focus={{
                  _invalid: {
                    // borderColor: touched.terms ? 'error.600' : 'primary.500',
                    borderWidth: 1,
                  },
                }}
                borderColor={errors.terms && 'error.600'}
                // borderWidth={1}
                onBlur={handleBlur('terms')}
              >
                I accept the terms & conditions
              </Checkbox>
            </HStack>
            <HStack ml={35} mt={5} alignItems="center" flexDirection="row">
              <Switch
                size="sm"
                value={values.getInfo}
                onToggle={(test) => {
                  setFieldValue('getInfo', test);
                }}
              />
              <Box>
                <Text fontSize={16}>I would like receive additional</Text>
                <Text fontSize={16}>information</Text>
              </Box>
            </HStack>
            <Button
              w="77%"
              maxW="300px"
              mt={5}
              ml={45}
              shadow={2}
              onPress={handleSubmit}
            >
              Sign up
            </Button>
          </View>
        );
      }}
    </Formik>
  );
});
