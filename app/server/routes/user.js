import express from "express";
import bodyParser from "body-parser";
import crypto from "crypto";

import {
    User
} from '../schemas/user';

let router = express.Router();

router.use(bodyParser.json());

router.route("/logout")
    .post(function(req, res) {
        if (req.session && req.session.username) {
            delete req.session.username;
            req.session.save();
            res.sendStatus(200);
        } else {
            res.sendStatus(401);
        }
    });

router.route("/relogin")
    .post(function(req, res) {
        if (req.session && req.session.username) {
            User.findOne({
                username: req.session.username
            }, (dbError, user) => {
                if (dbError) {
                    return handleError(res, 500, dbError);
                }

                if (!user) {
                    return handleError(res, 401,
                        `User with username "${req.session.username}" not found`
                    );
                }

                return successLoginAction(req, res, user);
            });
        } else {
            res.sendStatus(401);
        }
    });

router.route("/register")
    .post(function(req, res) {
        User.findOne({
            username: req.body.username
        }, (dbError, user) => {
            if (dbError) {
                return handleError(res, 500, dbError);
            }

            const username = req.body.username;

            if (validateFieldLengthError(username)) {
                return sendFieldLengthError(res, 'Username');
            }

            if (validateFieldLengthError(req.body.password)) {
                return sendFieldLengthError(res, 'Password');
            }

            // if user already exists return send error response
            if (user) {
                return handleError(res, 401,
                    `User with username "${username}" already exists`
                );
            }

            // generate random salt
            const salt = genRandomString(10);

            // encryptPassword
            const password = encryptPassword(req.body.password,
                salt);

            const newUser = new User({
                username,
                password,
                salt
            });

            newUser.save((err, newUser) => {
                if (err) {
                    handleError(res, 500,
                        'Internal server error');
                } else {
                    return successLoginAction(req, res,
                        newUser);
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
                return handleError(res, 500, dbError);
            }

            if (validateFieldLengthError(req.body.username)) {
                return sendFieldLengthError(res, 'Username');
            }

            if (validateFieldLengthError(req.body.password)) {
                return sendFieldLengthError(res, 'Password');
            }

            if (!user) {
                return handleError(res, 401,
                    `User with username "${req.body.username}" not found`
                );
            }

            const encyptedPassword = encryptPassword(req.body.password,
                user.salt);

            if (user.password === encyptedPassword) {
                return successLoginAction(req, res, user);

            } else {
                return handleError(res, 401, 'Bad credentials');
            }

        });
    });

function sendFieldLengthError(res, fieldName) {
    return handleError(res, 400,
        `${fieldName} field is required and must be of length 3 to 12`
    );
}

function validateFieldLengthError(field) {
    if (field.length < 3 || field.length > 11) {
        return true;
    }

    return false;
}

function successLoginAction(req, res, user) {
    // this will create new session / add set cookies header in response
    req.session.username = user.username;

    res.status(200).send({
        username: user.username
    });
}

function encryptPassword(plainPassword, salt) {
    return crypto
        .createHash("sha256")
        .update(`${plainPassword}${salt}`)
        .digest("hex");
}

function handleError(res, status, message) {
    let errorPhrase = `Error happend: ${message}`;
    console.log(errorPhrase);

    res.status(401).send(errorPhrase);
};

function genRandomString(length) {
    return crypto.randomBytes(Math.ceil(length / 2))
        .toString('hex') /** convert to hexadecimal format */
        .slice(0, length); /** return required number of characters */
};

export default router;
