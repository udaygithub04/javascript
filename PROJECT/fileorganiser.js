let fs=require("fs");  
let path=require("path");
let folderPath=process.argv[2];
//console.log(folderPath);

let folderExist=fs.existsSync(folderPath);

let extensions= {
    Audio : [".mp3"],
    Video : [".mp4",".mkv"],
    Document: [".doc","xlsx",".pdf",".txt"],
    Image : [".jpeg",".jpg",".png",".gif"],
    Software : [".exe"] 
};

if(folderExist){
    //console.log("path valid");
    let files=fs.readdirSync(folderPath);
    for(let i=0;i<files.length;i++){
        let ext=path.extname(files[i]);
        let nameOfFolder=giveFolderName(ext);
        //console.log("EXt--",ext,"Folder--",nameOfFolder);
        let pathOfFolder=path.join(folderPath,nameOfFolder);
        let exist=fs.existsSync(pathOfFolder);
        if(exist){
            moveFile(folderPath,pathOfFolder,files[i]);
        }
        else{
            fs.mkdirSync(pathOfFolder);
            moveFile(folderPath,pathOfFolder,files[i]);
        }
    }
}
else{
    console.log("please enter valid path");
}

function giveFolderName(ext){
    for(let key in extensions){
        let extArr=extensions[key];
        for(let i=0;i<extArr.length;i++){
            if(extArr[i]==ext){
                return key;
            }
        }
    }
    return "others"
}
function moveFile(folderPath,pathOfFolder,fileName){
    let sourcePath=path.join(folderPath,fileName);
    let destinationPath=path.join(pathOfFolder,fileName);

    fs.copyFileSync(sourcePath,destinationPath);
    fs.unlinkSync(sourcePath);
}