# API, REST, RESTful

## Composto por
- Client
- API
- Server

## API
Acrônimo de Application Program Interface (Interface de programação de aplicações) basicamente é um conjunto de rotinas e padrões estabelecidos por uma aplicação, para que outras aplicações possam utilizar as funcionalidades desta aplicação.

- Responsável por estabelecer comunicação entre diferentes serviços.
- Meio de campo entre as tecnologias.
- Intermediador para troca de informações.

## REST

Acrônimo de Representational State Transfer (Transferência de estado representativo).

É um estilo de arquitetura para o desenvolvimento de aplicações (web servies & APIs).

- Será feita a transferência de dados de uma maneira simbólica, figurativa e representativa.

- A transferência de dados ocorre, geralmente, usando o protocolo HTTP.

O REST, delimita algumas obrigações nessas transferências de dados.

E define o Resource como uma entidade, um objeto.

## RESTful
Restful é a aplicação dos padrões REST.
### 6 Necessidades/Regras/Caminhos para ser RESTful

- _Client-server_: Separação do Client e do armazenamento dos dados (server). Dessa forma, poderemos ter uma portabilidade do nosso sistema, por exemplo, usando o React ou Angular ou Vue para Web e React Native para o smartphone.

- _Stateless_: Cada requisição que o Client faz para o Server, deverá conter todas as informações necessárias para o servidor entender e responder (RESPONSE) a requisição (REQUEST) e cada requisição é completamente independente, não será armazenado nenhum estado. |
Exemplo de autenticação: A sessão do usúario deverá ser enviada em todas requisições, para saber se aquele usuário está autenticado e apto a usar os serviços, e o servidor não pode lembrar que o Client foi autenticado na requisição anterior. Normalmente, nesssa arquitetura de aplicação usam-se **TOKENS** para lidar com sessões.

- _Cacheable_: As respostas para uma requisição, deverão ser explicitas ao dizer se aquela requisição, pode ou não ser cacheada (armazenada em cache) pelo Client.

- _Layered System_:  O Client acessa um endpoint (Resource), sem precsar saber da complexidade, de quais passos estão sendo necessários para o servidor responde a requisição, ou quais outras camadas o servidor estará lidando, para que a requisição seja respondida.

- _Uniform Interface_: O Client acessar resources padronizados, ser consistente na utilização do formato de escrita de mensagens, como por exemplo utilizar json mas a API só se tornaria inconsistente se cada hora usasse outro formato como xml e etc... Envolve também o uso dos verbos HTTP para uma comunicação clara e efetiva. Basicamente, a uniformidade da interface torna o uso de sua API intuitivo.

- **Chegou aqui, você já é RESTful, a próxima Constraint é opcional**

- _Code on demand (optional)_: Dá a possibilidade da nossa aplicação pegar códigos, como o javascript, por exemplo, e executar no Client.

------------------------------------------
# Boas práticas

- Utilizar verbos HTTP para as requisições.
- Utilizar plural ou singulas na criação de enpoints? **Não importa.** desde que seja consistente.
- Não deixar barra no final do endpoint.
- Nunca deixe oClient sem respostas!
- Seja explícito nas respostas.

## Verbos HTTP
  - GET
    - Receber dados de um Resource
  - POST
    - Enviar dados ou informações para serem processados por um Resource.
  - PUT
    - Atualizar os dados de um Resource.
  - DELETE
    - Remover um Resource.

## Status das respostas

- 1xx: Informação
- 2xx: Sucesso
  - 200: OK
  - 201: CREATED
  - 204: Não tem conteúdo PUT POST DELETE
- 3xx: Redirection
- 4xx: Client Error
  - 400: Bad Request
  - 404: Not Found!
- 5xx: Server Error
  500: Internal Server Error