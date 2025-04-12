const prisma = require('../config/prismaConfig.js');
const bcrypt = require('bcryptjs');

const register = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const existingEmail = await prisma.user.findUnique({
      where: { email },
    });

    if (existingEmail) {
      return res.status(400).json({ message: 'Email is already taken' });
    }

    const existingUsername = await prisma.user.findUnique({
      where: { username },
    });

    if (existingUsername) {
      return res.status(400).json({ message: 'Username is already taken' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Error registering user', error });
  }
};


const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    req.session.user = { id: user.id, email: user.email, username: user.username };

    res.json({ message: 'Login successful', user: req.session.user });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

const logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ message: 'Could not log out' });
    }
    res.json({ message: 'Logged out successfully' });
  });
};
const checkAuth = (req, res) => {
  if (req.session && req.session.user) {
    return res.status(200).json({ loggedIn: true, user: req.session.user });
  } else {
    return res.status(401).json({ loggedIn: false, message: 'Not authenticated' });
  }
};

module.exports = { register, login, logout, checkAuth };
