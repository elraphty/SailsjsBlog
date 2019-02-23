/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  list: async function(req, res) {
    // res.view('list');
    let articles = await Articles.find({});
    console.log('articles', articles);
    //   if(err) {
    //     resizeBy.send(500, {error: 'Database error'});
    //   }
    res.view('pages/list', {articles})

  },
  add: function(req, res) {
    res.view('pages/add');
  },
  create: function(req, res) {
    let title =  req.body.title;
    let body = req.body.body;
    
    Articles.create({title, body}).exec(function(err, success) {
      if(err) {
        res.send(500, {error: 'Database error'});
      }
      res.redirect('/articles/list');
    });
  }
};

