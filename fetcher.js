/*
Implement a small command line node app called fetcher.js
 which should take a URL as a command-line argument as well as 
 a local file path and download the resource to the specified path.

Upon completion, it should print out a message like Downloaded and saved 1235 bytes to ./index.html.
*/

const request = require('request');
const fs = require('fs');
const readline = require('readline');

//take the arguments from the command line without the first two words, and put them into an array 9each word an element)
let URLstring = process.argv.slice(2);
//console.log(URLstring);
//console.log(URLstring[0]);

let req = request('https://' + URLstring[0] , (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  //console.log('body:', body); // Print the HTML for the Google homepage.
  
  fs.writeFile(URLstring[1], body, (error) => {
    //console.log("In readFile's Callback: it has the data.");
    
    if (error) throw err; 
      console.log(`Downloaded and saved to ${URLstring[1]}`);
      //functionToRunWhenThingsAreDone();

    });
  });


  //FOR Edge Cases
  //let myFile = new File("/data/logs/today.log");
  //if (URLstring[1].exist)
  // if (URLstring[1].exist){
  //   console.log("file exist")
  //   let decision;
  //   const rl = readline.createInterface({
  //     input: process.stdin,
  //     output: process.stdout
  //   });

  //   rl.question('The file already exist. To overwrite it press Y. ', (answer) => {
  //     let decision = answer;
  //     rl.close();
  //   });
  
  //   if(!myLog.exists() || (decision === 'Y')){
  //   //write('The file does not exist');
    
  //     fs.writeFile(URLstring[1], body, (error) => {
  //     //console.log("In readFile's Callback: it has the data.");
      
  //     if (error) throw err; 
  //       console.log(`Downloaded and saved to ${URLstring[1]}`);
  //       //functionToRunWhenThingsAreDone();
      
  //     });

  //   }
  // }
  
