const User = require('../models/userDetails');
const bcrypt = require('bcrypt');

async function createUser(userData) {
    const { name, email, password, role } = userData; // Include role in destructuring

    // Check if the email is already in use
    const existingUserByEmail = await User.findOne({ email });
    if (existingUserByEmail) {
        const error = new Error('Email already exists');
        error.code = 'EMAIL_EXISTS';
        throw error;
    }

    // Check if the name is already in use
    const existingUserByName = await User.findOne({ name });
    if (existingUserByName) {
        const error = new Error('Name already exists');
        error.code = 'NAME_EXISTS';
        throw error;
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user object
    const createdUser = new User({
        name,
        email,
        password: hashedPassword,
        role, // Assign the role from the userData
    });

    // Save the new user to the database
    const savedUser = await createdUser.save();
    return savedUser;
}

module.exports = { createUser };
