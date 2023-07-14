let comics=[
    {
        id:1,
        img:"imgs/spiderman1.jpg",
        category:"Spiderman"
    },
    {
        id:2,
        img:"imgs/f4-2.jpg",
        category:"Fantastic Four"
    },
    {
        id:3,
        img:"imgs/ironman1.jpg",
        category:"Ironman"
    },
    {
        id:4,
        img:"imgs/xmen2.jpg",
        category:"X-men"
    },
    {
        id:5,
        img:"imgs/hulk1.jpg",
        category:"Hulk"
    },
    {
        id:6,
        img:"imgs/xmen3.jpg",
        category:"X-men"
    },
    {
        id:7,
        img:"imgs/f4-1.jpg",
        category:"Fantastic Four"
    },
    {
        id:8,
        img:"imgs/avengers2.jpg",
        category:"Avengers"
    },
    {
        id:9,
        img:"imgs/spiderman3.jpg",
        category:"Spiderman"
    },
    {
        id:10,
        img:"imgs/hulk4.jpg",
        category:"Hulk"
    },
    {
        id:11,
        img:"imgs/xmen.jpg",
        category:"X-men"
    },
    {
        id:12,
        img:"imgs/f4-3.jpg",
        category:"Fantastic Four"
    },
    {
        id:13,
        img:"imgs/ironman3.jpg",
        category:"Ironman"
    },
    {
        id:14,
        img:"imgs/avengers3.jpg",
        category:"Avengers"
    },
    {
        id:15,
        img:"imgs/ironman2.jpg",
        category:"Ironman"
    }
]

window.addEventListener("DOMContentLoaded",()=>{
       displayComicItems(comics)
})
let container=document.querySelector(".container")
let buttons=document.querySelectorAll(".button")

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
       const category=e.currentTarget.dataset.id;
       const comicsItem=comics.filter((comicsDisplay)=>{
             if(category===comicsDisplay.category){
                return comicsDisplay
             }
       })
       if(category=="All"){
        displayComicItems(comics)
       }
       else{
        displayComicItems(comicsItem)
       }
    })
})

function displayComicItems(comics){
    let displaycomics=comics.map((comics)=>{
        return `<div class="spiderman1">
        <img src=${comics.img} alt="spiderman" width="200px" height="300px">
    </div>`
    })
    displaycomics=displaycomics.join("")
    container.innerHTML=displaycomics;
}
