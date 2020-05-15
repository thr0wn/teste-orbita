import React from "react";
import * as Styles from "./index.styles";

const CardBody = ({ children, ...otherProps }) => (
  <Styles.CardBody {...otherProps}>{children}</Styles.CardBody>
);

export default CardBody;
