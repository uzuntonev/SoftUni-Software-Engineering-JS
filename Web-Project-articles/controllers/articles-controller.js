module.exports = {
    getCreate: function (req, res) {
        res.render('articles/create');
    },
    postCreate: function  (req, res) {
        console.log(req.body);
    },
    getArticels: function (req, res) {
        res.render('articles/index');
    },
    getIndex: function  (req, res) {
        res.render('home/index');
    }
}