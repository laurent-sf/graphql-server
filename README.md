# GraphQL Server

A nodejs server using grapqhQl and mongodb.

## Run

To run this project you need docker installed on your machine.

- Run the following command to start the server on your local network:
```sh
    docker-compose up --build
``` 

- On your browser, navigate to [http://localhost:4000/](http://localhost:4000/). You should see the Apollo interface, ready to run some queries to the API!

## Feed the DB
If you want to feed the database with some fake restaurants, run the following command:

```sh
    cd mongo-seed
    docker-compose up --build
```
