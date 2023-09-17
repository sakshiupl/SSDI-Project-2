'use strict';
function TemplateProcessor(template) {
    this.template = template;
}

TemplateProcessor.prototype.fillIn = function (dictionaryData) {
    const templateString = this.template;
    const placeholderRegex = /{{(.*?)}}/g;
    
    return templateString.replace(placeholderRegex, function (match, property) {
    if (Object.prototype.hasOwnProperty.call(dictionaryData, property)) {
      return dictionaryData[property];
    } else {
      return " ";
    }
  });
};

