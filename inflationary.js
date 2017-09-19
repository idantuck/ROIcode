var parseToInflationary = function(phrase) {
  var variants = {
    '[Oo]ne|[Ww]on': 'two',
    '[Tt]o|[Tt]wo': 'three',
    '[Tt]hree': 'four',
    '[Ff](our|ore|or)': 'five',
    '[Ff]ive': 'six',
    '[Ss]ix': 'seven',
    '[Ss]even': 'eight',
    '[Ee]ight|[Aa]te': 'nine',
    '[Nn](ine|ign)': 'ten',
    '[Tt]en': 'eleven'
  }

  for (var val in variants) {
    var regx = new RegExp(val, 'gi');
    phrase = phrase.replace(regx, function(str) {
      if(str.charAt(0) == str.charAt(0).toUpperCase()) {
        return variants[val].charAt(0).toUpperCase() + variants[val].substr(1);
      }
      return variants[val];
    });
  }

  return phrase;
}
