const express = require ("express");
const fs = require ("fs");
const readFile = () => {
     fs.readFile("interest.txt", "utf8", (err, data) => {
         if (err) {
             console.log("Error:", err.message);
             return;
        }

    console.log("File Content:");
        console.log(data);
    });
};

readFile();