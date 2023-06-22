import jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
dotenv.config()

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];

    jwt.verify(token, process.env.SECRET , (err, decoded) => {
        if(err) {
            return res.status(401).end();
        }

        req.userId = decoded.userId;
        next();
    })
}

export default verifyJWT;