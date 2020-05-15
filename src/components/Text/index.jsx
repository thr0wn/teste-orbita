import React from "react";
import * as Styles from "./index.styles";

const Text = ({ children, ...otherProps }) => (
  <Styles.Text {...otherProps}>{children}</Styles.Text>
);

export default Text;
