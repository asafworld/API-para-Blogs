const checkLoginInfo = (req, res, next) => {
  const { email, password } = req.body;
  const body = [email, password];
  if (body.some((l) => l === null || l === undefined || l === '')) {
    console.log('oi');
    return res.status(400).json({
      message: 'Some required fields are missing',
    });
  }
  return next();
};

module.exports = checkLoginInfo;