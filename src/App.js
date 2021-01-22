import {
  Provider,
  defaultTheme,
  Flex,
  Heading,
  Form,
  Picker,
  TextArea,
  Button,
  ActionButton,
  StatusLight,
  ProgressCircle,
  Item,
  Text,
  View,
} from "@adobe/react-spectrum";

function App() {
  return (
    <div>
      <Provider theme={defaultTheme}>
        <Button variant="primary" onPress={() => alert("Hey there!")}>
          Hello React Spectrum!
        </Button>
      </Provider>

      <Provider theme={defaultTheme}>
        <View borderWidth="thin" borderColor="dark" padding="size-200">
          <Flex width="size-3000" justifyContent="space-around">
            <View
              height="size-600"
              width="size-600"
              backgroundColor="blue-400"
            ></View>
            <View
              height="size-600"
              width="size-600"
              backgroundColor="red-500"
            ></View>
            <View
              height="size-600"
              width="size-600"
              backgroundColor="green-600"
            ></View>
          </Flex>
        </View>
      </Provider>
    </div>
  );
}

export default App;
