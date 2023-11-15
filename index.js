const data =require('./activities.json')
const express=require('express')
const cors=require('cors')
const app=express()
app.use(cors())

const categories=['Indoor Activities','Entertainment','Mind and Body','Social and Networking']
function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}


app.get('/activity',async(req,res)=>{
  const allActivities=data.thingsToDo;
  let categoryActivity=allActivities[getRandomNumber(allActivities.length)];
  categoryActivity=categoryActivity.activities
  const selected=categoryActivity[getRandomNumber(categoryActivity.length)]
  res.send({"activity":selected})
})


app.get('/',async(req,res)=>{
  res.send('bored api is up and running🔥')
})
app.listen(4200,()=>{
  console.log('server is running');
})

