# GhostSync 2.0

# Prerequisits
- [Docker Desktop](https://docs.docker.com/desktop/install/windows-install/) (At least for Windows)
    - You will also need WSL 2, but the above guide has resources on how to get that installed as well.


# Setting up your dev environment with Docker
In `docker-compose.yml`
    <br>
- Ln 12: The source value is going to be the *absolute* path on your dev machine to the directory that holds your media (e.g C:\\Users\\Blowfish\\Videos).

- *ACCESS_KEY* is going to be the authentication key that users will have to input to be able to gain access to the site itself.

- *VIDEO_ROOT* is where on the *server* the media is going to live. 

# Running the server in Docker

In the root directory of the project, you just have to run the following command: `docker-compose up -d`. This will start your docker container called `ghostsync2`.

Then you're all good to go :-)