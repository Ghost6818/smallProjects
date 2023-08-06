const { links } = require("express/lib/response");

const check = (req) => {
    Math.random();
    const word = req.body.word.toLowerCase();
    const gameSession = req.body.gameSession ? req.body.gameSession : Math.random();
    const password = ['temat','rzeka','napar','słowo','motyl','teatr','robot','mucha'];

    let res = false;


    if (word === password[gameSession]) {
        res = true;
    }

    return { success: password.includes(word), gameSession: 1};
}

module.exports = {
	check: check
};