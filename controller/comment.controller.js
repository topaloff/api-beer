const Comment = require('../models/').Comment;

/**
 * @api {get} /comments Show all comments
 * @apiName getComments
 * @apiGroup Comment
 * @apiSuccess {String} id id of the Comment.
 * @apiSuccess {String} description description of the Comment.
 * @apiSuccess {Integer} BeerId Id of the Beer.
 * @apiSuccess {Integer} UserId Id of the User.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "id": 1,
 *             "description": "Ceci est un commentaire",
 *             "createdAt": "2020-02-12T10:16:31.000Z",
 *             "updatedAt": "2020-02-12T10:16:31.000Z",
 *             "BeerId": 1,
 *             "UserId": 1
 *         }
 *     ]
 */
exports.comment_list = (req,res,next)=>{
    Comment.findAll({})
    .then(comments => {
        res.json(comments);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 *  * @api {get} /comments/:id Show detail of one comment
 * @apiName getCommentsDetail
 * @apiGroup Comment
 * 
 * @apiParam {Number} id of the Comment
 * 
 * @apiSuccess {String} id id of the Comment.
 * @apiSuccess {String} description description of the Comment.
 * @apiSuccess {Integer} BeerId Id of the Beer.
 * @apiSuccess {Integer} UserId Id of the User.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "description": "Ceci est un commentaire",
 *         "createdAt": "2020-02-12T10:16:31.000Z",
 *         "updatedAt": "2020-02-12T10:16:31.000Z",
 *         "BeerId": 1,
 *         "UserId": 1
 *     }
 */
exports.comment_detail = (req,res,next)=>{
    const id = req.params.id
    Comment.findByPk(id)
    .then(comment => {
        res.json(comment);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /comments/add Add one comment
 * @apiName addComment
 * @apiGroup Comment
 * 
 * @apiParam {String} name name of the Comment.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * @apiSuccess {String} id id of the Comment.
 * @apiSuccess {String} description description of the Comment.
 * @apiSuccess {Integer} BeerId Id of the Beer.
 * @apiSuccess {Integer} UserId Id of the User.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "id": 1,
 *             "description": "Ceci est un commentaire",
 *             "createdAt": "2020-02-12T10:16:31.000Z",
 *             "updatedAt": "2020-02-12T10:16:31.000Z",
 *             "BeerId": 1,
 *             "UserId": 1
 *         }
 *     ]
 */
exports.comment_add = (req,res,next) => {
    Comment.create(req.body)
    .then(comment => {
        res.json(comment);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /comments/edit/:id Edit one comment
 * @apiName editComment
 * @apiGroup Comment
 * 
 * @apiParam {Number} id id of the Comment.
 * @apiParam {String} name name of the Comment.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} id id of the Comment.
 * @apiSuccess {String} description description of the Comment.
 * @apiSuccess {Integer} BeerId Id of the Beer.
 * @apiSuccess {Integer} UserId Id of the User.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "id": 1,
 *             "description": "Ceci est un commentaire",
 *             "createdAt": "2020-02-12T10:16:31.000Z",
 *             "updatedAt": "2020-02-12T10:16:31.000Z",
 *             "BeerId": 1,
 *             "UserId": 1
 *         }
 *     ]
 */
exports.comment_edit = (req,res,next) => {
    const id = req.params.id;
    Comment.update(req.body, {
        where: {
          id: id
        }
    })
    .then(comment => {
        res.json({message: `Comment ${id} est modifie`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /comments/delete/:id Delete one comment
 * @apiName deleteComment
 * @apiGroup Comment
 * 
 * @apiParam {Number} id id of the Comment.
 * 
 * @apiSuccess {String} message Comment deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Comment deleted"
 *     }
 */
exports.comment_delete = (req,res,next) => {
    const id = req.params.id;
    Comment.destroy({
        where: {
          id: id
        }
    })
    .then(comment => {
        res.json({message: "Comment deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


