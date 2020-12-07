var chalk=require('chalk')
var readLineSync=require('readline-sync');
var score=0;
var userName=readLineSync.question(chalk.yellow("What is your name ? "));
console.log("------------------------------");
console.log(chalk.blue("Hey,"+chalk.yellow.bold.underline(userName.toUpperCase())+"! Welcome."));
console.log(chalk.magenta("Let's get to know how much you have learned in our first Week of NeogCamp")); 
var userIsReadyOrNot=readLineSync.question(chalk.red("Have you Gone through LevelZero ? ")); 

//Now,We will have a function to check whether the user have entered right answer or not with a function named play

if(userIsReadyOrNot.toLowerCase()==="yes")
{
	console.log("------------------------------");
	console.log(chalk.magenta("~~~~~ lets get started! ~~~~~"));
	console.log("------------------------------");
	function play(question,answer)
	{
		var userAnswer=readLineSync.question(question);
		if(userAnswer.toUpperCase()==answer.toUpperCase())
		{
			console.log(chalk.cyan("-->You have entered : "+userAnswer.toUpperCase()));
			console.log(chalk.blue("-->The correct answer is "+answer.toUpperCase()));
			console.log(chalk.green("-->You are Right!"));
			score=score+1;
			console.log(chalk.yellow("-->Your Score is : "+score));
			console.log("------------------------------");
		}
		else
		{
			console.log(chalk.cyan("-->You have entered : "+userAnswer.toUpperCase()));
			console.log(chalk.blue("-->The correct answer is "+answer.toUpperCase()));
			console.log(chalk.white("-->You are wrong!"));
			console.log(chalk.yellow("-->Your Score is : "+score));
			console.log("------------------------------");
		}
	}


 //now lets have the array of objects for the questions that we are going to shoot.

	var arrayOfObjects=[{
		question:chalk.red("1. Who is our mentor in NEOGCAMP ? "),
		answer:"Tanay"
		},{
		question:chalk.red("2. Where the sessions are held ? "),
		answer:"Youtube"
		},{
		question:chalk.red("3. How many apps are we going to make in levelZero ? "),
		answer:"6"
		},{
		question:chalk.red("4. In Which programming language are we going to code ? "),
		answer:"JavaScript"
		},{
		question:chalk.red("5. Which online IDE are using to run our code? "),
		answer:"repl.it"
		},{
		question:chalk.red("6. what is the full form of NPM ? "),
		answer:"Node Package Manager"
		},{
		question:chalk.red("7. which package is required to read the user input ? "),
		answer:"readline-sync"
		},{
		question:chalk.red("8. what is a variable ? "),
		answer:"placeholder"
		},{
		question:chalk.red("9. Which keyWord is used to declare variable in javascript ? "),
		answer:"var"
		},{
		question:chalk.red("10. Which function is used to output the data in javascript ? "),
		answer:"console.log()"
		},{
		question:chalk.red("11. which operator is used for concatinating two strings ? "),
		answer:"+"
		},{
		question:chalk.red("12. Which assignment operator is used to compare two strings ? ") ,
		answer:"=="
		},{
		question:chalk.red("13. Branching works based on the given _____ ? "),
		answer:"condition"
		},{
		question:chalk.red(("14. What is the main Advantage of Functions ? ")),
		answer:"reusability"
		},{
		question:chalk.red("15. Which looping statement is used for executing our code multiple times ? "),
		answer:"for"
		},{
		question:chalk.red("16. How many Types of brackets do we have in general ? "),
		answer:"3"
		},{
		question:chalk.red("17. which data strucutre is used to access the sequence of elements by its index number ? "),
		answer:"array"
		},{
		question:chalk.red("18. An object is the collection of _____ in javascript ? "),
		answer:"key and value"
		},{
		question:chalk.red("19. which package is used to color our node.js console ? "),
		answer:"chalk"
		}
	]

	//now we are going to loop through all the objects using the for-loop

	for(var i=0;i<arrayOfObjects.length;i++)
	{
		var currentQuestion=arrayOfObjects[i];
		play(currentQuestion.question,currentQuestion.answer);
	}
	
	if(score==0) 
	{
		console.log("Please go through the session again. ");
	}
	else if(score<=10)
	{
		console.log("That's Good!. Give a glimpse at your notes");
		console.log("Try once again.")
	}
	else
	{
		console.log(chalk.yellow("Yay ! That's great ! You have scored : "+score));
 	}
}
else
{
	console.log("-------------------------------------------");
	console.log(chalk.yellow("If your Answer is NO ,then go and start learning now!! Hope you'll get back! "));
	console.log(chalk.red("Happy Learning!!!!!"));
}