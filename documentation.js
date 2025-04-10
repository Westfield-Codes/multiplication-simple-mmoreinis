/* MULTIPLICATION TABLES
 * FLOWCHART:https://lucid.app/lucidchart/3e0bd150-cafd-4a4b-a703-a1919eafbd7a/edit?page=GeKRoDTH-sii#
 */


/* Global Variables 
 * Set default values for low and high factors
 * Initialize mistakes array
 */


/* Function main() Refactor: THIS REPLACES askQuestions()
 * Calls setup to change default values
 * Calls askQuestion with question number as argument
 * Keeps score based on returned values from askQuestion
 * Calls showStats, which calls showTable 
 * @param: none
 * @return: none
 */


/* Function setUp()
 * Sets default value for number of questions
 * Asks if user wants to keep defaults for low, high, questions. 
 * If not default, prompts user to provide these values
 * Returns questions to main
 * @param: none
 * @return: {integer} questions
 */


/* Function changeVar(variable) 
 * Parameter variable is the string for the variable name to change
 * Asks user which value to change variable to
 * Parses value as integer
 * Returns value
 * @param: variable
 * @return: {integer} value 
 */


/* Function askQuestion(question) 
 * Asks a multiplication question: 2 factors between low and high ranges
 * Provides feedback (correct?), returns true if correct, false if not 
 * Adds missed factors to mistakes array (global).
 * @param: {integer} question 
 * @return: boolean value 
 */

/* Function showStats()
 * Provides feedback on total correct out of total asked. 
 * If perfect score, displays "Perfection Badge"
 * If not perfect, displays how many right out of questions
 * Then displays mistake factors in pairs to inform story. 
 * While user wants to study tables, calls showTable for a factor.
 * Prompt changes from "any tables" to "more tables" 
 * @param: score, questions
 * @return: none
 */


/* Function showTable(factor)
 * Display the table for the factor passed as a parameter
 * Builds table line by line with a loop, then shows table * One line for each factor value. low to high 
 * @param: factor
 * @return: none
 */


/* Function showErrors()
 * Provides feedback on errors by showing pairs of factors.
 * statsAnalysis() shows most frequent factor in errors.  
 * @param: errors
 * @return: none
 */

