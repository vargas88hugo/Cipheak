
const rootEndCreator(endings, rootTranslations, keyEnd) {
  let language = []
  
  for (let i = 0; i < rootTranslations.length; i++) {
    language = [...language, []]
    language[i] = [...language[i], rootTranslations[i][0]];
    language[i] = [...language[i], rootTranslations[i][Math.floor(Math.random() * (rootTranslations[i].length - 1)) + 1] + endings.ends[keyEnd]];
  }

  return languange;
}