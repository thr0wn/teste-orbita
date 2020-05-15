import React from "react";
import * as Styles from "./index.styles";

const CardHeader = ({ children, ...otherProps }) => (
  <Styles.CardHeader {...otherProps}>{children}</Styles.CardHeader>
);

export default CardHeader;
