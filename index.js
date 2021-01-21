import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';
function App() {
  return (
    <Provider theme={defaultTheme}>
      <Button variant="cta">Hello React Spectrum!</Button>
    </Provider>
  );
}