var log = {
    info: function (info) {
        console.log('INFO: ' + info);
    },
    warning: function (warning) {
        console.log('WARNING: ' + warning);
    },
    error: function (error) {
        console.log('ERROR: ' + error);
    },

};

// module.exports = log;



module.exports = function (msg) {
    console.log(msg);
};