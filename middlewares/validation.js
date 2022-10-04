const validator = require('email-validator');

const inputValidationFn = (req, res, next) => {
    console.log(req.body);
    if (!req?.body?.userName && req._parsedUrl.path === '/register') {
        return res.status(400).json({ status: false, error: 'UserName must be required' });
    }
    else if (!req?.body?.email) {
        return res.status(400).json({ status: false, error: 'Email must be required' });
    }
    else if (!validator.validate(req?.body?.email)) {
        return res.status(400).json({ status: false, error: 'Invalid email' });
    }
    else if (!req?.body?.password) {
        return res.status(400).json({ status: false, error: 'Password must be required' });
    }
    next();
}
module.exports =  inputValidationFn;