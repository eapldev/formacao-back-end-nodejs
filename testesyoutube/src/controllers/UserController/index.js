const users = require("../../database/users");
const { v4: uuidv4 } = require("uuid");

function insertUser(req, res) {
  const { name, age } = req.body;

  if (!name || !age) {
    return res.send(404).json({ message: "Name and/or age is required!" });
  }

  const user = {
    id: uuidv4(),
    name,
    age,
  };

  users.push(user);

  delete user.id;

  return res.status(200).json(user);
}

function selectUsers(req, res) {
  const { initial_age, final_age } = req.query;
  let usersFilted = users;

  if (initial_age && final_age) {
    usersFilted = users.filter(
      (user) => user.age >= initial_age && user.age <= final_age
    );
  }

  return res.status(200).json(usersFilted);
}

function updateUser(req, res) {}

function deleteUser(req, res) {}

module.exports = { insertUser, selectUsers, updateUser, deleteUser };
