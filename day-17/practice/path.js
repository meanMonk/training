const path = require('path');
const greetModule = require('./greetModule');

const fileObject = {
    rootPath: '/Users',
    folderName: 'project',
    fileName: 'index.js'
}

const filePath = fileObject.rootPath + fileObject.folderName + fileObject.fileName;
console.log(filePath);

const constructedPath = path.format({
    root: fileObject.rootPath,
    dir: fileObject.folderName,
    base: fileObject.fileName
})

console.log(constructedPath)

const greetMPath = path.join(__dirname,'greetModule.js');
console.log(greetMPath)
