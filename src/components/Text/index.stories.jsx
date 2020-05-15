import React from "react";
import Text from ".";

export default {
  title: "Componentes/Text",
};

export const FontSizeXSmall = () => <Text>Quarta-feira</Text>;
export const FontSizeSmallAndColorGrey = () => (
  <Text fontSize="small" color="grey">
    VENCIMENTO
  </Text>
);
export const FontSizeMedium = () => <Text fontSize="medium">05/02</Text>;
export const Combined = () => (
  <article>
    <Text fontSize="medium">
      FATURA&nbsp;
      <Text fontSize="small" color="grey">
        JAN 20
      </Text>
    </Text>
    <br />
    <br />
    <Text fontFamily="medium" fontSize="large">
      300&nbsp;
      <Text fontSize="xsmall" color="grey">
        MB
      </Text>
    </Text>
    <br />
    <br />
    <Text fontSize="xsmall" color="grey2">
      R$&nbsp;
      <Text fontSize="medium" color="purple">
        4,65
      </Text>
    </Text>
    <br />
    <br />
    <Text fontSize="small" color="grey">
      VENCIMENTO
    </Text>
    <Text fontSize="medium">
      05/02&nbsp;<Text>Quarta-feira</Text>
    </Text>
  </article>
);
