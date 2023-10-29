import  express  from "express";

const app = express();

app.get('/api/',(req,res)=>{
    res.send('index is ready');
});

app.get('/api/jokes',(req,res)=>{
    const jokes =[
        {
        id:1,
        title:"first Joke",
        content:"first Joke"
    },
        {
        id:2,
        title:"first Joke",
        content:"first Joke"
    },
        {
        id:3,
        title:"first Joke",
        content:"first Joke"
    },
        {
        id:4,
        title:"first Joke",
        content:"first Joke"
    },
        {
        id:5,
        title:"first Joke",
        content:"first Joke"
    },
]
    res.json(jokes)
})
const port = process.env.PORT || 3000;

app.listen(port,()=>{
console.log(`serves at http://localhost${port}`);
});