import express from "express"

import connectDB from "./lib/connectDB.js"
//we are give any namy as in user.route we exproting as default same for psot and comment
import userRouter from "./routes/user.route.js"
import postRouter from './routes/post.route.js'
import commentRouter from './routes/comment.route.js'
import webHookRouter from './routes/webhook.route.js'
import { clerkMiddleware, requireAuth } from '@clerk/express'


const app = express();
app.use(clerkMiddleware())
//as i am using body parser for clerk webHookRoute so i call it bdroe express. json
app.use("/webhooks", webHookRouter)
app.use(express.json());//witout this express not allow to send raw json like when creating post    


// app.get('/', (req, res) => {
//     res.status(200).send("workign")
// })

// app.get("/auth-state", (req, res) => {
//     const authState = req.auth;
//     res.json(authState)
// })

// app.get("/protect", (req, res) => {
//     const { userId } = req.auth;
//     if (!userId) {
//         return res.status(401).json("not authentication")
//     }
//     res.status(200).json("content")
// })


// app.get("/protect2", requireAuth(), (req, res) => {
//     res.status(200).json("content")
// })
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/comments", commentRouter)



//after express 5 we just simply define the error
//and if it has errro like in controller it will autmaitlcy ditect it and thow
app.use((error, req, res, next) => {
    res.status(error.status || 500)
    res.json({
        message: error.message || "Somthing went wrong",
        status: error.status,
        stack: error.stack
    })
})

app.listen(3000, () => {
    connectDB();
    console.log("server is runningdf")
})

//3:14

// node --env-file .env --watch index.js  (use for run env   and autoupdate without any plugin)

//for local to get user from clerk to webhook use ngrok.