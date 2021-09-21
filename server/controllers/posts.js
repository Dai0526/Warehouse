import post_message from "../models/postMessage.js";

// all hanlders for posts routes - code logic here
export const get_posts = async (req, res) => {
    try{
        const posts = await post_message.find();
        res.status(200).json(posts);
    }catch(error){
        res.status(404).json({message: error.message})
    }
};

export const create_post = async (req, res) => {
    const post = req.body;
    const new_post = new post_message(post);
    try{
        await new_post.save();
        res.status(201).json(new_post);
    }catch(error){
        res.status(409).json({message: error.message});
    }
};