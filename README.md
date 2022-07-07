Primeiros passos com NodeJS!

Aqui utilizo node e seus módulos nativas para criar um servidor.
Importando HTTP createServer utilizamos seus dois paramêtros (request e response), e mapeamos suas rotas para conseguir mostrar algumas mensagens, e o .listen que disponibiliza uma porta para a aplicação.

Também fazemos o mesmo e até mais com o framework Express que auxilia na construção de APIs. O utilizando para montar toda estrutura CRUD para criação de dados(POST), leitura(GET) de todos os dados ou com request.params para um id especifico, update(PUT) de item com findIndex e remoção(DELETE) utilizando splice.
Para a reiniciar automaticamente o servidor usamos a biblioteca Nodemon, o randomUUID para os IDs, e o FileSystem para escrita e leitura de arquivos onde salvamos e atualizamos as mudanças da aplicação.