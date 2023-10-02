// Define the introduction function
function introduction(name) {
  return `Hi, my name is ${name}.`;
}

// Define the introductionWithLanguage function
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

// Define the introductionWithLanguageOptional function
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}

module.exports = {
  introduction,
  introductionWithLanguage,
  introductionWithLanguageOptional,
};
