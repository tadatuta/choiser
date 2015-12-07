module.exports = function(bh) {
    bh.match('choiser-item', function (ctx) {
        var json,
        content;
       json = ctx.json();
       content = [
            {
                elem: 'icon',
            },
            {
                elem: 'text',
                content: json.text
            }
        ];
        if (ctx.tag() === 'a') {
            ctx.attr('href', '#');
        }
        if (json.price) {
            content.push({
                block: 'price',
                sum: json.price,
                currency: json.currency
            })
        }
        ctx.content(content);
    });
    bh.match('choiser-item__icon', function (ctx) {
        ctx.tag('i');
    });
    bh.match('choiser-item__text', function (ctx) {
        ctx.tag('span');
    });
};

