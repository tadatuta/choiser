({
    block: 'page',
    title: 'Hello, World!',
    styles: [
        { elem: 'css', url: 'index.min.css' }
    ],
    scripts: [
        { elem: 'js', url: 'index.min.js' }
    ],
    content: [
        {
            block: 'choiser',
            js: true,
            content: [
                {
                    elem:'select',
                    content: [
                        { block: 'choiser-backstep' }
                    ]
                },
                {
                    elem:'chois',
                    content: [
                    ]
                },
                {
                    elem:'help',
                    content: ['select']
                }
            ]
        }
    ]
});
