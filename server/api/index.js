const app = require('express')()
const bodyParser = require('body-parser').json()
const volleyball = require('volleyball')

app.use(volleyball)
app.use(bodyParser)

app.get('/',(req,res,next)=>{
    res.json('helloo')
})










const port = 5000;
app.listen(port, ()=> {console.log(`Listening on port ${port}`)})