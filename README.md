# quarkus-benchmark project

This project uses Quarkus, the Supersonic Subatomic Java Framework.

If you want to learn more about Quarkus, please visit its website: https://quarkus.io/ .

## Running the database

Database with 100.000 rows on table "user"

```
docker run -p 5432:5432 viniciusfcf/postgres:latest
```

## Packaging and running the application

You can run your application in dev mode that enables live coding using:
```
cd <PROJECT_NAME> (ex:jaxrs)
./mvnw clean package -DskipTests
java -jar target/<PROJECT_NAME>-1.0-SNAPSHOT-runner.jar
```

## Running the benchmark

100 Threads are started on a 60s ramp. Total test time: 5 minutes

- select.jmx file calls GET /users.
- GET /users returns 10 users of a random page

```
rm -rf report-jaxrs /tmp/jmeter*log
jmeter -n -t select.jmx -p jmeter.properties -l /tmp/jmeter-<PROJECT_NAME>.log -e -o report-<PROJECT_NAME>
```
Open `report-<PROJECT_NAME>/index.html` file
 
