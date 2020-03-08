const rootTranslations = require('./generator/rootTranslations/rootTranslations');
const endingCreator = require('./generator/endingCreator');

let languageCreator = () => {
    let ending = new endingCreator();
    let language = []

    for (let i = 0; i < rootTranslations.length; i++) {
        language = [...language, []]
        language[i] = [...language[i], rootTranslations[i][0]];
        language[i] = [...language[i], rootTranslations[i][Math.floor(Math.random() * (rootTranslations[i].length - 1)) + 1] + ending.ends.endNoun];
    }

    console.log(rootTranslations);

    return language;
};

module.exports = languageCreator;