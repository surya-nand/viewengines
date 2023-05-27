const   express  = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))
app.get('/',(req,res) =>{
    res.send('Working')
})

app.get('/user-details',(req,res)=>{
    res.render('index.ejs')
})
app.listen(700,()=>{
    console.log("Server is ruuning on james bond port")
})
