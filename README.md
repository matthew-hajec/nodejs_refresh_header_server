# nodejs_refresh_header_server
A simple nodejs server for expirementing with the unnoffical HTTP refresh header.

## Start Up
To start the server, run ```npm start``` from within the project directory. By default, the server will start on port ```3000```. This is configurable via the ```SERVER_PORT``` environment variable.

## Usage
To get a Refresh header, send a request to ```/:seconds```, where ```:seconds``` is the integer which will be returned in the Refresh header. Additionally, the server will manage the ```refresh_count``` cookie, which represents te number of requests sent. 
