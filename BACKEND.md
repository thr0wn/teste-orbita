# Teste - Orbita: BACKEND

- [Visão geral da arquitetura](#Visão-geral-da-arquitetura)
- [Recebimento do consumo de dados](#Recebimento-do-consumo-de-dados)
- [Processamento de fatura](#Processamento-de-fatura)

## Visão geral da arquitetura
---
A arquitetura pode ser subdividida em dois microsserviços:
* Recebimento do consumo de dados
* Processamento de fatura 

## Recebimento do consumo de dados
O recebimento do consumo de dados deve levar em consideração um número elevado de requisições
a cada uma hora.

Além disso, pela descrição do teste, é possível inferir que nos intervalos
de envio do consumo de dados o tráfego de requisições é relativamente baixo, o que também deve ser levado em consideração, pois uma infraestrutura capaz de se auto escalar para atender momentos de maior ou menor demanda irá reduzir os custos totais da solução.

O diagrama abaixo oferece uma ideia de infraestrura para comportar esse microserviço:
[![](http://i.imgur.com/KBmR6ef.png)]()

Nesse diagrama, o 'AWS API Gateway' torna público o endpoint 'https://orbita.cc/dados/medicao',
que ao ser invocado dispara um 'AWS Lambda Function' para persistir os dados de consumo em uma instância RDS PostgreSQL.

As Lambda Functions são auto escaláveis, de forma que nos intervalos de tempo com pouco tráfego
apenas algumas ou nenhuma lambda function estaria rodando, diminuindo custos com a infra.


## Processamento de fatura
O processamento de fatura deve ocorrer periodicamente, de forma a manter as faturas atualizadas
em relação ao consumo de dados.

O diagrama abaixo oferece uma ideia de infraestrura para rodar esse microserviço periodicamente:
[![](http://i.imgur.com/ZtsjuZ7.png)]()

No diagrama acima, o 'AWS CloudWatch' dispara um 'AWS Lambda Function' para consultar os novos registros de consumo na instância RDS PostgreSQL, e na sequência atualiza as faturas.