const Note = require('../models/').Note;

/**
 * @api {get} /notes Show all notes
 * @apiName getNotes
 * @apiGroup Note
 * @apiSuccess {String} _id id of the Note.
 * @apiSuccess {String} name name of the Note.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
 *       "id": 1,
 *       "name": "Blonde"
 *     }]
 */
exports.note_list = (req,res,next)=>{
    Note.findAll({})
    .then(notes => {
        res.json(notes);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 *  * @api {get} /notes/:id Show detail of one note
 * @apiName getNotesDetail
 * @apiGroup Note
 * 
 * @apiParam {Number} id of the Note
 * 
 * @apiSuccess {String} _id id of the Note.
 * @apiSuccess {String} name name of the Note.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.note_detail = (req,res,next)=>{
    const id = req.params.id
    Note.findByPk(id)
    .then(note => {
        res.json(note);
    })
    .catch(error=>{
        res.status(400);
        res.json({message : 'il y a rien la'});
    })
}

/**
 * @api {post} /notes/add Add one note
 * @apiName addNote
 * @apiGroup Note
 * 
 * @apiParam {String} name name of the Note.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Note.
 * @apiSuccess {String} name name of the Note.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.note_add = (req,res,next) => {
    Note.create(req.body)
    .then(note => {
        res.json(note);
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {put} /notes/edit/:id Edit one note
 * @apiName editNote
 * @apiGroup Note
 * 
 * @apiParam {Number} id id of the Note.
 * @apiParam {String} name name of the Note.
 * @apiParamExample {json} Request-Example:
*     {
*       "name": "Blonde"
*     }
 * 
 * @apiSuccess {String} _id id of the Note.
 * @apiSuccess {String} name name of the Note.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "id": 1,
 *       "name": "Blonde"
 *     }
 */
exports.note_edit = (req,res,next) => {
    const id = req.params.id;
    Note.update(req.body, {
        where: {
          id: id
        }
    })
    .then(note => {
        res.json({message: `Note ${id} est modifie`});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}

/**
 * @api {delete} /notes/delete/:id Delete one note
 * @apiName deleteNote
 * @apiGroup Note
 * 
 * @apiParam {Number} id id of the Note.
 * 
 * @apiSuccess {String} message Note deleted.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       message: "Note deleted"
 *     }
 */
exports.note_delete = (req,res,next) => {
    const id = req.params.id;
    Note.destroy({
        where: {
          id: id
        }
    })
    .then(note => {
        res.json({message: "Note deleted"});
    })
    .catch(error=>{
        res.status(400);
        res.json(error);
    })
}


