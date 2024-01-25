const express = require('express');
//get using express router
const router = express.Router();
//define article controller and import it into this file
const articleController = require('../controllers/article');
const articleAdminController=require('../controllers/admin/article');

//use controller functions according to the route
router.get('/', articleController.getAllArticles);
router.get('/article/:slug', articleController.getArticlesBySlug);
router.get('/:author', articleController.getArticlesByAuthor);
router.get('/article/create', articleController.showNewArticleForm);
router.post('/create', articleController.createNewArticle);
router.get('/article/edit/:id', articleController.showEditArticleForm);
router.post('/edit', articleController.editArticle);
router.post('/delete', articleController.deleteArticle);

router.post('/admin/article/create', articleAdminController.createArticle);
router.get('/admin/article/edit:id', articleAdminController.findArticleForEdit);
router.post('/admin/article/edit:id', articleAdminController.editArticle);
router.post('/admin/article/delete:id', articleAdminController.deleteArticle);

//export article router
module.exports = router;