const User = require('./auth.dao');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const SECRET_KEY = 'password';

exports.createUser = (req, res, next) => {
  const salt = bcrypt.genSaltSync(10);
  
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync(req.body.password, salt)
  };

  User.create(newUser, (err, user) => {
    if (err && err.code === 11000) {
      return res.status(409).send('Email already exists');
    }
    
    if (err) {
      return res.status(500).send('Server Error');
    }

    const expiresIn = "30 days";

    const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {
      expiresIn: expiresIn
    });

    const dataUser = {
      name: user.name,
      email: user.email,
      accessToken,
      expiresIn
    }
    
    res.send({dataUser});
  });
}

exports.loginUser = (req, res, next) => {
  const userData = {
    email: req.body.email,
    password: req.body.password
  };

  User.findOne({email: userData.email}, (err, user) => {
    if (err) {
      return res.status(500).send('Server error');
    }

    if (!user) {
      res.status(409).send({message: 'Something is wrong'});
    } else {
      const resultPassword = bcrypt.compareSync(userData.password, user.password);

      if (!resultPassword) {
        res.status(409).send({message: 'Something is wrong'});
      } else {
        const expiresIn = 24 * 60 * 60;
        const accessToken = jwt.sign({id: user.id}, SECRET_KEY, {
          expiresIn
        });

        const dataUser = {
          name: user.name,
          email: user.email,
          accessToken,
          expiresIn
        }

        res.send({dataUser});
      }
    }
  });
}