import User from "../models/userModel.js";

// @ts-ignore
// Add a user
const addUser = async (req, res) => {
  const { address } = await req.body;

  const users = await User.find({});

  const userExists = users.find((user) => user.address === address);
  if(userExists){
    return res.status(200).json(userExists);
  }
  try {
    const user = await User.create({
      address,
    });

    res.status(200).json(user);
  } catch (error) {
    // @ts-ignore
    res.status(400).json({ error: error.message });
  }
};

export { addUser };
