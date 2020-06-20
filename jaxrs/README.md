# jaxrs project

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .

## Running the application in dev mode

You can run your application in dev mode that enables live coding using:
```
./mvnw quarkus:dev
```

## Packaging and running the application

The application can be packaged using `./mvnw package`.
It produces the `jaxrs-1.0-SNAPSHOT-runner.jar` file in the `/target` directory.
Be aware that it’s not an _über-jar_ as the dependencies are copied into the `target/lib` directory.

The application is now runnable using `java -jar target/jaxrs-1.0-SNAPSHOT-runner.jar`.

## Creating a native executable

You can create a native executable using: `./mvnw package -Pnative`.

Or, if you don't have GraalVM installed, you can run the native executable build in a container using: `./mvnw package -Pnative -Dquarkus.native.container-build=true`.

You can then execute your native executable with: `./target/jaxrs-1.0-SNAPSHOT-runner`

If you want to learn more about building native executables, please consult https://quarkus.io/guides/building-native-image.


- Rodar indefinididamente, até começar a ocorrer erros
- Subiremos 10 Threads a cada 2 minutos
- 2 testes: inclusões e consultas (10 usuários de uma base de 1 milhao)
- Em java e nativo

- O que observaremos:
- Em quantas Threads Chegou
- Tempo médio das requisições
- Quantidade de CPU utilizado
- Quantidade de memória utilizado

- Clientes:
- jaxrs - orm
- jaxrs - com rota reativa
- jaxrs - reativo
- jaxrs - reativo com rota reativa
- gRPC


rm -rf report-jaxrs jmeter*log
~/desenvolvimento/apache-jmeter-5.3/bin/jmeter -n -t select.jmx -p jmeter.properties -l jmeter-jaxrs.log -e -o report-jaxrs