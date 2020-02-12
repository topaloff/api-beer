const Beer = require('../models/').Beer;

/**
 * @api {get} /beers Show all beers
 * @apiName getBeers
 * @apiGroup Beer
 * @apiSuccess {String} _id id of the Beer.
 * @apiSuccess {String} name name of the Beer.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 1,
 *       "name": "Blonde"
 *     }]
 */
exports.beer_list = (req,res,next)=>{
    Beer.findAll({})
    .then(beers => {
        res.json(beers);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/*
 * @api {get} /beers/:id Show detail of one beer
 * @apiName getBeersDetail
 * @apiGroup Beer
 * 
 * @apiParam {Number} id of the Beer
 * 
 * @apiSuccess {String} _id id of the Beer.
 * @apiSuccess {String} name name of the Beer.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.beer_detail = (req,res,next)=>{
    const id = req.params.id
    Beer.findByPk(id)
    .then(beer => {
        res.json(beer);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /beers/add Add one beer
 * @apiName addBeer
 * @apiGroup Beer
 * 
 * @apiParam {String} name name of the Beer.
 * @apiParam {Float} degree degree of the Beer.
 * @apiParam {String} description description of the Beer.
 * @apiParam {String} picture picture of the Beer.
 * @apiParam {Integer} year year of creation of the Beer.
 * @apiParam {Integer} BreweryId BreweryId of the Beer.
 * @apiParam {Integer} TypeId TypeId of the Beer.
 * @apiParamExample {json} Request-Example:
 *    {
 *       "name": "La chouffe",
 *       "degree": 19.4,
 *       "description": "Ceci est une biere qui tabasse",
 *       "picture": "https://lh3.googleusercontent.comVGkGZI2JRZhDj3XOk2RtQbgqE0",
 *       "year": 1990,
 *       "BreweryId": 1,
 *       "TypeId":1
 *   }
 ** 
 * @apiSuccess {String} id id of the Beer.
 * @apiSuccess {String} name name of the Beer.
 * @apiSuccess {Float} degree degree of the Beer.
 * @apiSuccess {String} description description of the Beer.
 * @apiSuccess {String} picture picture of the Beer.
 * @apiSuccess {Integer} year year of the Beer.
 * @apiSuccess {Integer} TypeId TypeId of the Beer.
 * @apiSuccess {Integer} BreweryId BreweryId of the Beer.
 * @apiSuccess {Date} createdAt date of creation of the Beer.
 * @apiSuccess {Date} updatedAt last update of the Beer.
 * @apiSuccessExample {json} Success-Response:
 *     {
 *         "id": 1,
 *         "name": "La chouffe",
 *         "degree": 19.4,
 *         "description": "Ceci est une biere qui tabasse",
 *         "picture": "https://lh3.googleusercontent.com77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *         "year": 1990,
 *         "BreweryId": 1,
 *         "TypeId":1,
 *         "createdAt": "2020-02-11T13:57:17.000Z",
 *         "updatedAt": "2020-02-11T13:57:17.000Z"
 *     }
 */
exports.beer_add = (req,res,next) => {
    Beer.create(req.body)
    .then(beer => {
        res.json(beer);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /beers/edit/:id Edit one beer
 * @apiName editBeer
 * @apiGroup Beer
 * 
 * @apiSuccess {String} id id of the Beer.
 * @apiSuccess {String} name name of the Beer.
 * @apiSuccess {Float} degree degree of the Beer.
 * @apiSuccess {String} description description of the Beer.
 * @apiSuccess {String} picture picture of the Beer.
 * @apiSuccess {Integer} year year of the Beer.
 * @apiSuccess {Integer} TypeId TypeId of the Beer.
 * @apiSuccess {Integer} BreweryId BreweryId of the Beer.
 * @apiSuccess {Date} createdAt date of creation of the Beer.
 * @apiSuccess {Date} updatedAt last update of the Beer.
 * @apiSuccessExample {json} Success-Response:
 *     {
 *         "id": 1,
 *         "name": "La chouffe",
 *         "degree": 19.4,
 *         "description": "Ceci est une biere qui tabasse",
 *         "picture": "https://lh3.googleusercontent.com77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *         "year": 1990,
 *         "BreweryId": 1,
 *         "TypeId":1,
 *         "createdAt": "2020-02-11T13:57:17.000Z",
 *         "updatedAt": "2020-02-11T13:57:17.000Z"
 *     }
 */

exports.beer_edit = (req,res,next) => {
    const id = req.params.id;
    Beer.update(req.body, {
        where: {
          id: id
        }
    })
    .then(beer => {
        res.json(beer);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /beers/delete/:id Delete one beer
 * @apiName deleteBeer
 * @apiGroup Beer
 * 
 * @apiParam {Number} id id of the Beer.
 * 
 * @apiSuccess {String} message Beer deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Beer deleted"
 *     }
 */
exports.beer_delete = (req,res,next) => {
    const id = req.params.id;
    Beer.destroy({
        where: {
          id: id
        }
    })
    .then(beer => {
        res.status(200);
        res.json({message: "Beer deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


