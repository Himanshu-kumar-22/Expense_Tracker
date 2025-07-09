const pool = require('../db/main.js');

const createUser = async (fullName, email, mobile, password) => {
    await pool.query(
        'insert into users (name, mail, phone, password) values ($1, $2, $3, $4)',
        [fullName, email, mobile, password]
    )
};

const verifyUser = async (mobile, password) => {
    try {
        const result = await pool.query(
            'select * from users where phone = $1', [mobile]
        )

        if (result.rows.length === 0) {
            return { success: false, message: "Hmm, we couldn't find your account. Want to sign up?" }
        }

        const user = result.rows[0];

        if (user.password === password) {
            return { success: true, message: `Welcome back, ${user.name}!` }
        }
        else {
            return { success: false, message: 'Invalid Phone number or Password' }
        }

    }
    catch (e) {
        console.log("Error during signin: ", e);
        return { success: false, message: 'Server Error' };
    }
}
module.exports = { createUser, verifyUser };