require('console-png').attachTo(console);

module.exports = function(imageName){
    console.png(require('fs').readFileSync(__dirname + '/' + imageName));
};