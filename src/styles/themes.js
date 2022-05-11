import React from 'react';
import { extendTheme } from 'native-base';


  const themeSFI = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: '#701a75',
      },
      secondary: {
        100: '#010101',
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: '#d97706',
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: 'dark',
    },
  });
export default themeSFI;
