const Type = require('../models/').Type;

/**
 * @api {get} /types Show all types
 * @apiName getTypes
 * @apiGroup Type
 * @apiSuccess {String} _id id of the Type.
 * @apiSuccess {String} name name of the Type.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 1,
 *       "name": "Blonde"
 *     }]
 */
exports.type_list = (req,res,next)=>{
    Type.findAll({})
    .then(types => {
        res.json(types);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 *  * @api {get} /types/:id Show detail of one type
 * @apiName getTypesDetail
 * @apiGroup Type
 * 
 * @apiParam {Number} id of the Type
 * 
 * @apiSuccess {String} _id id of the Type.
 * @apiSuccess {String} name name of the Type.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.type_detail = (req,res,next)=>{
    const id = req.params.id
    Type.findByPk(id)
    .then(type => {
        res.json(type);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /types/add Add one type
 * @apiName addType
 * @apiGroup Type
 * 
 * @apiParam {String} name name of the Type.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Type.
 * @apiSuccess {String} name name of the Type.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.type_add = (req,res,next) => {
    Type.create(req.body)
    .then(type => {
        res.json(type);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /types/edit/:id Edit one type
 * @apiName editType
 * @apiGroup Type
 * 
 * @apiParam {Number} id id of the Type.
 * @apiParam {String} name name of the Type.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Type.
 * @apiSuccess {String} name name of the Type.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.type_edit = (req,res,next) => {
    const id = req.params.id;
    Type.update(req.body, {
        where: {
          id: id
        }
    })
    .then(type => {
        res.json({message: `Type ${id} est modifie`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /types/delete/:id Delete one type
 * @apiName deleteType
 * @apiGroup Type
 * 
 * @apiParam {Number} id id of the Type.
 * 
 * @apiSuccess {String} message Type deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Type deleted"
 *     }
 */
exports.type_delete = (req,res,next) => {
    const id = req.params.id;
    Type.destroy({
        where: {
          id: id
        }
    })
    .then(type => {
        res.json({message: "Type deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


