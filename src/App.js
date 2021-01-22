import {
  Provider,
  defaultTheme,
  Flex,
  Grid,
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
          <Grid
            flex
            areas={["header  header", "sidebar content", "footer  footer"]}
            columns={["1fr", "3fr"]}
            rows={["size-1000", "auto", "size-1000"]}
            height="size-6000"
            gap="size-100"
          >
            <View backgroundColor="celery-600" gridArea="header" />
            <View backgroundColor="blue-600" gridArea="sidebar" />
            <View backgroundColor="purple-600" gridArea="content" />
            <View backgroundColor="magenta-600" gridArea="footer">
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
            </View>
          </Grid>
        </View>
      </Provider>
    </div>
  );
}

export default App;
