
nameOfTheStudentArray = [];

function submit(){

var displayStudentArray = [];

 for (var j = 1; j<= 4; j++){

var nameOfTheStudent = document.getElementById("nameOfTheStudent"+j).value;

nameOfTheStudentArray.push(nameOfTheStudent);
 }

 var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;

for (var l = 0; k<lenghtOfNameOfStudentsArray; k++){

    displayStudentArray.push("<h4>NAME -"+ nameOfTheStudentArray[l] + "</h4>");

}

document.getElementById("displayNameWithCommas").innerHTML= displayStudentArray;

var removeCommas = displayStudentArray.join(" ");
document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;

document.getElementById("submitButton").style.display = "none"; 
document.getElementById("sortButton").style.display = "inline-block";

}

function sorting (){

nameOfTheStudentArray.sort();

var displayStudentArraySorting = [];

var lenghtOfNameOfStudentsArray = nameOfTheStudentArray.length;

for (var k = 0; k<lenghtOfNameOfStudentsArray; k++){

    displayStudentArraySorting.push("<h4>NAME -"+ nameOfTheStudentArray[k] + "</h4>");
    
}
var removeCommas = displayStudentArray.join(" ");

document.getElementById("displayNameWithoutCommas").innerHTML = removeCommas;




}