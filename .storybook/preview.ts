import type { Preview } from '@storybook/react-vite'

// Import global CSS styles
import '../src/outlined-icons.css';
import '../src/rounded-icons.css';
import '../src/theme.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
  },
};

export default preview;