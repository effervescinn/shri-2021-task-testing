module.exports = {
    baseUrl: 'https://shri-homework.usr.yandex-academy.ru',
    gridUrl: 'http://localhost:4444/wd/hub',

    browsers: {
        chrome: {
            desiredCapabilities: {
                browserName: 'chrome'
            },
            testsPerSession: 1,
        }
    },
    plugins: {
        'html-reporter/hermione': {
            path: 'hermione-html-reporter',
        },
        'hermione-selenium-standalone-runner': true
    },
    sets: {
        desktop: {
            files: 'test/hermione/*.hermione.js',
        },
    },
}