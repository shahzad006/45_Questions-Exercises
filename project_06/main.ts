/*


6. Stripping Names:

Store a person’s name, and include some whitespace characters at the beginning and end of
the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name
once, so the whitespace around the name is displayed. Then print the name after striping the white
spaces.





*/




let personName :string = "        M Shahzad           ";
console.log(personName.trim());



//           \t 
let personName1 :string = "\tM Shahzad";
console.log(personName1);



//     \n
let personName2 :string = "M \nShahzad";
console.log(personName2);