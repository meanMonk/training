/**
 * Steps to build angular project :
 *      > navigate to your project root using terminal
 *      > ng build --prod ## to create production build for angular.
 *      > build will be get created under the dist folder for todo-ui
 *      > serve the todo-ui/index.html on your server and connect it with ip and domain
 *      > move the todo-ui build folder from dist to public folder api
 *      > and start the node js server so your application will start working.
 *      > to start node project on production use package called pm2
 *          -- https://www.npmjs.com/package/pm2
 */

/***
 * To distribute the application to multiple customer use docker.
 *
 *  -- install docker https://www.docker.com/get-started
 *  -- create Dockerfile in root of your project.
 *  -- create .dockerignore
 *  -- create build of your docker file run below command from todo-api
 *     > docker build -t sample-app 
 *  -- to see the docker image generated above 
       > docker images
    -- to run your docker build or image above in detach
      > docker run -p 49160:8080 -d sample-app   
    --- to see the running docker images
      >   docker ps
      tag | container id | start |  end     
    --- to see the logs of container we run the blow commands
      > docker logs <container-id>   
    --- to see the working application hit url http://localhost:49160
 ***/
