const Composition = require('../models/').Composition;

/**
 * @api {get} /compositions Show all compositions
 * @apiName getCompositions
 * @apiGroup Composition
 * @apiSuccess {String} _id id of the Composition.
 * @apiSuccess {String} name name of the Composition.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 1,
 *       "name": "Blonde"
 *     }]
 */
exports.composition_list = (req,res,next)=>{
    Composition.findAll({})
    .then(compositions => {
        res.json(compositions);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 *  * @api {get} /compositions/:id Show detail of one composition
 * @apiName getCompositionsDetail
 * @apiGroup Composition
 * 
 * @apiParam {Number} id of the Composition
 * 
 * @apiSuccess {String} _id id of the Composition.
 * @apiSuccess {String} name name of the Composition.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.composition_detail = (req,res,next)=>{
    const id = req.params.id
    Composition.findByPk(id)
    .then(composition => {
        res.json(composition);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /compositions/add Add one composition
 * @apiName addComposition
 * @apiGroup Composition
 * 
 * @apiParam {String} name name of the Composition.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Composition.
 * @apiSuccess {String} name name of the Composition.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.composition_add = (req,res,next) => {
    Composition.create(req.body)
    .then(composition => {
        res.json(composition);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /compositions/edit/:id Edit one composition
 * @apiName editComposition
 * @apiGroup Composition
 * 
 * @apiParam {Number} id id of the Composition.
 * @apiParam {String} name name of the Composition.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Composition.
 * @apiSuccess {String} name name of the Composition.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.composition_edit = (req,res,next) => {
    const id = req.params.id;
    Composition.update(req.body, {
        where: {
          id: id
        }
    })
    .then(composition => {
        res.json({message: `Composition ${id} est modifie`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /compositions/delete/:id Delete one composition
 * @apiName deleteComposition
 * @apiGroup Composition
 * 
 * @apiParam {Number} id id of the Composition.
 * 
 * @apiSuccess {String} message Composition deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Composition deleted"
 *     }
 */
exports.composition_delete = (req,res,next) => {
    const id = req.params.id;
    Composition.destroy({
        where: {
          id: id
        }
    })
    .then(composition => {
        res.json({message: "Composition deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


