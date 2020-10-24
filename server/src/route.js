const express = require("express")
const Post = require("./post")
const router = express.Router()

router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

router.get("/posts", async (req, res) => {
	const posts = await Post.find({}).sort({createdAt: 'descending'});
	res.send(posts);
});

// router.post("/post", async (req, res) => {
//     const post = new Post({
// 		title: req.body.title,
// 		content: req.body.content,
// 	});
// 	await post.save();
// 	res.send(post);
// });

// router.patch("/posts/:id", async (req, res) => {
// 	try {
// 		const post = await Post.findOne({ _id: req.params.id });

// 		if (req.body.title) {
// 			post.title = req.body.title;
// 		}

// 		if (req.body.content) {
// 			post.content = req.body.content;
// 		}

// 		await post.save();
// 		res.send(post);
// 	} catch {
// 		res.status(404);
// 		res.send({ error: "Post doesn't exist!" });
// 	}
// })

// router.delete("/posts/:id", async (req, res) => {
// 	try {
// 		await Post.deleteOne({ _id: req.params.id });
// 		res.status(204).send();
// 	} catch {
// 		res.status(404);
// 		res.send({ error: "Post doesn't exist!" });
// 	}
// })

module.exports = router;