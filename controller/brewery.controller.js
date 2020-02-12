const Brewery = require('../models/').Brewery;

/**
 * @api {get} /breweries Show all breweries
 * @apiName getBreweries
 * @apiGroup Brewery
 * @apiSuccess {String} _id id of the Brewery.
 * @apiSuccess {String} name name of the Brewery.
 * @apiSuccess {String} description description of the Brewery.
 * @apiSuccess {String} logo url logo
 * @apiSuccess {Integer} year Year of the creation.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccess {Integer} CountryId Id of the country.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *             "id": 1,
 *             "name": "Le monastere des chauves",
 *             "description": "Superbe monastere au centre des Alpes, paume sur une pente abrupte...",
 *             "logo": "https://lh3.googleusercontent.com/proxy/eGUZ8-N2x9W5-hArmp2yvpi_2uPSzcF8Wrb3zaMpbPd8eckdrDZMwB5btuqWG_Pu5t9XbmhNF22W-hNavcs9r8fMwukqvJVr8YkVcxTl77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *             "year": 2010,
 *             "createdAt": "2020-02-12T09:05:50.000Z",
 *             "updatedAt": "2020-02-12T09:05:50.000Z",
 *             "CountryId": 1
 *         }
 *     ]
 */
exports.brewery_list = (req,res,next)=>{
    Brewery.findAll({})
    .then(breweries => {
        res.json(breweries);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {get} /breweries/:id Show detail of one brewery
 * @apiName getBreweriesDetail
 * @apiGroup Brewery
 * 
 * @apiParam {Number} id of the Brewery
 * 
 * @apiSuccess {String} _id id of the Brewery.
 * @apiSuccess {String} name name of the Brewery.
 * @apiSuccess {String} description description of the Brewery.
 * @apiSuccess {String} logo url logo
 * @apiSuccess {Integer} year Year of the creation.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccess {Integer} CountryId Id of the country.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "name": "Le monastere des chauves",
 *         "description": "Superbe monastere au centre des Alpes, paume sur une pente abrupte...",
 *         "logo": "https://lh3.googleusercontent.com/proxy/eGUZ8-N2x9W5-hArmp2yvpi_2uPSzcF8Wrb3zaMpbPd8eckdrDZMwB5btuqWG_Pu5t9XbmhNF22W-hNavcs9r8fMwukqvJVr8YkVcxTl77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *         "year": 2010,
 *         "createdAt": "2020-02-12T09:05:50.000Z",
 *         "updatedAt": "2020-02-12T09:05:50.000Z",
 *         "CountryId": 1
 *     }
 */
exports.brewery_detail = (req,res,next)=>{
    const id = req.params.id
    Brewery.findByPk(id)
    .then(brewery => {
        res.json(brewery);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /breweries/add Add one brewery
 * @apiName addBrewery
 * @apiGroup Brewery
 * 
 * @apiParam {String} name name of the Brewery.
 * @apiParam {String} description description of the Brewery.
 * @apiParam {String} logo url logo
 * @apiParam {Integer} year Year of the creation.
 * @apiParam {Integer} CountryId Id of the country.
 * @apiParamExample {json} Request-Example:
 *    HTTP/1.1 200 OK
 *    {
 *        "name": "Le monastere des chauves",
 *        "description": "Superbe monastere au centre des Alpes, paume sur une pente abrupte...",
 *        "logo": "https://lh3.googleusercontent.com/proxy/eGUZ8-N2x9W5-hArmp2yvpi_2uPSzcF8Wrb3zaMpbPd8eckdrDZMwB5btuqWG_Pu5t9XbmhNF22W-hNavcs9r8fMwukqvJVr8YkVcxTl77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *        "year": 2010,
 *        "CountryId": 1
 *    }
 * @apiSuccess {String} _id id of the Brewery.
 * @apiSuccess {String} name name of the Brewery.
 * @apiSuccess {String} description description of the Brewery.
 * @apiSuccess {String} logo url logo
 * @apiSuccess {Integer} year Year of the creation.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccess {Integer} CountryId Id of the country.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "name": "Le monastere des chauves",
 *         "description": "Superbe monastere au centre des Alpes, paume sur une pente abrupte...",
 *         "logo": "https://lh3.googleusercontent.com/proxy/eGUZ8-N2x9W5-hArmp2yvpi_2uPSzcF8Wrb3zaMpbPd8eckdrDZMwB5btuqWG_Pu5t9XbmhNF22W-hNavcs9r8fMwukqvJVr8YkVcxTl77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *         "year": 2010,
 *         "createdAt": "2020-02-12T09:05:50.000Z",
 *         "updatedAt": "2020-02-12T09:05:50.000Z",
 *         "CountryId": 1
 *     }
 */
exports.brewery_add = (req,res,next) => {
    Brewery.create(req.body)
    .then(brewery => {
        res.json(brewery);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /breweries/edit/:id Edit one brewery
 * @apiName editBrewery
 * @apiGroup Brewery
 * 
 * @apiParam {Number} id id of the Brewery.

 * @apiParam {String} name name of the Brewery.
 * @apiParam {String} description description of the Brewery.
 * @apiParam {String} logo url logo
 * @apiParam {Integer} year Year of the creation.
 * @apiParam {Integer} CountryId Id of the country.
 * @apiParamExample {json} Request-Example:
 *    HTTP/1.1 200 OK
 *    {
 *        "name": "Le monastere des chauves",
 *        "description": "Superbe monastere au centre des Alpes, paume sur une pente abrupte...",
 *        "logo": "https://lh3.googleusercontent.com/proxy/eGUZ8-N2x9W5-hArmp2yvpi_2uPSzcF8Wrb3zaMpbPd8eckdrDZMwB5btuqWG_Pu5t9XbmhNF22W-hNavcs9r8fMwukqvJVr8YkVcxTl77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *        "year": 2010,
 *        "CountryId": 1
 *    }
 * @apiSuccess {String} _id id of the Brewery.
 * @apiSuccess {String} name name of the Brewery.
 * @apiSuccess {String} description description of the Brewery.
 * @apiSuccess {String} logo url logo
 * @apiSuccess {Integer} year Year of the creation.
 * @apiSuccess {Date} createdAt createdAt
 * @apiSuccess {Date} updatedAt updatedAt 
 * @apiSuccess {Integer} CountryId Id of the country.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "name": "Le monastere des chauves",
 *         "description": "Superbe monastere au centre des Alpes, paume sur une pente abrupte...",
 *         "logo": "https://lh3.googleusercontent.com/proxy/eGUZ8-N2x9W5-hArmp2yvpi_2uPSzcF8Wrb3zaMpbPd8eckdrDZMwB5btuqWG_Pu5t9XbmhNF22W-hNavcs9r8fMwukqvJVr8YkVcxTl77VGkGZI2JRZhDj3XOk2RtQbgqE0",
 *         "year": 2010,
 *         "createdAt": "2020-02-12T09:05:50.000Z",
 *         "updatedAt": "2020-02-12T09:05:50.000Z",
 *         "CountryId": 1
 *     }
 */
exports.brewery_edit = (req,res,next) => {
    const id = req.params.id;
    Brewery.update(req.body, {
        where: {
          id: id
        }
    })
    .then(brewery => {
        res.json({message: `Brewery ${id} est modifie`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /breweries/delete/:id Delete one brewery
 * @apiName deleteBrewery
 * @apiGroup Brewery
 * 
 * @apiParam {Number} id id of the Brewery.
 * 
 * @apiSuccess {String} message Brewery deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Brewery deleted"
 *     }
 */
exports.brewery_delete = (req,res,next) => {
    const id = req.params.id;
    Brewery.destroy({
        where: {
          id: id
        }
    })
    .then(brewery => {
        res.json({message: "Brewery deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


