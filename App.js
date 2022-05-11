/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View
} from 'react-native';

import { NativeBaseProvider, Box, Center, Container, Text, Heading, Flex, Spacer, HStack, Button, Stack, FormControl, Input, WarningOutlineIcon,
Link, Radio, Select, CheckIcon, Switch, Progress} from "native-base";
import themeSFI from './src/styles/themes';
import TrialIcon from './src/Assets/icons/trialIcon';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'light';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    
    <NativeBaseProvider theme={themeSFI}>

      {/* <Button onPress={() => console.log("hello world")} size="sm" variant="solid">Click Me</Button>
      <Button onPress={() => console.log("hello world")} size="sm" variant="subtle">Click Me</Button>
      <Button onPress={() => console.log("hello world")} size="sm" variant="link">Click Me</Button>
      <Button onPress={() => console.log("hello world")} size="sm" variant="outline">Click Me</Button>
      <Button onPress={() => console.log("hello world")} size="sm" variant="ghost">Click Me</Button>
      <Button isLoading>Button</Button>
      <Button isLoading isLoadingText="Submitting"> Button </Button>

        <Center>
        <Box w="3/4" maxW="300">
          <Select minWidth="200" accessibilityLabel="Choose Service" placeholder="Choose Service" _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />
        }} mt={1}>
            <Select.Item label="UX Research" value="ux" />
            <Select.Item label="Web Development" value="web" />
            <Select.Item label="Cross Platform Development" value="cross" />
            <Select.Item label="UI Designing" value="ui" />
            <Select.Item label="Backend Development" value="backend" />
          </Select>
        </Box>
        
      </Center> */}
      <Center>
        <TrialIcon />
      </Center>
    </NativeBaseProvider>      
  );
};


export default App;
