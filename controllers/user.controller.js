const User = require("../models/User.model");
const ObjectID = require("mongoose").Types.ObjectId;

module.exports.addUser = async (req, res, next) => {
  const { firstname, lastname, email, phone, picture } = req.body;
  try {
    const user = User.create({ firstname, lastname, email, phone, picture });
    res.status(201).json({ user: user._id });
  } catch (err) {
    res.status(500).json({ message: err });
  }
};

module.exports.updateUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res
      .status(404)
      .send({ message: `${req.params.id} does not exist!` });

  try {
    await User.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          firstname: req.body.firstname,
          lastname: req.body.lastname,
          email: req.body.email,
          phone: req.body.phone,
          picture: req.body.picture,
        },
      },
      { new: true },
      (err, data) => {
        if (!err) res.status(200).json(data);
        else res.status(500).send({ message: err });
      }
    );
  } catch (err) {
    res.status(500).send({ message: err });
  }
};

module.exports.getOneUSer = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res
      .status(404)
      .send({ message: `${req.params.id} does not exist!` });

  try {
    await User.findById(req.params.id, (err, data) => {
      if (!err) res.status(200).json(data);
      else res.status(500).send({ err });
    });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports.deleteUser = async (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(404).send({ message: `Unknown ID : ${req.params.id}` });

  try {
    await User.remove({ _id: req.params.id }).exec();
    res.status(200).send({ message: "Deleted successfully!" });
  } catch (err) {
    return res.status(500).send({ message: err });
  }
};

module.exports.getAllUsers = async (req, res) => {
  const users = await User.find();
  res.status(200).json(users);
};
