module.exports = function(bh) {
    bh.match('choiser-backstep', function (ctx) {
        ctx.content({
            elem: 'link',
            tag: 'a',
            attrs: {href: '#'},
            content: 'Назад'
        });
    });
};

