const { assert } = require('chai');

describe('github', async function() {
    it('yandex testing', async function() {
        const browser = this.browser;

        await browser.url('/');
        await browser.keys([' курс доллара к рублю', 'Enter']);

        const converter = await browser.$('.Converter-Inputs');
        await converter.waitForExist();

        await browser.assertView('plain', '.Converter-Inputs');

         
        // const isExisting = await converter.isExisting();

        // assert.ok(isExisting, 'Конвертер валют не появился')
    })
    // it('Тест, который пройдет', async function() {
    //     await this.browser.url('https://github.com/gemini-testing/hermione');
    //     await this.browser.assertView('plain', '#readme');

    //     const title = await this.browser.$('#readme h1').getText();
    //     assert.equal(title, 'Hermione');
    // });
});