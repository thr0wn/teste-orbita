import React from "react";
import Tag from ".";

export default {
  title: "Componentes/Tag",
};

export const Basic = () => <Tag>Pago</Tag>;
export const Purple = () => <Tag backgroundColor="purple">Aberta</Tag>;
export const Red = () => <Tag backgroundColor="red">Em Atraso</Tag>;
