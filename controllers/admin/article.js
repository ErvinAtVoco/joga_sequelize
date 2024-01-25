const Sequelize = require("sequelize");
const sequelize = new Sequelize('mysql://root:qwerty@localhost:3306/joga_mysql');

const models = require('../../models');

const createArticle = (req, res) => {
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    const newArticle = models.Article.createNew({
        name: name,
        slug: slug,
        image: image,
        body: body,
        published: new Date().toISOString().slice(0, 19).replace('T', ' ')
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ message: 'New article is added' });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

const findArticleForEdit = (req, res) => {
    let articleId = req.body.id
    
    const article = models.Article.findOne({
        where: { id: articleId },
        attributes: ['name', 'slug', 'image', 'body', 'published'],
        include: [{
            model: Author,
            attributes: ['id', 'name']
        }]
    })
    .then(article => {
        console.log(article)
        return res.status(200).json({ message: 'Found article' });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

const editArticle = (req, res) => {
    let articleId = req.body.id
    let name = req.body.name
    let slug = req.body.slug
    let image = req.body.image
    let body = req.body.body

    let updatedData = {
        name: name,
        slug: slug,
        image: image,
        body: body
    }

    const updateArticle = models.Article.update(updatedData, {
        where: { id: articleId }
    })
    .then(updatedArticle => {
        console.log(updatedArticle)
        return res.status(200).json({ message: 'Updated article' });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

const deleteArticle = (req, res) => {
    let articleId = req.body.id

    const deleteArticle = models.Article.destroy({
        where: { id: articleId },
    })
    .then(deletedArticle => {
        console.log(deletedArticle)
        return res.status(200).json({ message: 'DESTROYED article' });
    })
    .catch (error => {
        return res.status(500).send(error.message);
    })
}

modulse.exports = {
    createArticle,
    findArticleForEdit,
    editArticle,
    deleteArticle
}