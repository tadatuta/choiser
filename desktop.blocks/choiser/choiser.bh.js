module.exports = function(bh) {
    bh.match('choiser', function (ctx) {
        ctx.tag('article');
        ctx.content([
            {
                elem:'select',
                content: ['select']
            },
            {
                elem:'chois',
                content: [
                    {
                        block: 'choiser-list',
                        content: [
                            {elem: 'item'}
                        ]
                    }
                ]
            },
            {
                elem:'help',
                content: ['select']
            }
        ]);
    });
};
