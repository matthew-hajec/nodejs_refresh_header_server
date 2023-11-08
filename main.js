const express = require('express');
const cookieParser = require('cookie-parser');

const PORT = parseInt(process.env.SERVER_PORT1) || 3000;

// Create an express application
const app = express();

// Setup middleware
app.use(cookieParser());

// Create a route handler for the home path
app.get('/:time', (req, res) => {
    // Parse the time from the request
    const refresh = parseInt(req.params.time);

    // Set the refresh header
    res.set('Refresh', refresh);

    // Increment the "refresh_count" cookie
    let refresh_count = 0;
    if (req.cookies.refresh_count) {
        // attempt to parse the cookie value, if it's not an integer, set it to 0
        try {
            refresh_count = parseInt(req.cookies.refresh_count);
        } catch (e) {
            refresh_count = 0;
        }
    }
    refresh_count++;
    res.cookie('refresh_count', refresh_count);

    // Send a response
    res.send('Refresh in... ' + refresh + ' seconds. You\'ve refreshed ' + refresh_count + ' times.');
});

// Create a server from the express app
app.listen(PORT, () => {
    console.log('Server is running on port ' + PORT);
});