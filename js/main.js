let dataOne=[]
async function getDataOne(categ){


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '91b505f35emshbd8eef76ef94b37p1ecfa6jsn26ef5e49e232',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    
    let resp=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${categ}`, options)
    dataOne= await resp.json()
    console.log(dataOne);
    displayOne()
}


getDataOne("shooter")

function displayOne(){
    let temp=""
    dataOne.forEach((el)=>{
        temp+=`      <div class="col-3  mycol clickonme" mycode=${el.id} id="selectmycol">
        <div class="item card  bg-transparent outercard ">
          <div class="card  bg-transparent w-100" style="width: 18rem;">
        <div class="p-3">
          <img src="${el.thumbnail}" class="card-img-top " alt="...">
          <div class="card-body">
        <div class="d-flex justify-content-between ">
        <h5 class="card-title text-white">${el.title}</h5>
        <a href="#" class="btn btn-primary px-2 py-1 ">free</a>
        </div>
            <p class="card-text text-white text-muted">${el.short_description}</p>
            <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
          </div>
        </div>
        </div>
        <div class="d-flex justify-content-between p-2 ">
          <span class="text-white bg-secondary rounded px-1 smallfont">${el.genre}</span>
          <span class="text-white bg-secondary rounded px-1 smallfont">${el.platform}</span>
        </div>
        </div>
        
              </div>
        
        
        `
    })
    document.getElementById("myId").innerHTML=temp
    displayTwo()

}
let navlinks=document.querySelectorAll(".nav-link")
function getCategory(){
    navlinks.forEach((el)=>{
        el.addEventListener("click",function(e){
            let myCategory=el.innerHTML
            console.log(myCategory);
            getDataOne(myCategory)

        })
    })
}
getCategory()



let dataTwo={}
async function getDataTwo(number){


    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '91b505f35emshbd8eef76ef94b37p1ecfa6jsn26ef5e49e232',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };



    let resp=await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${number}`, options)

    dataTwo= await resp.json()
    console.log(dataTwo);
    displaythree()
}
// getDataTwo(525)


let myoverlayer=document.getElementById("myoverlayer")
let closeIcon=document.getElementById("closeIcon")
let myTitle=document.getElementById("myTitle")
let myCategory=document.getElementById("myCategory")
let myPlatform=document.getElementById("myPlatform")
let myStatus=document.getElementById("myStatus")
let overlayerImg=document.getElementById("overlayerImg")
let myParagraph=document.getElementById("myParagraph")


function displayTwo(){
    let clickme=document.querySelectorAll(".clickonme")
    // let codenumber=el.getAttribute("mycode")
    clickme.forEach((el)=>{
        el.addEventListener("click",function(e){
            console.log("clicked")
            console.log(dataTwo.thumbnail);////hna data two fady bl nsbalo :)
            // console.log(el.getAttribute("mycode"));

            //previous//
            let codenumber=el.getAttribute("mycode")
            console.log(codenumber)
            getDataTwo(codenumber)


            // specificCode()
            ///uncommentda///////
            // myoverlayer.style.display="block"
            // myTitle.innerHTML=dataTwo.title
            // overlayerImg.setAttribute("src" , dataTwo.thumbnail )
            // myCategory.innerHTML=dataTwo.genre
            // myPlatform.innerHTML=dataTwo.platform
            // myStatus.innerHTML=dataTwo.status
            // myParagraph.innerHTML=dataTwo.description
            // closeIcon.addEventListener("click",function(){
            //     myoverlayer.style.display="none"



            // })


        })
    })

}

function displaythree(){
    myoverlayer.style.display="block"
    myTitle.innerHTML=dataTwo.title
    overlayerImg.setAttribute("src" , dataTwo.thumbnail )
    myCategory.innerHTML=dataTwo.genre
    myPlatform.innerHTML=dataTwo.platform
    myStatus.innerHTML=dataTwo.status
    myParagraph.innerHTML=dataTwo.description
    closeIcon.addEventListener("click",function(){
        myoverlayer.style.display="none"



    })
}



function specificCode(){
    let selectmycol=document.getElementById("selectmycol")
    selectmycol.addEventListener((el)=>{
        let catchcode=selectmycol.getAttribute("mycode")
        console.log("there's no error");
        console.log(catchcode)
        getDataTwo(catchcode)
    })


}

