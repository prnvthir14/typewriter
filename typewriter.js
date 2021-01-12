const sentence = "hello there from lighthouse labs where is the time going, it is already \n";
let i = 1;
for (const char of sentence) {

  setTimeout( ()=>{
    
    process.stdout.write(char)
  
  }, i*1000);

  i++;

}
//a 1s time out is created for each character in the code above

// // // // function doSetTimeout(i) {
// // // //   setTimeout(function() { process.stdout.write(char); }, 100);
// // // // }

// // // // for (var i = 0; i < (process.stdout.write(char).length); ++i)
// // // //   doSetTimeout(i);

// for(var i = 1; i < 6; i++) {
//   setTimeout(function() {
//      console.log(i);
//   },i*1000);
// }
// console.log('The loop is done!');