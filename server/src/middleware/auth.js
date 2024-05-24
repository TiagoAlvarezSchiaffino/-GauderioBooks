import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const tokenBearer = req.header('Authorization');

    if (!tokenBearer) {
        return res.status(401).json({
            ok: false,
            msg: 'There is no token in the request'
        });
    }

    const token = tokenBearer.split(' ')[1];


    jwt.verify(token, process.env.SECRET_SWT_SEED, (err, user) => {

        if (err) {
            return res.status(403).json({
                ok: false,
                msg: 'token error'
            })
        }
        req.user = user;
    });
    next();
}