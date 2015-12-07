modules.define('choiser', ['BH', 'i-bem__dom'], function(provide, bh, BEMDOM){

provide(BEMDOM.decl(this.name,
    {
        onSetMod: {
            js: {
                'inited': function () {
                    this.render();
                }
            }
        },
        /* методы экземпляра */
        render: function () {
            this.elem('chois')
                .prepend(bh.apply(
                    [
                        {
                            block: 'choiser-header',
                            content: 'Выбор'
                        },
                        {
                            block: 'choiser-list',
                            content: [
                                {
                                    elem: 'item',
                                    content: [
                                        {
                                            block: 'choiser-item',
                                            tag: 'a',
                                            mods: {
                                                position: 'icon'
                                            },
                                            text: 'Коммерческие',
                                            price: '3000'
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                ))
        }
    },
    {
        /* статические методы */
    }
));

});
