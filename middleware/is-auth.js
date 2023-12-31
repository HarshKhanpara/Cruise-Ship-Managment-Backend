exports.isAuth = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        req.userId = null;
        return next();
    }
    const token = authHeader.split(' ')[1];
    if (!token || token === '') {
        req.isAuth = false;
        req.userId = null;
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(token, 'secretkey');
    }
    catch (err) {
        req.isAuth = false;
        req.userId = null;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        req.userId = null;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
};


