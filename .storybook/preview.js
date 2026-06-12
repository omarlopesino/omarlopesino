import '../src/styles/global.css';

const preview = {
  parameters: {
    renderer: 'react',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};
export default preview;

