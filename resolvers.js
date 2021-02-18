const db = require('./db');
const Query = {
     test : () => 'Test Success, GraphQL server is up & running !!',
     grettings : () =>{
          return "Hello from Garry !!!"
     },
     students : () => db.students.list()
}
module.exports = {Query}