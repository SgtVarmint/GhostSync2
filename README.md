# GhostSync 2.0

# Prerequisites
- [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) (At least for Windows)
    - You will also need WSL 2, but the above guide has resources on how to get that installed as well.


# Setting up your dev environment with Docker
Copy `docker-compose-template.yml` to `docker-compose.yml` and set the following keys to the appropriate values. If you want access, message `SgtVarmint`. 

(Also make sure `docker-compose.yml` is getting ignored by `.gitignore`.)

- Ln 12: The source value is going to be the *absolute* path on your dev machine to the directory that holds your media (e.g C:\\Users\\Blowfish\\Videos).

- *ACCESS_KEY* is going to be the authentication key that users will have to input to be able to gain access to the site itself.

- *VIDEO_ROOT* is where on the *server* the media is going to live. 

# Running the server in Docker

In the root directory of the project, you just have to run the following command: `docker-compose up -d`. This will start your docker container called `ghostsync2`.

At this point, the server will be accessible at `localhost:9000` (and, obviously, the port is modifiable so...)