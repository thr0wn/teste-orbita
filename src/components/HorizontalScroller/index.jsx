import React from "react";
import * as Styles from "./index.styles";

const HorizontalScroller = ({ children, ...otherProps }) => (
  <Styles.HorizontalScroller {...otherProps}>
    {children}
  </Styles.HorizontalScroller>
);

export default HorizontalScroller;
