const request=require("request");
const jsdom=require("jsdom");
const { JSDOM }=jsdom;
const fs=require("fs");
const xlsx=require("json-as-xlsx");

const link="https://www.espncricinfo.com/series/ipl-2021-1249214/match-results";

let leaderboard=[];
let counter=0;
request(link,cb);

function cb(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        const allScorecardTags=document.querySelectorAll('.ds-border-b.ds-border-line');
        //console.log(allScorecardTags.length)
        for(let i=0;i<60;i++){
            let anchorTagAll=allScorecardTags[i].querySelectorAll("a");
            let link=allScorecardTags[2].href;
            let completeLink="https://www.espncricinfo.com"+link;
            //console.log(completeLink);
            request(completeLink,cb2);
            counter++;
        }
    }
}

function cb2(error,response,html){
    if(error){
        console.log(error);
    }
    else{
        const dom=new JSDOM(html);
        const document=dom.window.document;
        let batsmenRow=document.querySelectorAll('tbody [class="ds-border-b ds-border-line ds-text-tight-s"]');
        for(let i=0;i<batsmenRow.length;i++){
            let cells=batsmenRow[i].querySelectorAll("td");
            if(cells.length==8){
                let name=cells[0].textContent;
                let runs=cells[2].textContent;
                let balls=cells[3].textContent;
                let fours=cells[5].textContent;
                let sixes=cells[6].textContent;
                //console.log("Name :",name,"Runs :",runs,"Balls :",balls,"Fours :",fours,"Sixes :",sixes);
                processPlayer(name,runs,balls,fours,sixes);
                
            }

        }
        counter--;
        if(counter==0){
            console.log(leaderboard);
            let data=JSON.stringify(leaderboard);
            fs.writeFileSync('BatsmenStats.json',data);
            let dataExcel=[
                {
                    sheet: "Ipl Stats",
                    columns: [
                        { label: "Name", value: "Name" },
                        { label: "Inings", value: "Inings" },
                        { label: "Runs", value: "Runs" },
                        { label: "Balls", value: "Balls" },
                        { label: "Fours", value: "Fours" },
                        { label: "Sixes", value: "Sixes" },
                    ],
                    content: leaderboard
                },
            ]
            let settings= {
                fileName: "BatsmenDetail",
                extraLength: 3,
                writeOption: {},
            }
            xlsx(dataexcel,settings)
        }
    }
}
function processPlayer(name,runs,balls,fours,sixes){
    runs=Number(runs);
    balls=Number(balls);
    fours=Number(fours);
    sixes=Number(sixes);
    for(let i=0;i<leaderboard.length;i++){
        let playerObj=leaderboard[i];
        if(playerObj.Name==name){
            playerObj.Runs+=runs;
            playerObj.Inings+=1;
            playerObj.Balls+=balls;
            playerObj.Fours+=fours;
            playerObj.Sixes+=sixes;
            return;
        }
    }
    let obj={
        Name:name,
        Inings:1,
        Runs:runs,
        Balls:balls,
        Fours:fours,
        Sixes:sixes

    }
    leaderboard.push(obj);
}
