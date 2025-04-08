// Question 1: Functions, Loops, and Conditionals   
//Scenario: You are building a simple access control system for a bootcamp. Each user has a name 
//(string) and a role (either "admin", "instructor", or "student").   
//Sub-questions:   
//a. Write a function countRoles(users) that takes an array of user objects and returns an object 
//showing the count of each role.  
function countRoles(admin, instructor, student,)
{
    admin=3;
    intructor=1;
    student=5;
}
MediaDeviceInfo(); {
    for (let admin = 0; admin++; admin) 
        {
        if (admin >= 0 && admin)
        {return admin;}
            {
            for (let instructor = 0; instructor++; instructor)
                if (instructor >= 0 && instructor)
               {return instructor.role;}
        
    {
                for (let student = 0; student++; student)
                    if (student >= 0 && student)
            return student.role
                }
            }
        }
    }
function findAdmin(admin) 
{ return admin >= 0 && admin <=1;} 
(findAdmin(admin) ) = findAdmin(admin = 1);

//find admin with admin >=0 
function findAdmin(admin)
 {
        if (admin < 2) {
            return (admin = "no admin found");
        }
    }


//e. Write a function generateWelcomeMessages(users) that returns an array of messages like   
//"Welcome, [name]! You are an [role]."   
function generateWelcomeMessages(users)
{ admin, role="admin"
instructor, role = "instructor" 
students, role=students 
}

//f. (Use map.)   
//g. Discuss the advantages of using array methods (map, filter) over traditional loops in this 
//scenario.   
 //Answer g. array methods like map, filter are easier to understand, are easier to maintain, are readable
//than traditional loops.


//QUESTION 2: Recursion and Algorithmic Thinking   
//Scenario: You are working on an encryption system for a messaging app. You need to perform 
//some recursive operations on strings and numbers.   
//Sub-questions: a. Write a recursive function sumDigits(n) that takes a number and 
//returns the sum of its digits. Example: sumDigits(123) → 6.  
//Answer 2: a.
function SumDigits(n) {
    a=0;
    b=0;
    c=0;
}(n); 
{
   n= Math.floor( a+b+c);
}
return n;

// a. Write a recursive function power(base, exponent) that calculates base^exponent. 
//Example: power(2, 3)  → 8. 
function power(base, exponent) {
   base=0;
   exponent=0; }
   {
       power (base^exponent) 

   } (power);


   //  b. write a recursive function reverseWords(sentence) that reverses the order of words in a string. 
   // Example: "Hello world" → "world Hello".   

   function reverseWords(sentence) {
sentence= HelloWorld(sentence);
reverseWords(Worlhello);
   }
return reverseWords; 

// c. Explain: When is recursion less efficient than iteration? Provide an example where 
//iteration would be a better choice (such as in cases with large datasets or deep 
   //recursion). 
   
   


//d. Convert the sumDigits(n) function to an iterative version. Compare the performance of 
//both the recursive and iterative approaches when handling large numbers.  


//Question 3: Advanced Array Operations and Performance Considerations   
//Scenario: You are optimizing a bootcamp platform’s leaderboard system. You have an array of student 
//scores and need to manipulate and analyze the data efficiently.   
//Sub-questions:   
//a. Write a function findTopScorers(students, threshold) that returns an array of names of students who 
//scored above the given threshold. (Use filter.)   
function findTopScorers(students, threshold) {}

//b. Write a function sortStudentsByScore(students) that returns a new array of students sorted in 
//descending order based on their scores. (Use sort.)  

function sortStudent(students)
 {
    names = students.sort
    Scores = students.map(function (sortStudentsByScore) 
    {return sortStudentsByScore (sortStudent,);});
}

//c. Write a function removeDuplicates(arr) that removes duplicate numbers from an array without using 
//the Set object.   
function removeDuplicates(arr) {
    arr.forEach(function ( student) { return student.removeDuplicates(); });}

//d. Write a function getMedianScore(scores) that calculates the median score of an array of numbers.  
function getMedianScore(scores) {
    score =score.score(scores);
    arr = scores.map (function (score) 
    {return score.score(scores);});

}

//e. Discuss how sorting affects performance and the time complexity of different sorting algorithms.   
//answer: sorting is an easy way to make things not too complicated through sort algorithms. 
//is a way of creating a system that help a user to sort things in the way he/she wants.  


//Question 4: Library Management System   
//You are developing a system for managing books in a library. Each book has a title (string), 
//author (string), and publication year (number).   

//a. Write a function groupBooksByAuthor(books) that takes an array of book objects and 
//returns an object where keys are authors and values are arrays of books by that author. 
function groupBooksByAuthor(books) {
    books.title
    books.author 

}
//b. Write a function findBooksPublishedAfter(books, year) that returns an array of book 
//titles published after the given year. (Use filter.)   

function findBooksPublishedAfter(books, year) {
    books.title = year.tittle(bookstitle);

    
}
//c. Write a function generateBookSummaries(books) that returns an array of strings, where 
//each string is a summary of a book in the format: "[Title] by [Author] ([Publication   
//Year])". (Use map.)   
function generateBookSummaries(books) {
    title = bookstitle; author = books.author; publicationyear = books.publicationyear;  
{ }
}

//d. Write a function sortByPublicationYear(books) that sorts the books by publication year, 
//oldest to newest. (Use sort.)  
function sortByPublicationYear(books) {
    oldest = books.sortByPublicationYear
    newest = books.sortByPublicationYear 
    year = books.year 
    if (oldest.publicatioyear > newest.publicatioyear)
         { return oldest.publicatioyear}

}