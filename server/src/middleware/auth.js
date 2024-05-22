import jwt from 'jsonwebtoken';
export const authenticateToken = (req, res, next) => {
    const tokenBearer = req.header('Authorization');

    if (!tokenBearer) {
        return res.status(401).json({
            ok: false,
            msg: 'No hay token en la peticion'
        });
    }

    const token = tokenBearer.split(' ')[1];


    jwt.verify(token, process.env.SECRET_SWT_SEED, (err, user) => {

        if (err) {
            return res.status(403).json({
                ok: false,
                msg: 'error de token'
            })
        }
        req.user = user;
    });
    next();
}