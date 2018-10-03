
exports.getHome = function(req, res) {
    // if logged in
    // res.send('Loading...');
    
    // if logged out
    res.sendFile(path.join(__dirname, '../views', 'index.html'));
};
