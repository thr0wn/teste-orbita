import React from "react";
import * as Styles from "./index.styles";

const Card = ({ children, ...otherProps }) => (
  <Styles.Card {...otherProps}>
    {children}
  </Styles.Card>
);

export default Card;
