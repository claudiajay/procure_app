const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) return res.status(401).json({msg: 'No Token'});

  try {
    const verified = jwt.verify(token, process.env.ACCESS_SECRET_TOKEN);
    req.user = verified;
    next();
  } catch {
    res.status(401),json({msg: "Invalid Token"});
  }
}

module.exports = auth ;