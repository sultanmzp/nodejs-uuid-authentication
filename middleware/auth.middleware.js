//check the user is even exist or not

const { getUser } = require("../utils/authdiary");


const isAuthenticated = async (req, res, next) => {
    try {
        const userUid = req.cookies?.uid; //getting existing cookies
        if (!userUid) { //check if cookies exist
            return res.status(401).json({
                message: "User not authenticated",
                success: false
            });
        }

        const user = getUser(userUid);

        if (!user) {
            return res.status(401).json({
                message: "User not exist",
                success: false
            });
        }

        req.user = user;

        next();

    } catch (error) {
        return error
    }
}

module.exports = {
    isAuthenticated,
}