const Post = require('./models/index.js')

module.exports = function(app){

  app.post('/posts',function(req,res){
    const post = new Post(req.body)
    // post.title = req.body.title;
    // post.content = req.body.content;
    post.save()
    res.json(req.body)
  })

  app.get('/posts',function(req,res){
    Post.find().exec(function(err, title) {
      if(err) return console.log(err);
      res.json({posts:title})
    });
  })

  app.get('/posts/:id',function(req,res){
    Post.findById(req.params.id).exec(function(err,data){
      if(err) return console.log(err);
      res.json({content:data})
    })

  })
  app.put('/posts/:id',function(req,res){
    res.send('update a post')
  })
  app.delete('/posts/:id',function(req,res){
    res.send('delete a post')
  })
}
