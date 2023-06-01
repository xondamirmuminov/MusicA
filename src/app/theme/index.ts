import {extendTheme} from 'native-base';
import {colors} from './variables';

export const theme = extendTheme({
  colors,
  components: {
    Button: {
      baseStyle: {
        bg: 'main.100',
        backgroundColor: 'main.100',
        size: 'md',
        colorScheme: 'primary',
        rounded: '2xl',
        _text: {
          fontWeight: 700,
          color: 'white.100',
        },
      },
      defaultProps: {},
      variants: {
        secondary: {
          bg: 'black.100',
          backgroundColor: 'black.100',
          borderWidth: 1,
          borderColor: 'black.100',
        },
        outline: {
          bg: 'transparent',
          backgroundColor: 'transparent',
          borderColor: 'black.100',
          borderWidth: 1,
          _text: {
            color: 'black.100',
          },
        },
      },
      sizes: {
        lg: {
          height: '64px',
          rounded: '2xl',
        },
        md: {
          height: '52px',
          rounded: '2xl',
          _text: {
            fontWeight: 700,
          },
        },
        sm: {
          height: '36px',
          rounded: 'xl',
          _text: {
            fontSize: 'sm',
            lineHeight: 18,
            fontWeight: 600,
          },
        },
      },
    },
    Text: {
      baseStyle: {
        color: 'black.100',
      },
      defaultProps: {
        size: 'md',
      },
      sizes: {
        '2xs': {fontSize: 10},
        xs: {fontSize: 12},
        sm: {fontSize: 14},
        md: {fontSize: 16},
        lg: {fontSize: 18},
        xl: {fontSize: 20},
        '2xl': {fontSize: 22},
        '3xl': {fontSize: 24},
        '4xl': {fontSize: 26},
        '5xl': {fontSize: 28},
        '6xl': {fontSize: 30},
        '7xl': {fontSize: 32},
        '8xl': {fontSize: 34},
        '9xl': {fontSize: 36},
      },
    },
    Input: {
      baseStyle: {
        rounded: '2xl',
        height: '52px',
        borderColor: 'darkGray.100',
        invalidOutlineColor: 'error.500',
        _input: {
          fontSize: 'sm',
          color: 'black.100',
        },
        _focus: {
          borderColor: 'black.100',
          backgroundColor: 'transparent',
          _input: {
            color: 'black.100',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        _text: {
          _light: {
            color: 'dark.100',
            fontWeight: 600,
            fontSize: 'sm',
          },
          color: 'dark.100',
          fontWeight: 600,
          fontSize: 'sm',
        },
      },
      defaultProps: {
        isUnderlined: false,
      },
    },
    Badge: {
      defaultProps: {
        padding: '6px',
        paddingRight: '12px',
        paddingLeft: '12px',
        borderRadius: '8px',
        _text: {
          fontSize: 'sm',
          fontWeight: '600',
        },
      },
      variants: {
        delivered: {
          bg: 'green.50',
          backgroundColor: 'green.50',
          _text: {
            color: 'green.100',
          },
        },
        pending: {
          bg: 'yellow.50',
          backgroundColor: 'yellow.50',
          _text: {
            color: 'yellow.100',
          },
        },
        processing: {
          bg: 'blue.50',
          backgroundColor: 'blue.50',
          _text: {
            color: 'blue.400',
          },
        },
        delivering: {
          bg: 'blue.50',
          backgroundColor: 'blue.50',
          _text: {
            color: 'blue.400',
          },
        },
      },
    },
    Toast: {
      baseStyle: {
        bg: 'error.500',
        rounded: 'lg',
        p: '2',
        _title: {
          fontWeight: '500',
        },
      },
      defaultProps: {
        paddingLeft: '4',
        paddingRight: '4',
        _title: {
          fontSize: 'sm',
        },
      },
    },
  },
  fonts: {
    heading: 'Poppins-Bold',
    body: 'Poppins-Regular',
    mono: 'Poppins-Medium',
    semibold: 'Poppins-SemiBold',
  },
});
