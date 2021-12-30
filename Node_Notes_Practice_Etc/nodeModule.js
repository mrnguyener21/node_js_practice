// // OS MODULE 
// // the os module lets you get information on your operation system(os)
// // const os = require('os') // this is the most common way to set the os module to a variable
// // lets you create things around your system

// PATH
// the path module is for editing the path to reach different files and getting different results from the path itself
// you just have to require 'path' and from there you can access the different methodss for the path module
// ususally you just set it to a variable
// const path = require('path')
// 'C:\\temp\\myfile.html' is an example of what a path is. the path module will then edit around it

// HTTP
// you use HTTP in order to use an HTTP server
// similar to other modules, you just require it and from there you can start using the different methodss for it
// const http = require('http')
// you can do things like creating an HTTP port 

//http.STATUS_CODES can give us a list of all of the http statuses and what they do
    //example: 404 being the http code for not found

// HTTP module also contains multiple classes in the module which has their own set of methodss based on the goal of that class
    // HTTP CLASSES:
    // http.Agent
        //this makes sure that every request made to a server is queued and a singe socket is reused
        // also maintas a pool of sockets which is key for performance reasons
        //in simple terms the agent is the middle man that takes all the requests from the server and turn that into a list(this is the queue, can even be a queue of 1 request) for the http socket to receive in a manageable manner to keep the connection steady.
        //all the methods with the agent deals with keeping connections, the socket whether to keep it alive or destroy it and the requests from the server it's queueing 
        
    // http.ClienRequest

    // http.server

    // http.ServerResponse

    // http.IncomingMessage




// FS

// EVENTS

// BUFFERS

// STREAMS
