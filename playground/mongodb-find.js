// const MongoClient = require('mongodb').MongoClient;  old method
const {MongoClient,ObjectID} = require('mongodb'); //object destructuring ES6

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db)=>{
  if(err){
    return console.log('unable to connect to Mongo Db Server')
  }
  console.log('Connected To MongoDB server');

  // db.collection('Todos').find({_id:new ObjectID("5b4d84a5d952512f9c318a7a")}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos :',err);
  // })
  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos Count: ${count}`);
  //   // console.log(JSON.stringify(docs, undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos :',err);
  // })

  db.collection('Users').find({name: 'Sudhanshu',location:'Delhi'}).toArray().then((docs)=>{
    console.log('Sudhanshu');
    console.log(JSON.stringify(docs, undefined,2));
  },(err)=>{
    console.log('Unable to fetch todos :',err);
  })

  db.close();
});
