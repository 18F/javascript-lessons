#Beginning Lessons


This directory is for the beginning lessons.

These lessons are focused not so much on programming, but on viscerally understanding:

1. That javascript is by design a language that allows manipulation of the appearance and 
behavior of web pages,
2. Basics of creating and calling functions in javascript,
3. An introduction the power of abastraction, and
4. An introduction to reusing othe code to make API calls to demonstrate the tremondous 
leverage of API-based programming.

##Preparation

Instal [node](http://nodejs.org)

##Summary of Lessons

###IAmCool0.js

When I as a 13-year old, I was given a computer.  Very slowly I taught myself to program.
At that age, it was thrilling to have the computer print out "Rob is Cool!".  And it still 
is.  The first exercise is use javascript (with node) to have the computer write out
"YOURNAME is Cool!"

###IAmCool1.js

Now, write a program to write out your name multiple times.

###IAmCool2.html

Javacript is particularly valuable becuase it can easily be embedded inside a web page.
Your exercise its to embed "IAmCool1" in a web page, point a browser at it, and use the 
built-in development tools of your browser to see that the computer declares that you
are very cool.

###IAmCool3.html

Although recent browsers provide powerfully debugging tools, it is critical for beginners
to understand how to debug **by modifiying the code**.  The most basic way of doing this
with the "Alert" message in addition "console.log".  Alert messages are annoying because
they require the user to interact---but this is valuable, because it allows you to 
stop the program at any point you desire.

###IAmCoolWeb.html 

But using alerts gets boring.  More sophisitcated is to add "I am Cool" to the web page
directly.  Web pages are written in HTML, which has a model -- a Domain Object Model (or DOM).
Javascript provides ways to inspect and manipulate the DOM.

Your exercise is to make the header, which says "Hello, World!" to say "I am cool!"

###IAmASynonymOfCool.html

Use the BigHugeLabs restful API (Application Programming Interface) to randomly select adjectival synonyms to the word "Cool" for 
you to be.  This means usign AJAX and JSON.

Thanks to Big Huge Labs, there is an online Thesaurus that can be used for a limited number
of times per day freely:

https://words.bighugelabs.com

They provide an API that requires a key.  Your exercise is to obtain a key and write a program
that uses their API to obtain a synonym for "Cool".

Unfortunately, it is not clear that bighugelabs supports CORS --- which means that because
of the "same source origin policy", we can't do this entirely with client-side programming.

Therefore, this is a great excuse to implement our own server and our own api.

Go into the api-server directory and enter:

sudo npm install

Then start this server in a shell with "npm start".

Then we can use AJAX as demonstrated in IAmASynonymOfCool.html. The server ALSO makes and AJAX call.
So this both gets a little complicated, and demonstrated a way we can directly use work that 
someone else has done without even using their code.





