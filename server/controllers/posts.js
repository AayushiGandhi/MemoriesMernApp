import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
    try{
        const postMessages = await PostMessage.find()
        res.status(200).json(postMessages)
    }
    catch (error) {
        res.status(400).json({message: error.message})
    }
};

export const createPosts = (req, res) => {
    res.send('post created')
};