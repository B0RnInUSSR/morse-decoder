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
    let character = '';
    let sliceCharacter = '';
    let result = '';

    for (let i = 0; i < expr.length; i = i + 10) {
        let resultInDot = '';
        character = expr.slice(i, i+10);
       
        branch: { 
            for (let j = 0; j < character.length; j++) {
            
            if (character[j] === '1') {
                sliceCharacter = character.slice(j);
                break branch;
                }
            }        
        }
        if (character === '**********') {
            result = result + ' ';
            sliceCharacter='00';
        }

        for (let k = 0; k < sliceCharacter.length; k = k + 2) {
            let dotResult = '';

            if (sliceCharacter.slice(k, k+2) === '10') {
                dotResult = '.';                    
            }
            else if (sliceCharacter.slice(k, k+2) === '11') {
                dotResult = '-';
            }
            
            if (dotResult !== '') {
            resultInDot = resultInDot + dotResult;
            }
       
        }
        if (resultInDot !== '') { 
        result = result + MORSE_TABLE[resultInDot];
        }
    }
    return result;
}

module.exports = {
    decode
}