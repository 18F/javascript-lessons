#Functional Programming with Javascript


Remember how Jack's mother asked him to sell their 
cow to get money to buy food, but he traded his cow for some magic beans, which
turned out to be a pretty good deal?

I can't really teach you advanced javascript, because I don't know it.

But I can teach you something far more important---the Deep Magic 
for the Dawn of Time---**functional programming**.

This is my feeble attempt to teach you the deepest magic I know.

You may find this [reference](http://eloquentjavascript.net/2nd_edition/preview/05_higher_order.html) helpful.

##Preparation

Install [node](http://nodejs.org)

npm install node
npm install -g mocha


##Summary of Lessons

###Fold

One of the greatest contributions of the functional programming community
to *all* programming is one of the simplest.  Google made it famous 
in the form of *map reduce*.

The first exercise is to write [fold](http://en.wikipedia.org/wiki/Fold_(higher-order_function)).

###Map

**Map** is in a way simpler than **fold**.  Map is a function which takes an arbitrary unary 
function and applies it to every element of an array.

###Accumulation

Purely functional programming is very beatiful, but sometimes it requires an extension of parameters and results
in order to have a place to puth things.  Write a reverse using an accumulating parameter.
Use an accumulator with fold to find the longest string in a list of strings without every 
having to compute the length of a string twice.

###Compose

Write the function **compose** which takes to functions and composes them together.
*compose(f,g)* returns a function a unary function that applies *g* to a function and then applies *f*.

###TenExamplesOfFold

Write ten realistic and valuable examples of *fold*.  You may use *map* in these examples.

###LeftVsRight

Find a realistic example that proves that foldl is not the same as foldr.

###ParseASentence

Write a functiont that converts a sentence to an array of tokens, where the words are tokens, and simple punctuation marks like commmas and periods are also tokens.


###FunLanguageProcessing.

Parse and reknit sentences.

Write a function name *hemingway* that takes a sentence which as compound and returns 
two sentences.  Write a function *jackson* that takes two simple sentences and returns a compound 
sentence.  Use fold to extend these functions to paragraphs.

Write a function called *confusticate* which take a sentence and replaces words in with longer synonyms.



