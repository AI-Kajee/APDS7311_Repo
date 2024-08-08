import https from "https";
import http from "http";
import fs from "fs";
import posts from "./routes/post.mjs";
import users from "./routes/user.mjs"
import express from "express"
import cors from "cors"
import brute from "express-brute"

const PORT = 3000;
const app = express();

const options = {
    key: fs.readFileSync('keys/privatekey.pem'),
    cert: fs.readFileSync('keys/certificate.pem')
}

app.use(cors());
app.use(express.json());

app.use((reg,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    res.setHeader('Access-Control-Allow-Origin','*')
    next();
})

app.use("/post",posts);
app.route("/post", posts);
app.use("/user", users);
app.use("/user",users)

let server = https.createServer(options, app)

server.listen(PORT);