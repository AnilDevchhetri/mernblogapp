import express from "express"

import connectDB from "./lib/connectDB.js"
//we are give any namy as in user.route we exproting as default same for psot and comment
import userRouter from "./routes/user.route.js"
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'

const app = express();



// app.get('/', (req, res) => {
//     res.status(200).send("workign")
// })

app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)

app.listen(3000, () => {
    connectDB();
    console.log("server is runningdf")
})

//2:27