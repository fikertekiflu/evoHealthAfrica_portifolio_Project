const User =  require('../models/User');
const  bcrypt =  require('bcryptjs');

    exports.register = async (req, res) => {
        try {
            const { username, password, email } = req.body;

            // Check if user already exists
            const existingUser = await User.findOne({ where: { username } });
            if (existingUser) {
                return res.status(400).json({ message: 'User already exists' });
            }
             const hashedPassword =  await bcrypt.hash(password, 10)
             const user = await User.create({ username, password:hashedPassword , email});
            res.status(201).json({ message: 'User registered successfully', userId: user.id });
        }catch (error) {
    res.status(500).json({ message: 'Server error', error });
}
};
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        // Check if the user exists
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Compare the provided password with the stored hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // If credentials are correct
        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
};

