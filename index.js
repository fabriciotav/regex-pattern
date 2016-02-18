!function() {
  var regexPattern = { version: '0.1.0' };

  var diacritics = {
    'A': '[AaÁáÀàÃãÄäÂâ]',
    'Á': '[AaÁáÀàÃãÄäÂâ]',
    'À': '[AaÁáÀàÃãÄäÂâ]',
    'Ã': '[AaÁáÀàÃãÄäÂâ]',
    'Ä': '[AaÁáÀàÃãÄäÂâ]',
    'Â': '[AaÁáÀàÃãÄäÂâ]',
    'B': '[Bb]',
    'C': '[CcÇç]',
    'Ç': '[CcÇç]',
    'D': '[Dd]',
    'E': '[EeÉéÈèËëÊê]',
    'É': '[EeÉéÈèËëÊê]',
    'È': '[EeÉéÈèËëÊê]',
    'Ë': '[EeÉéÈèËëÊê]',
    'Ê': '[EeÉéÈèËëÊê]',
    'F': '[Ff]',
    'G': '[Gg]',
    'H': '[Hh]',
    'I': '[IiÍíÌìÏïÎî]',
    'Í': '[IiÍíÌìÏïÎî]',
    'Ì': '[IiÍíÌìÏïÎî]',
    'Ï': '[IiÍíÌìÏïÎî]',
    'Î': '[IiÍíÌìÏïÎî]',
    'J': '[Jj]',
    'K': '[Kk]',
    'L': '[Ll]',
    'M': '[Mm]',
    'N': '[NnÑñ]',
    'Ñ': '[NnÑñ]',
    'O': '[OoÓóÒòÖöÔô]',
    'Ó': '[OoÓóÒòÖöÔô]',
    'Ò': '[OoÓóÒòÖöÔô]',
    'Ö': '[OoÓóÒòÖöÔô]',
    'Ô': '[OoÓóÒòÖöÔô]',
    'P': '[Pp]',
    'Q': '[Qq]',
    'R': '[Rr]',
    'S': '[Ss]',
    'T': '[Tt]',
    'U': '[UuÚúÙùÜüÛû]',
    'Ú': '[UuÚúÙùÜüÛû]',
    'Ù': '[UuÚúÙùÜüÛû]',
    'Ü': '[UuÚúÙùÜüÛû]',
    'Û': '[UuÚúÙùÜüÛû]',
    'V': '[Vv]',
    'W': '[Ww]',
    'X': '[Xx]',
    'Y': '[Yy]',
    'Z': '[Zz]'
  };

  /**
   * Replace characters by their compositors
   * 
   * @param {string} chr
   *
   * @return {string}
   */ 
  function diacriticReplacer(chr) {
    return diacritics[chr.toUpperCase()] || chr;
  }

  /**
   * Create a regex string replacing characters with diacritic pattern
   *
   * @param {string} searchString
   * @param {boolean} wholeString
   *
   * @return {string} regex string
   */
  regexPattern.buildPattern = function(searchString, wholeString) {
    var regexp;
    var start;
    var end;

    // escape meta characters
    searchString = searchString.replace(/([|()[{.+*?^$\\])/g, "\\$1");
  
    // split into words
    var words = searchString.split(/\s+/);
  
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i].replace(/\S/g, diacriticReplacer);
    }

    if (words.length > 1) {
      (wholeString) ? regexp = words.join('\\s)(?=.*\\b') : regexp = words.join(')(?=.*');
      (wholeString) ? start = '^(?=.*\\b' : start = '(?=.*';
      (wholeString) ? end = '\\b).*$' : end = ').*';

      return start + regexp + end;
    } else {
      regexp = words.join(' ');
        
      return (wholeString) ? '^' + regexp : regexp;
    }
  };

  if (typeof define === 'function' && define.amd) {
    define(regexPattern);
  } else if (typeof module === 'object' && module.exports) {
    module.exports = regexPattern;
  } else {
    this.regexPattern = regexPattern;
  }
}();
