function testCaseGen(){
    //set the length of the array to a random number between 1 and 150
    let length = Math.floor(Math.random()*150)+1;
    let test_arr = [];//declare empty array to house random value
    for(let i=0;i<length;i++){
        //adds a random a value to the array of random length at every iteration of the for loop
        test_arr.push(Math.floor(Math.random()*151));
    }
    return test_arr;
}
function Selection_Sort (arr){
   let length = arr.length;
     
    for(let i=0;i<length-1;i++){ //iterate to n-1 because at that point the array is sorted
        let smallest_index = i;//Assume the first value is the smallest

        for(let j=i+1; j<length;j++){// iterate from second element to the end to find the smallest 
            if(arr[j]<arr[smallest_index]){//if value at j is smaller than first 
                smallest_index = j// set smallest index to j 
            }
        }
        //Using a temp value swap number at index j and number at first position or index i
        if(smallest_index!== i){
            let temp = arr[i];
            arr[i] = arr[smallest_index];
            arr[smallest_index] = temp
        }
    }
    return arr;

}


function check(){
    let new_arr = testCaseGen();
    let sorted_arr = Selection_Sort(new_arr);
    let sys_sorted_arr = new_arr.sort((a,b)=>a-b);//array sorted with javascript built in sort function instead of Selection sort

    console.log('Selection Sort sorted array : ',sorted_arr);
    console.log('Same array sorted by built js sort function: ',sys_sorted_arr);

    if(sys_sorted_arr == sorted_arr){
        console.log("TRUE PASSED");
    }
    else{
        console.log('FAlSE FAILED');
    
}
}

check();



 //2B Explanation
// I wrote a random test case generator to produce arrays of random various sizes. Following the  generator is an selection sort program that the sorts the produced array from smallest to lagest value and returns the sorted array. I went with selection sort because i feel it is the easiest to implement. I further implemented a method that sorts a randomly generated array using javascripts built in sorting function and my selectionn sort, comapring them to see if the Selection sort output is correct 

//2C code is commented 

//2D Download node.js from nodejs.dev
//open terminal and type in node test.js

//2E Logs generated form print statements capturing both input array, output array for each run of the program.

// Original Array: [
//     103, 46, 133,  24,  97,   8, 93,  16,  72,  40,
//     118, 64,  52,  46,  74,  34, 30, 118, 105, 103,
//     110,  4,  77, 150, 135, 117, 10,  38,  19, 111,
//      85, 53, 141,  34,  15,   9, 45,  48,  92, 105,
//     130, 11,  26, 108, 119
//   ]
//   Sorted Array: [
//       4,   8,   9,  10,  11,  15,  16,  19,  24,  26,
//      30,  34,  34,  38,  40,  45,  46,  46,  48,  52,
//      53,  64,  72,  74,  77,  85,  92,  93,  97, 103,
//     103, 105, 105, 108, 110, 111, 117, 118, 118, 119,
//     130, 133, 135, 141, 150
//   ]
   
// 2F

// Selection Sort sorted array :  [
//     6,  11,  14,  17, 19, 19, 20, 20,  21,
//    22,  24,  41,  48, 48, 48, 54, 61,  69,
//    70,  76,  77,  78, 81, 83, 94, 97, 108,
//   123, 126, 139, 146
// ]
// Same array sorted by built js sort function:  [
//     6,  11,  14,  17, 19, 19, 20, 20,  21,
//    22,  24,  41,  48, 48, 48, 54, 61,  69,
//    70,  76,  77,  78, 81, 83, 94, 97, 108,
//   123, 126, 139, 146
// ]
// TRUE PASSED


//2PART B

// CFG for all possible test cases
/* <array>       ::= [] | [<array-with-elements>]
<array-with-elements> ::= <number> | <number>, <array-with-elements>
<number>      ::= 0 | 1 | ... | 150 */