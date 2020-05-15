import React from "react";
import * as Styles from "./index.styles";

const CardFooter = ({ children, ...otherProps }) => (
  <Styles.CardFooter {...otherProps}>{children}</Styles.CardFooter>
);

export default CardFooter;
