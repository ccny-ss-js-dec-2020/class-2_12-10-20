/*
  You'll be creating a command line app that will perform math
  It will take a math operator argument and 2 number arguments.
  The command line should look like this: "node index.js add 3 2" will add 3 and 2 and log the results

  Using process.argv
  - Make sure there are 3 arguments after "node index.js"
    You can use the length of the process.argv array
  - If there arent, log that and dont run the logic
  - The 3rd argument must be a string that is either:
    - add
    - subtract
    - multiply
    - divide
    If not, then log that and dont run the logic
  - The 4th and 5th arguments must be numbers
    If not, then log that and dont run the logic
  - If all of the arguments are correct (i made a function for this):
    - if the 3rd argument is 'add', then add the 2 numbers together and log it
    - if the 3rd argument is 'subtract', then subtract the 2 numbers together and log it
    - if the 3rd argument is 'multiply', then multiply the 2 numbers together and log it
    - if the 3rd argument is 'divide', divide the 2 numbers together and log it
*/
