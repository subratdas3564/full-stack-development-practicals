const fs = require("fs");

const writeStream = fs.createWriteStream("./write.txt");
writeStream.write("hello world\n");
writeStream.write("my name is gaurav\n");
writeStream.write("my name is bhavesh\n");
writeStream.write("my name is sachi\n");
writeStream.write("my name is tanaya\n");
writeStream.write("my name is kasim\n");
writeStream.end();