//dissociate routes from index.js archive

//importing
const router = require('express').Router()
const Post = require('../models/Post')


//routes 
//read Posts
router.get('/', async (req, res) => {
   try {
        const posts = await Post.find()
        if(posts.length > 0) {
            res.status(200).json(posts)
        }
        else {
            res.status(404).json({msg: 'No posts found'})
        }
        
   }catch (error) {
        res.status(500).json({error: error})
   }
})
//create new "Post" 
router.post('/', async (req, res) => {
    //req.body  {title:String,description:String}
    const {title,description} = req.body

    if(!title || !description){
        res.status(422).json({msg: 'Missing title or description'})
    }
    else{
        //create post 
        const post = {
            title,
            description
        }
        try{
            await Post.create(post)
            res.status(201).json({msg:"Post saved",title:post.title,description:post.description})

        }catch(error){
            res.status(500).json({error: error})
        }
    }

})
//update post
router.patch('/:id', async (req, res)=>{
    const id = req.params.id
    const {title,description} = req.body

    const post = {
        title,
        description
    }

    try {
        const updated =await Post.updateOne({_id:id},post)

        if(updated.matchedCount===0){
            res.status(404).json({msg: 'Post not found'})
            return
        }

        res.status(200).json({msg:"post updated successfully",title:post.title,description:post.description})
    } catch (error) {
        res.status(500).json({error: error})
    }

})

//delete post
router.delete('/:id', async (req, res)=>{
    const id = req.params.id
    const post = await Post.findOne({_id:id})

    if(!post){
        res.status(404).json({msg: 'No post found'})
        return
    }
    try {
        
        await Post.deleteOne({_id:id})
        res.status(200).json({msg: 'Post deleted'})

    } catch (error) {
        res.status(500).json({error: error})
    }
})

//not found
router.get('*', (req, res) => {
    res.status(404).json({msg: 'No routes found.'})
})

module.exports = router