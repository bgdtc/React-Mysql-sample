// IMPORT EXPRESS
import express from "express";
import bodyParser from "body-parser";
import mongoose from 'mongoose'
// IMPORT CONTROLLERS
const ArticleController = require("./controllers/ArticleController")
const bp = require('body-parser')

const app = express();

app.use(bodyParser.urlencoded({ extended: true, }));

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

mongoose.connect("mongodb+srv://admin:admin@clusterstage.zk2zq.mongodb.net/test", {

})
    .then(() => console.log('connected to mongo'))
    .catch((err) => console.log(err))



app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
})

app.route('/article')
    .get(ArticleController.getAllArticles)
    .post(ArticleController.createArticle)
    .delete(ArticleController.deleteAllArticle)

app.route('/article/:id')
    .get(ArticleController.getArticleById)
    .put(ArticleController.editArticle)
    .delete(ArticleController.deleteArticleById)

export default app;