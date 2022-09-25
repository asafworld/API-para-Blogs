const Joi = require('joi');

const emailSchema = Joi.object({
  email: Joi.string().email({
    minDomainSegments: 2,
    tlds: {
      allow: ['com', 'net'],
    },
  }),
});

const validateName = (displayName, res) => {
  const nameArr = displayName.split('');
  if (nameArr.length < 8) {
    return res.status(400).json({ 
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  return true;
};

const validateEmail = async (email, res) => {
  try {
    const { error } = await emailSchema.validateAsync({ email });
    if (error === null) {
    return true;
    }
  } catch (err) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
};

const validatePassword = (password, res) => {
  const passArr = password.split('');
  if (passArr.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  return true;
};

const checkUserInfo = async (req, res, next) => {
  validateName(req.body.displayName, res);
  await validateEmail(req.body.email, res);
  validatePassword(req.body.password, res);
  return next();
};

module.exports = checkUserInfo;