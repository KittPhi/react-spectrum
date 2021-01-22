import { useButton } from "@react-aria/button";
import { useRef } from "react";

// useButton Hook

export function UseButton(props) {
  let ref = useRef();
  let { buttonProps } = useButton(props, ref);
  let { children } = props;
  return (
    <button {...buttonProps} ref={ref}>
      {children}
    </button>
  );
}

export default UseButton;
