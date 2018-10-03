var path = require('path');

exports.getHome = function(req, res) {
 
    // if logged out
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
};
