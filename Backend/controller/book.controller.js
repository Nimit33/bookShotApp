import Book from "../model/book.model.js"

export const getBook = async (req, res) => {
    try {
        const book = await Book.find()
        // model mein data find kr rhe hai
        res.status(200).json(book)
        //data miljata hai toh data send krdenge
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error)
        // 500 status code hota hai internal server error ke liye

    }

}