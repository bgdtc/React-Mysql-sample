const Article = require('../models/ArticleModel')

module.exports = {
    getAllArticles: async (req: any, res: any) => {
        const dbArticles = await Article.find()
        console.log("get all articles")
        res.json({ dbArticles })

    },
    createArticle: async (req: any, res: any) => {
        console.log("createArticles: ", req.body)
        if (req.body.title && req.body.description) {
            const article = new Article({
                title: req.body.title,
                description: req.body.description
            })
            article.save((err: any) => {
                if (err) console.log(err)
            })


            res.status(200).send({
                reponse: "article bien crée",
                dbArticles: await Article.find()
            })
        } else {
            res.status(200).send({ reponse: "erreur, item pas crée" })
        }
    },
    deleteAllArticle: async (req: any, res: any) => {
        console.log("deleteAllArticles");
    },
    getArticleById: async (req: any, res: any) => {
        console.log("getArticleById");
    },
    editArticle: async (req: any, res: any) => {
        console.log("editArticles");
    },
    deleteArticleById: async (req: any, res: any) => {
        console.log("deleteArticleByiDId");
    }

}
