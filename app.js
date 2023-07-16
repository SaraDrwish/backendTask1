
///////////////////////////////////////// start task 1  /////////////////////////////////////////////////////////


// Task 1 :

const fs = require("fs")
const validator = require("validator")
const yargs  = require("yargs")

//1) create object person ( fname = ahmed , lname = hossam , age = 20 , city = alex )

const person = {
    fname :"sara",
    lname: "adel",
    age : 26,
    city : "cairo"
}

// 2) change obj to Json

const personJson = JSON.stringify(person)
console.log(personJson);

// 3) store in file

fs.writeFileSync("data1.json", "personJson");

// 4) read file (json)

 const read = fs.readFileSync("data1.json").toString();
 console.log(read)

// 5) Convert to obj

const personObj = JSON.parse(personJson)
console.log(personObj);

// 6) Update data to ( adel ahmed , 40 , cairo)
 

const personupdat = yargs.command({

    command: "update",
    describe: "upppp",
    builder: {
        fname: {
            describe: "fname",
            demondOptions: true,
            type : "string",
        },
        lname: {
            describe: "lname",
            demondOptions: true,
            type : "string",
        },
        age: {
            describe: "age",
            demondOptions: true,
            type : "intger",
        },
        city: {
            describe: "city",
            demondOptions: true,
            type : "string",
        }
    } ,
    handler: () => {
        console.log("Did update")
    }
 
})


console.log(yargs.argv)
 

// 7) convert obj to Json
 
const personupdatJson = JSON.stringify(personupdat) ;
 console.log(personupdatJson);

 
//8) store in file (writeFileSync)

fs.writeFileSync("dara1.json", "personupdat");
 

///////////////////////////////////////// end task 1 /////////////////////////////////////////////////////////


///////////////////////////////////////// start task 2 /////////////////////////////////////////////////////////



//Task 2 :


//1- to add 7 persons with ids from 1-7  (id - fname - lname - age - city )

// 2- to delete id 4 - 6

// 3- to list fname & lname & city for all .

// 4- to read all data for only the 5th person .


 
const data = require ("./data")

yargs.command({
    command : "add",
    describe: "add",
    builder: {
        fname : {
            describe: "fname ",
            demandOption: true,
            type: "string"
        },
        lname : {
            describe: "lname",
            demandOption: true,
            type: "string"
        }
    },
    handler: (x)=> {
         data.addPerson( x.id , x.fname , x.lname , x.age , x.city )
    }
 })

 yargs.command({
    command : "delete",
    describe: "delete",
    handler: (x)=> {
        data.deleteData(x.id)
    }
 })
 yargs.command ({
    command : "read",
    describe : "read",
    builder : {
        id : {
            describe : "read",
            demandOption : true,
            type : "string"
        }
    },
    handler : (x)=> {
        data.readData (x.id)
    }
 })
 yargs.command ({
    command :"list",
    describe : "list",
    handler : ()=>{
        data.listData()
    }
 })
 yargs.parse() 
   





///////////////////////////////////////// end task 2 /////////////////////////////////////////////////////////




