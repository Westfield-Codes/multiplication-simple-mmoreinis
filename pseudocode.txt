/* Multiplication Quiz 
 * This program should ask five multiplication questions, displaying which question
 * is being asked, and counting the number of equations with at least one error.
 * FLOWCHART: https://lucid.app/lucidchart/5a3164fd-459f-494d-9cae-b4a6be593b13/view
 */

/* Setup */
// Define a function called main and then call it up top.
// Define a function called askFive and call it from inside main().
// Define a function called askQuestion and call it from inside askFive() as askQuestion(1);

/* main controls the program. Calling askFive() it provides feedback depending on the 
 * number wrong returned: 0 = "Perfect!" otherwise it says how many wrong. 
 * @param none
 * @return none
 */
// Call askFive() and store the returned value in 'wrong'
// If wrong = 0 alert "Perfect"
// Otherwise alert "You got [wrong] wrong."


/* STAGE 1:ASK A QUESTION */

/* askQuestion asks a multiplication question, returns 1 if incorrect
 * @param: question (integer 1-5)
 * @return: integer (0 or 1)
 */
// Create a variable named a, and set to a random integer between 3 and 9.
// Create a variable named b, and set to a random integer between 3 and 9.
// Create a variable called product, set as a * b.
// Create a variable called equation, set as the complex string a * b = ?.
// Create a variable called answer, ask user for it by prompting with equation.
// Display "Correct!" and return 0 if the answer and product match.
// Otherwise, display "Incorrect!" and return 1.

/* STAGE 1:ASK 5 QUESTIONS */

/* askFive calls askQuestion five times, counting and returning number wrong
 * @param: none
 * @return: wrong (0-5)
 */
// Create a variable wrong, set to 0
// Write a for loop with question as the index, values 1 to 5
// Call askQuestion in the loop, with question as argument
// Add the returned value of askQuestion to wrong each time you call it (same line)
// return wrong after loop finishes
