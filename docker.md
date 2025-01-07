***<h1 style="text-align:center; color:blue;">Docker Docs</h1>***

[<< Go back to Main page](./index.md)

```bash 
# To check the Docker version

docker version

# To show all containers that are currently running

docker ps

# To show all containers that ever been created

docker ps --all

# it run docker two commands docker create and docker start
docker run


# To run the Ubuntu container and start its bash program and then we can give all Linux commands supported by Ubuntu bash

docker run -it ubuntu bash

# The stop command sends the SIGTERM signal to stop the container and gives some time to the container to stop itself or do some cleanup but the kill command kills the container right away.

docker stop <container_id> VS docker kill <container_id>

# This will remove:
#  - all stopped containers
#  - all networks not used by at least one container
#  - all dangling images
#  - unused build cache

docker system prune


# This command is the first step of the docker run command and it preps the container before running a container. It will take a snapshot of the  file system and create an instance but does not run it.
# This will output the id which will be used in `docker start -a <ID>`

docker create <image name

# This will start the container we created (you will get the id when docker create <image_name>) and -a flag is used to print the output produced by that particular container and print it out to the terminal.

docker start -a <container_id>

# This command can be used if -a is not used and this will give us the logs that have been emitted when the container was running.

docker logs <container_id

# Missing notes

docker exec -it 44d188fe8f43 redis-cli

# This will start the container we created (you will get the id when `docker create <image_name>`) and the `-a` flag is used to print the output produced by that particular container and print it out to the terminal.

docker start -a <container_id


```

### What does the docker run command do?
It internally uses two commands.

```bash 
docker create
    +
docker start
```


### What is the `docker start -a <container_id>` command?
This will start the container we created (you will get the id when `docker create <image_name>`) and the `-a` flag is used to print the output produced by that particular container and print it out to the terminal.


### How to get logs from a container if you forget to use -a flag while docker start -a <container_id>?
Missing answer.

### How does this command work?
This command is processed by the Docker Client(CLI) and then passed down to the Docker Server
```bash 
docker run <Image name: hello-world>
```

The Docker Server looks into the Image Cache.

- If it finds it then it runs a container out of that image.

- If it does not find it, it reaches out to the Docker Hub, pulls the image, stores it in Docker's Image Cache, and runs a container out of that image.

### What happens when we run this command?
When we run this command then the Image which is a File System Snapshot (required programs defined by us) gets transferred into the Container + the Default command gets executed.

### What is an Image?
An image is a set of software or packages required to run a program with the underlying system packed in the form of an Image.

### What is a Container?
An instance of an Image that runs a program.
