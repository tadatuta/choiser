module.exports = function(bh) {
    bh.match('choiser-header', function (ctx) {
        ctx.tag('h2');
    });
};
