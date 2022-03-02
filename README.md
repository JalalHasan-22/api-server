# api-server

## deployed app link

[App on Heroku]()

In this lab, I will build everything from scratch just as recommended, it is a great idea to practice the new concepts and get used to everything.

Update: I wrote the code from scratch and implemented the collection design pattern, it was really fun to do and it makes me understand the idea even further.

Installed sequelize and inside model directory, in the index.js, I emported the sequelize and created a new instance to connect to the databse using the databse link found in the .env file, I also imported the DataTypes to pass it to the models functions as an argument.

I added the test and production variables to my scripts in package.json file to solve the issue with the ssl locally,

- to test getting all the data from the database for a single model, send a get request with the model name in the bath as follows: (/food) or (/clothes).

- to get a single entry, I used sequelize (findOne) method, passing the id from the request.params.
  simply send a get request with an id in the url as a parameter ex: (/food/1).

- to update an entry, I used the sequelize .udpate method, and getting the new updates from the request object body.
  please send a request, with a json object in the body in the following syntax:
  request: put
  path: /clothes
  req.body: {"name":"T-shirt", "size": "Small"}

- to delete an entry from a table, I used the sequelize destroy method which takes an ID, finds the associated record and remove it from database, the destroy method returns an array with the value of [1] if the record was found and deleted, [0] if no record was found, so basically the return is the number of deleted records.
