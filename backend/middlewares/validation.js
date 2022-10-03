const validator = require('email-validator');

const inputValidationFn = (req, res, next) => {
    const { userName, email, password } = req.body;

    if (!userName && req._parsedUrl.path === '/register') {
        return res.status(400).json({ status: false, error: 'UserName must be required' });
    }
    else if (!email) {
        return res.status(400).json({ status: false, error: 'Email must be required' });
    }
    else if (!validator.validate(email)) {
        return res.status(400).json({ status: false, error: 'Invalid email' });
    }
    else if (!password) {
        return res.status(400).json({ status: false, error: 'Password must be required' });
    }
    next();
}
module.exports =  inputValidationFn;