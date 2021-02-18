require('dotenv').config();
const express = require('express');
const { ApolloServer } = require( 'apollo-server-express' );
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const db = require('./db');

const port = process.env.PORT || 4000 ;

const fs = require('fs')
const typeDefs = fs.readFileSync('./schema.graphql',{encoding:'utf-8'})
const resolvers = require('./resolvers');

app.use(cors(), bodyParser.json());

const server = new  ApolloServer({ typeDefs , resolvers})
server.applyMiddleware({ app });
app.listen(port , () =>
  console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);