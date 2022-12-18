// All the shit and mess is here
//this is the most hated file ever :'( :'(

const noteModel = require("../model/noteModel");

exports.PostNote = async (req, res) => {
  const date = new Date();
  try {
    const newNote = new noteModel({ ...req.body, date: date });
    await newNote.save();
    res.status(200).send({ msg: "Note created successfully", newNote });
  } catch (error) {
    res.status(400).send({ msg: "try again", error });
  }
};

exports.DeleteNote = async (req, res) => {
  try {
    await noteModel.findByIdAndDelete(req.params);
    res.status(200).send({ msg: "Note deleted successfully" });
  } catch (error) {
    res.status(400).send({ msg: "can't delete note please verify ID" });
  }
};
exports.UpdateNote = async (req, res) => {
  const { title, content } = req.body;

  try {
    await noteModel.updateOne(req.params, {
      $set: {
        title: title,
        content: content,
      },
    });

    res.status(200).send({ msg: "contact updated successfully" });
  } catch (error) {
    res.status(400).send({ msg: "can't update contact please verify ID" });
  }
};
exports.GetallNotes = async (req, res) => {
  try {
    const notes = await noteModel.find({});

    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send({ msg: "an error occured try again" });
  }
};
exports.GetOneNote = async (req, res) => {
  try {
    const notes = await noteModel.find(req.params);

    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send({ msg: "an error occured try again" });
  }
};
