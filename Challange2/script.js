const requests = require('requests');
const express = require('express');

const app = express();

    var key = prompt("Enter key name");

    const url = "http://169.254.169.254/metadata/instance/compute?api-version=2021-01-01&format=json";

    requests(url)
    .on('data', (chunk) => {
        const jsonData = JSON.parse(chunk);
        app.send(jsonData);
        
    })
    .on('end', (err) => {
        if(err) callback("Can't fetch the metadata from Azure", err);
    });
        


app.listen(8000, () => {
    console.log("Server is up and running on port: ", 8000);
});
