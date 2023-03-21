import { BackstageOverrides } from '@backstage/core-components';
import {
  BackstageTheme,
  createTheme,
  genPageTheme,
  lightTheme,
  shapes,
} from '@backstage/theme';

const sweetOrange = '#FBB040';
const vividOrange = '#F15A29';
const blue = '#253F66';
const gradient = [sweetOrange, vividOrange];

const baseTheme = createTheme({
  palette: {
    ...lightTheme.palette,
    navigation: {
      background: blue,
      indicator: vividOrange,
      color: 'white',
      selectedColor: vividOrange,
      navItem: {
        hoverBackground: 'rgba(0, 0, 0, 0.2);'
      }
    },
  },
  defaultPageTheme: 'home',
  fontFamily: 'Poppins, sans-serif;',
  /* below drives the header colors */
  pageTheme: {
    home: genPageTheme({ colors: gradient, shape: shapes.wave }),
    documentation: genPageTheme({ colors: gradient, shape: shapes.wave2 }),
    tool: genPageTheme({ colors: gradient, shape: shapes.round }),
    service: genPageTheme({ colors: gradient, shape: shapes.wave }),
    website: genPageTheme({ colors: gradient, shape: shapes.wave }),
    library: genPageTheme({ colors: gradient, shape: shapes.wave }),
    other: genPageTheme({ colors: gradient, shape: shapes.wave }),
    app: genPageTheme({ colors: gradient, shape: shapes.wave }),
    apis: genPageTheme({ colors: gradient, shape: shapes.wave }),
  },
});

const createCustomThemeOverrides = (): BackstageOverrides => {
  return {
    BackstageHeader: {
      title: {
        fontFamily: 'Montserrat, sans-serif;'
      }
    },
  };
};

export const customTheme: BackstageTheme = {
  ...baseTheme,
  overrides: {
    // These are the overrides that Backstage applies to `material-ui` components
    ...baseTheme.overrides,
    // These are your custom overrides, either to `material-ui` or Backstage components.
    ...createCustomThemeOverrides(),
  },
};
