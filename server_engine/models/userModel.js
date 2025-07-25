const pool = require('../db/main.js');

const createUser = async (fullName, email, mobile, password) => {
    await pool.query(
        'insert into users (name, mail, phone, password) values ($1, $2, $3, $4)',
        [fullName, email, mobile, password]
    )
};

const verifyUser = async (mobile) => {
    try {
        const result = await pool.query(
            'select * from users where phone = $1', [mobile]
        )

        const user = result.rows[0];

        return user;
    }
    catch (e) {
        console.log("Error during signin: ", e);
        return { success: false, message: 'Server Error' };
    }
}
module.exports = { createUser, verifyUser };