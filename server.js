const express = require('express');
const pets = require('./data');


const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/api', (req, res) => {
    res.send({
        message: 'Welcome to the API',
        date: new Date(),
    })
})


//Create a function to get a list of all pets from the databast
//Return a list of pets in response

app.get('/api/v1/pets', (req, res) => {
    const { pets } = req.params;

    res.send ({
        message: 'Endpoint /v1/pets has been hit',
        pets
    })
});


//Create a function to get the name parameter from the request
//Search the database for a pet with the name
//If found return details of the pet

app.get('/api/v1/pets/:name', (req, res) => {
    const { name } = req.params;
    
    const pet = pets.find(pet => pet.name === name);

    res.send({
        message: 'Endpoint /v1/pets/:name has been hit',
        name
    });
});


//Create a function to get the ownerName query parameter from the request
//Search the database for pets owned by owner name
//If found return a list of pet

app.get('/api/v1/pets/owner', (req, res) => {
     const { ownerName } = req.query;

     const pet = pets.find(pet => pet.owner === ownerName);

     res.send({
        message: 'Endpoint /v1/pets/owner has been hit',
        ownerName
     })
});

// app.get('/', (req, res) => {
//     res.sendFile(/Users/jessicamaddux/Documents/Coursework/test/unit_1/block31/Unit4.PetFinder.Starter/public + '/index.html');

// });
    




app.listen(PORT, () => {
    console.log('Server is listening on port ' + PORT);
});

//module.exports = app;