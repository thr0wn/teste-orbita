import React from "react";
import ThemeProvider from "./Theme";
import HorizontalScroller from "./components/HorizontalScroller";
import Card from "./components/Card";
import CardHeader from "./components/Card/CardHeader";
import CardBody from "./components/Card/CardBody";
import CardFooter from "./components/Card/CardFooter";
import Tag from "./components/Tag";
import Text from "./components/Text";

const App = () => (
  <ThemeProvider>
    <HorizontalScroller>
      <Card>
        <CardHeader>
          <Text fontSize="medium">
            FATURA&nbsp;
            <Text fontSize="small" color="grey">
              NOV 19
            </Text>
          </Text>
          <Tag>Pago</Tag>
        </CardHeader>
        <CardBody>
          <div>
            <Text fontFamily="medium" fontSize="large">
              2.958&nbsp;
              <Text fontSize="xsmall" color="grey">
                MB
              </Text>
            </Text>
            <Text fontSize="xsmall" color="grey2">
              R$&nbsp;
              <Text fontSize="medium" color="green">
                47,32
              </Text>
            </Text>
          </div>
          <div>
            <Text fontSize="small" color="grey">
              VENCIMENTO
            </Text>
            <Text fontSize="medium">
              05/12&nbsp;<Text>Quarta-feira</Text>
            </Text>
          </div>
        </CardBody>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="medium">
            FATURA&nbsp;
            <Text fontSize="small" color="grey">
              DEZ 20
            </Text>
          </Text>
          <Tag backgroundColor="red">Em Atraso</Tag>
        </CardHeader>
        <CardBody>
          <div>
            <Text fontFamily="medium" fontSize="large">
              2.377&nbsp;
              <Text fontSize="xsmall" color="grey">
                MB
              </Text>
            </Text>
            <Text fontSize="xsmall" color="grey2">
              R$&nbsp;
              <Text fontSize="medium" color="red">
                41,19
              </Text>
            </Text>
          </div>
          <div>
            <Text fontSize="small" color="grey">
              VENCIMENTO
            </Text>
            <Text fontSize="medium">
              05/01&nbsp;<Text>Domingo</Text>
            </Text>
          </div>
        </CardBody>
        <CardFooter>
          <Text color="green" fontSize="small">
            EFETUAR PAGAMENTO
          </Text>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader>
          <Text fontSize="medium">
            FATURA&nbsp;
            <Text fontSize="small" color="grey">
              JAN 20
            </Text>
          </Text>
          <Tag backgroundColor="purple">Aberta</Tag>
        </CardHeader>
        <CardBody>
          <div>
            <Text fontFamily="medium" fontSize="large">
              300&nbsp;
              <Text fontSize="xsmall" color="grey">
                MB
              </Text>
            </Text>
            <Text fontSize="xsmall" color="grey2">
              R$&nbsp;
              <Text fontSize="medium" color="purple">
                4,65
              </Text>
            </Text>
          </div>
          <div>
            <Text fontSize="small" color="grey">
              VENCIMENTO
            </Text>
            <Text fontSize="medium">
              05/02&nbsp;<Text>Quarta-feira</Text>
            </Text>
          </div>
        </CardBody>
      </Card>
    </HorizontalScroller>
  </ThemeProvider>
);

export default App;
