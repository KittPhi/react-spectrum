import {
  Provider,
  defaultTheme,
  Flex,
  Button,
  Grid,
  View,
  Dialog,
  Heading,
  Header,
  Divider,
  ButtonGroup,
  Content,
  Form,
  Picker,
  TextArea,
  ActionButton,
  StatusLight,
  ProgressCircle,
  Item,
  Text,
} from "@adobe/react-spectrum";

import { RadioGroup } from "./components/radio";
import { UseAsyncList } from "./components/useAsyncList";
import { UseButton } from "./components/button";

function App() {
  return (
    <div>
      <Provider theme={defaultTheme}>
        <Button variant="primary" onPress={() => alert("Hey there!")}>
          Hello React Spectrum!
        </Button>
      </Provider>

      <UseButton>@react-aria/button useButton </UseButton>

      <Provider theme={defaultTheme}>
        <Dialog>
          <Heading>Heading</Heading>
          <Header>Header</Header>
          <Divider />
          <Content>
            <Text>Content</Text>
          </Content>
          <ButtonGroup>
            <Button variant="secondary">Button 1</Button>
            <Button variant="cta">Button 2</Button>
          </ButtonGroup>
        </Dialog>
      </Provider>

      <Provider theme={defaultTheme}>
        <RadioGroup
          defaultValue="dogs"
          onChange={(value) => alert(`Selected ${value}`)}
        />
      </Provider>

      <UseAsyncList></UseAsyncList>

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
