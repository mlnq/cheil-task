# cheil fullstack task eng

The application consists of 3 services running with docker:

- frontend: 5173
- backend: 8080
- mongodb: 27017

## MongoDB

- data is stored locally on a docker in volume named `mongo_data`

## Running project

to run project you should follow this steps:

### Configure enviroment

1. copy `be/.env.example` to `be/.env`

### Run docker

2. `docker compose up`

after this command app is avaiable at [localhost:5173](http://localhost:5173/)

### Use seeder to fulfill data

3. `docker compose exec backend npm run seed`

---

# cheil fullstack task pl

Aplikacja składa się z 3 usług uruchamianych za pomocą dockera:

- frontend: 5173
- backend: 8080
- mongodb: 27017

## MongoDB

- dane przechowywane są lokalnie za pomoca volume `mongo_data`

## Uruchomienie projektu

w celu uruchomienia projektu należy najpierw

### Konfiguracja środowiska

1. skopiuj `be/.env.example` do `be/.env`

### Uruchomienie dockera

1. `docker compose up`
po tej komendzie aplikacja jest dostepna pod adresem: [localhost:5173](http://localhost:5173/)

### Użycie seedera

2. `docker compose exec backend npm run seed`
