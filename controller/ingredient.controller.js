const Ingredient = require('../models/').Ingredient;

/**
 * @api {get} /ingredients Show all ingredients
 * @apiName getIngredients
 * @apiGroup Ingredient
 * @apiSuccess {String} _id id of the Ingredient.
 * @apiSuccess {String} name name of the Ingredient.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 1,
 *       "name": "Blonde"
 *     }]
 */
exports.ingredient_list = (req,res,next)=>{
    Ingredient.findAll({})
    .then(ingredients => {
        res.json(ingredients);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 *  * @api {get} /ingredients/:id Show detail of one ingredient
 * @apiName getIngredientsDetail
 * @apiGroup Ingredient
 * 
 * @apiParam {Number} id of the Ingredient
 * 
 * @apiSuccess {String} _id id of the Ingredient.
 * @apiSuccess {String} name name of the Ingredient.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.ingredient_detail = (req,res,next)=>{
    const id = req.params.id
    Ingredient.findByPk(id)
    .then(ingredient => {
        res.json(ingredient);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /ingredients/add Add one ingredient
 * @apiName addIngredient
 * @apiGroup Ingredient
 * 
 * @apiParam {String} name name of the Ingredient.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Ingredient.
 * @apiSuccess {String} name name of the Ingredient.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.ingredient_add = (req,res,next) => {
    Ingredient.create(req.body)
    .then(ingredient => {
        res.json(ingredient);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /ingredients/edit/:id Edit one ingredient
 * @apiName editIngredient
 * @apiGroup Ingredient
 * 
 * @apiParam {Number} id id of the Ingredient.
 * @apiParam {String} name name of the Ingredient.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Ingredient.
 * @apiSuccess {String} name name of the Ingredient.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.ingredient_edit = (req,res,next) => {
    const id = req.params.id;
    Ingredient.update(req.body, {
        where: {
          id: id
        }
    })
    .then(ingredient => {
        res.json({message: `Ingredient ${id} est modifie`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /ingredients/delete/:id Delete one ingredient
 * @apiName deleteIngredient
 * @apiGroup Ingredient
 * 
 * @apiParam {Number} id id of the Ingredient.
 * 
 * @apiSuccess {String} message Ingredient deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Ingredient deleted"
 *     }
 */
exports.ingredient_delete = (req,res,next) => {
    const id = req.params.id;
    Ingredient.destroy({
        where: {
          id: id
        }
    })
    .then(ingredient => {
        res.json({message: "Ingredient deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


