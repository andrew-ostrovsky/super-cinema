import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";

import {
    User
} from '../schemas/user';

let router = express.Router();

router.use(bodyParser.json());

// @todo refactor login/registration methods separate into functions/modules
// Avoid code duplocation

router.route("/register")
    .post(function(req, res) {
        User.findOne({
            username: req.body.username
        }, (dbError, user) => {
            if (dbError) {
                return handleError(res, dbError);
            }

            const username = req.body.username;

            // if user already exists return send error response
            if (user) {
                return handleError(res,
                    `User with username "${username}" already exists`
                );
            }

            // generate random salt
            const salt = genRandomString(10);

            // encryptPassword
            const password = crypto
                .createHash("sha256")
                .update(`${req.body.password}${salt}`)
                .digest("hex");

            const newUser = new User({
                username,
                password,
                salt
            });

            newUser.save((err, newUser) => {
                if (err) {
                    handleError(res, err);
                    res.sendStatus(500);
                } else {
                    // this will create new session / add set cookies header in response
                    req.session.username = User.username;
                    res.sendStatus(200);
                }
            });

        });
    });

router.route("/login")
    .post(function(req, res) {
        User.findOne({
            username: req.body.username
        }, (dbError, user) => {
            if (dbError) {
                return handleError(res, dbError);
            }

            if (!user) {
                return handleError(res,
                    `User with username "${req.body.username}" not found`
                );
            }

            const encyptedPassword = crypto
                .createHash("sha256")
                .update(`${req.body.password}${user.salt}`)
                .digest("hex");

            if (user.password === encyptedPassword) {
                // this will create new session / add set cookies header in response
                req.session.username = user.username;
                res.sendStatus(200);

            } else {
                return handleError(res, 'Bad credentials');
            }

        });
    });

function handleError(res, message) {
    console.log(`Error happend: ${message}`);

    // @todo Send proper status, send error message
    res.sendStatus(401);
};

function genRandomString(length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0, length); /** return required number of characters */
};

export default router;
