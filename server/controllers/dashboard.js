var path = require('path');

exports.getHome = function(req, res) {
 
    // for actual admin. for editing
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
};

exports.getTheme = function(req, res) {
 
    // for reference of theme core ui
    res.sendFile(path.join(__dirname, '../coreui/dist', 'index.html'));
};
