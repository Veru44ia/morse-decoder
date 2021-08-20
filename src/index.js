const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
let array = expr.match(/.{10}/g);
let arrayOfDotsAndDashes = array.map(x => x.replace(/10/g, '.').replace(/11/g, '-').replace(/00/g, '').replace(/\*/g, ''));
let arrayMorseDecoder = arrayOfDotsAndDashes.map(function(x) {
  if (x === '') { 
    return ' '; 
  } else {
    return x = MORSE_TABLE[x];
  }
});
  return arrayMorseDecoder.join('');
};

module.exports = {
    decode
}