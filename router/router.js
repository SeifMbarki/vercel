//here we're going to create our routes in order to keep our server clean
//NB: even this part won't be as messy as the controllers :')
const express = require("express");
const {
  PostNote,
  GetallNotes,
  UpdateNote,
  DeleteNote,
  GetOneNote,
} = require("../Controllers/noteController");

//straight to the shit now
router = express.Router();
/**
 *  @desc : add Contacts
 * @path : http://localhost:5000/api/contact
 * @method : post
 * @data : req.body
 * @access : public
 */
router.post("/", PostNote);
/**
 *  @desc : get Contact by id
 * @path : http://localhost:5000/api/contact
 * @method : get
 * @data : req.params._id
 * @access : public
 */

router.get("/", GetallNotes);
router.get("/one/:_id", GetOneNote);
router.put("/:_id", UpdateNote);
router.delete("/:_id", DeleteNote);
module.exports = router;
