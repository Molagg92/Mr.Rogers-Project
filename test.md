
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


