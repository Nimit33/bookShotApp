import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    try {
        const { fullname, email, password } = req.body;
        // postmen ke user ke andar json mein likhe body se milenge
        const user = await User.findOne({ email })
        if (user) {
            return res.status(400).json({ message: "User already exists" })
            //it will say user already exists

        }
        const hashPassword = await bcryptjs.hash(password, 10);
        // pasword ko ciphertext mein convert kr rhe hai
        const createdUser = new User({
            fullname: fullname, email: email, password: hashPassword,
        });

        await createdUser.save()
        res.status(201).json({
            message: "User created successfully", user: {
                _id: createdUser._id,
                fullname: createdUser.fullname,
                email: createdUser.email,
            }
        });

    } catch (error) {
        console.log("Error: " + error.message)
        res.status(500).json({ message: "Internal server error" })
        // on client side yeh error bhej denge

    }

};

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        // user variable ke andar mongodb data fetch ho jayega saara
        const isMatch = await bcryptjs.compare(password, user.password);
        // joh user password daal rha hai usko database ke andar ke password se compare kr rhe hai\
        if (!user || !isMatch) {
            return res.status(400).json({
                message: "Invalid username or password"
            });
        }
        else {
            res.status(200).json({
                message: "Login successful", user: {
                    _id: user._id,
                    fullname: user.fullname,
                    email: user.email
                }
            })
        }

    } catch (error) {
        console.logn("Error: " + error.message)
        res.status(500).json({ message: "Internal server error" })



    }


}