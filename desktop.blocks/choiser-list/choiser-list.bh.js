module.exports = function(bh) {
    bh.match('choiser-list', function (ctx) {
        ctx.tag('ul');
    });
    bh.match('choiser-list__item', function (ctx) {
        ctx.tag('li');
    });
};
