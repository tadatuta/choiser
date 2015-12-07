module.exports = function(bh) {
    bh.match('price', function (ctx) {
        ctx.content([
            {
                elem: 'sum',
                content: ctx.json().sum
            },
            {
                elem: 'currency',
                content: ctx.json().currency || 'руб'
            }
        ])
    });
    bh.match('price__sum', function (ctx) {
        ctx.tag('span');
    });
    bh.match('price__currency', function (ctx) {
        ctx.tag('span');
    });
};

