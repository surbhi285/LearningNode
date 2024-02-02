// for file system module
const fs = require("fs");

// to create a file

// here we give name of file as file.txt and then content in the file hello node js and after completing this 
// just call  callback function if there is any error then print error otherwise file created successfully
// fs.appendFile('file.txt', "hello node js world", (error)=>{
//     if(error){
//         console.log("error")
//     }else{
//         console.log("file created successfully");
//     }
// })

// if file is created we can update the file
fs.appendFile('file.txt', "\n hello surbhi welcome to node js word", (error)=>{
if(error){
    console.log("error");
}else{
    console.log("file updated successfully");
}
})

fs.readFile("file.txt", (error, data)=>{
    if(error){
        console.log(error)
    }else{
        console.log(data);
    }
})

//------------- Asynchronous ---------------

console.log("hello");

fs.readFile("file.txt", (error, data)=>{ // asynchronous need callback function

    if(error){
        console.log(error);
    } else{
        console.log("here is my file");
        console.log(data.toString());
    }
});

console.log("end work");

/* so output of asynchronous will be 
hello
end work
here is my file
hello surbhi welcome to node js word
*/

//-------------Synchronous function--------

console.log("hello");

fs.readFileSync("file.txt") // we dont need callback function because consoler have to wait here to get the data
console.log(data.toString());
console.log("end");

/* so output of synchronous will be 
hello
hello surbhi welcome to node js word
end work
*/

//------ to delete the file
fs.unlink("file.txt", (error)=>{
    if(error){
        console.log("File not deleted")
    }else{
        console.log("file is deleted");
    }
})