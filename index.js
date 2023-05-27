const   express  = require('express')
const bodyParser = require('body-parser')
const app = express()


app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static('./public'))

app.set('view engine','ejs')
app.get('/',(req,res) =>{
    res.send('Working')
})

app.get('/user-details/Surya',(req,res)=>{
    res.render('user-details',{firstname:'Surya',BatchNum: 3,year: 2023, passout:2022})
})

app.get('/user-details/Anand',(req,res)=>{
    res.render('user-details',{firstname:'Anand',BatchNum: 5,year: 2020, passout:2000})
})


app.listen(700,()=>{
    console.log("Server is ruuning on james bond port")
})
