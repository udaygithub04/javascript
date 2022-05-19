const request=require("request");
const jsdom=require("jsdom");
const { JSDOM }=jsdom;

let link="https://github.com/topics";

request(link,cb);

function cb(erroe,response,html){
    if(error){
        console.log(error);
    }
    else{
        const dom=new JSDOM(html);
        const document=dom.windows.document;

    }
}