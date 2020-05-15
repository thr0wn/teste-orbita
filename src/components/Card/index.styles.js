import styled from "styled-components";
import { CardHeader } from "./CardHeader/index.styles";
import { CardBody } from "./CardBody/index.styles";

export const Card = styled.div`
  padding: 18px;
  width: 298px;
  min-width: 298px;
  height: 416px;
  max-height: 416px;
  background: white;
  position: relative;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  & > ${CardHeader} {
    margin-bottom: 48px;
  }

  & > ${CardBody} > * {
    margin-top: 48px;
  }
`;
