function processString(input_str){
    let output_str = '';
    //console.log(input_str.length);

    for (let i = 0; i < input_str.length; i++) {
        let letter = input_str[i];
        
        if (!isNaN(letter)) { // If the letter is a number
            output_str += letter + letter; // Add it twice to replicate bug in python code 
        } else if (letter === letter.toUpperCase()) {
            output_str += letter.toLowerCase();
        } else {
            output_str += letter.toUpperCase();
        }
    }
    return output_str;
}
function test(input_str){// checks if the number in the string is printed twice
    let new_String = processString(input_str);

    for(let i=0; i<input_str.length;i++){
        let char = input_str[i];
        
        if(!isNaN(char)){
            if(new_String[i+1] === char){
                return true;
            }
        }
    }
    return false;
}

function Delta_debug(input_str){
    let length =input_str.length;
    while(length>=1){
        let split_length= input_str.length/2;
        let one = input_str.substring(0,split_length);
        let two = input_str.substring(split_length);

        if(test(one)==true){
            input_str = one;
        }

        else if(test(two)){
            input_str = two;
        }

        length= length/2;

    }

    return input_str

}

let input= ['abcdefG1','CCDDEExy', '1234567b', '8665']

for(let i of input){
    console.log(Delta_debug(i));
}

//console.log(Delta_debug('8665'));

// //Log of 5b test Cases
// 1
// CCDDEExy
// 1
// 8
