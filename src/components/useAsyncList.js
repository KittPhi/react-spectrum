import {
  Provider,
  View,
  Picker,
  defaultTheme,
  Item,
} from "@adobe/react-spectrum";
import { useAsyncList } from "react-stately";

export function UseAsyncList() {
  let list = useAsyncList({
    async load({ signal }) {
      let res = await fetch("https://nigerianbanks.xyz/", { signal });
      let json = await res.json();
      console.log(json);
      return { items: json };
    },
  });
  return (
    <Provider theme={defaultTheme}>
      <View borderWidth="thin" borderColor="dark" padding="size-200">
        <Picker
          label="react-stately useAsyncList Select a bank"
          items={list.items}
          isLoading={list.isLoading}
        >
          {(item) => <Item key={item.name}>{item.name}</Item>}
        </Picker>
      </View>
    </Provider>
  );
}

export default UseAsyncList;
