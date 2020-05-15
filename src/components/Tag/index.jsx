import React from "react";
import * as Styles from "./index.styles";

const Tag = ({ children, ...otherProps }) => (
  <Styles.Tag {...otherProps}>{children}</Styles.Tag>
);

export default Tag;
