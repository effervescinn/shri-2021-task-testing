const { delay } = require("rxjs");
const fs = require('fs');
const { spawn } = require("child_process");

module.exports = (hermione) => {
    let selenium;
    console.log('starting module...');

    hermione.on(hermione.events.RUNNER_START, async () => {
        console.log('test');
        const file = fs.openSync('selenium.log', 'w');

        selenium = spawn('selenium-standalone', ['start'], {
            stdio: ['ignore', file, file],
            shell: true,
        });

        await delay(2000);
    });

    hermione.on(hermione.events.RUNNER_END, () => {
        return new Promise((resolve) => {
            selenium.on('exit', () => resolve());

            selenium.kill();
        })
    });
}