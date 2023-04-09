# _{Mr.Robogers Neighborhood}_

#### By _**{Erik Z.}**_

#### _{How many Words should he try to say?}_

## Technologies Used

* _Git_
* _JavaScript_
* _HTML_
* _CSS_

## Description

_{This Here lil web app I've made will take your number input, and Mr.Robogers will try to get some words out. Place your number input with the arrow buttons in the input box, or by typing it in. Mr.Robogers will return your numbers in a stringed out forman, but numbers containing 1s are replaced with "BEEP", 2s, with "BOOP", and 3s with "Wont You be my Neighbor?}_

## Setup/Installation Requirements

* _Travel to molagg92's github repository_
* _Click the Clone button when you locate it_
* _open your Git terminal , type 'git clone' from your Desktop dirctory_
* _Open your newy cloned fodler i nyour texxt editor_
* _Click Go Live, BOOM. you are there._

_{Following these simple stemps will help you make your way to the Mr.Robogers transcriber app I've made. }_

## Known Bugs

* _The Hierarchy is written to only have 13, 23, 12 and 21 as the exaptions the the general rule of numbers with 1 = Beep, numbers with 2 = Boop and number with 3 = Won't you be my Neihbor. Otherwise works fine_


## License

_{This os free use and open source.}_

Copyright (c) _4/8/2023_ _Erik Zambrano, Molagg92
_

==================================================================================



Test:
Code:
Expected Output:

----
----


Describe: robogerTranscriber()

Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: robogerTranscriber(5);
Expected Output: [0, 1, 2, 3, 4, 5]

----

Test: "it should return user's input number 1 as the string 'Beep!' " 
Code: robogerTrasncriber(1);
Expected Output:[0, "Beep!"];

----

Test: "it should return user's input number 2 as the string 'Boop!', while inouting 1 still returns 'Beep!' "
Code:robogerTranscriber(5)
Expected Output:[0, "Beep!", "Boop!", 3, 4, 5]

----

Test: "it should return user's input number 3 as the string 'Won't you be my neighbor?' "
Code:robogerTranscriber(3)
Expected Output: [0, "Beep!", "Boop!","Won't you be my neighbor?"]

----

Test:"it should return "Boop!" when the user enters 12"
Code:robogersTranscriber(12)
Expected Output: "Boop"

----

Test: "it should return Beep when traking number 21"
Code:robogersTranscriber(21)
Expected Output:Beep!

----
The buisnes logic side works!
----


