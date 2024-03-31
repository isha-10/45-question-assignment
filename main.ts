
//lower case
 let  personName1 : string = "isha";
  console.log("lowercase", personName1 . toLowerCase())


//upper case
let personName2 : string= "isha" ;
 console.log("uppercase", personName2 . toLocaleUpperCase());


//title case
let personName3 : string ="isha";
console.log("titlecase",personName3 . replace (/\b\w/g , c=> c . toUpperCase()));