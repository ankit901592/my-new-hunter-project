
// firstly we fetch the  data from the server useing keys 
const Ts = Date.now();
const public = "b5d0f50c60bb56eaddeb5ce4165b763c";
const private = "16e2caa8f5480f296d45321986c73975151496b2";
let hash = CryptoJS.MD5(Ts+private+public).toString();

// creating elemenet for  storing the heroes data
 
let displayingdiv =  document.createElement('div');
let diplaycard=document.getElementById('diplay-container');

 // click listner for going to next page 
document.getElementById('fav-btn').addEventListener('click',()=>{
    window.location.href='hunterfav.html'
})


// searchInput for searchig the particular hero
function searchinput(){

let searchInput = document.getElementById('inputarea');

searchInput.addEventListener('keydown', (key) => {
    if (searchInput.value !== ""||key.keyCode === 13) {
        //  console.log(searchInput.value.);
 let searcitem=searchInput.value.toLowerCase();
         fetchingdata(searcitem);
         diplaycard.innerHTML='';
      
        


        }
       
      
    
});


}
searchinput();



// Fetching the data from the server 
 async function fetchingdata(query){
const url = `https://gateway.marvel.com/v1/public/characters?ts=${Ts}&apikey=${public}&hash=${hash}&nameStartsWith=${query}`

    let response=  await fetch(url);
    let data=  await response.json();
    data=data.data.results;
    console.log(data);
    data.forEach((item)=>{
        displaycharacter(item);


    })

}
// diplaying the particular character  by making elements and adding the data getting from server

function displaycharacter(data){

let displayingdiv =  document.createElement('div');
displayingdiv.classList.add('diplay-card')

//showing  cardimg
 let image=document.createElement('img');
image.classList.add('card-img');
 image.src=`${data.
    thumbnail.path}.${data.thumbnail.extension}`
//showing card title
    let title=document.createElement('h3');
    title.classList.add('cart-title')
    title.innerText=data.name;

    let favbutton= document.createElement('button');
    favbutton.innerText='Add To fav';
    favbutton.classList.add('button')

  // clicking on the fav button to adding  fav character on local storage
    favbutton.addEventListener('click',(e)=>{
        e.preventDefault();
        addtofav(data);
        favbutton.style.display='none';
        
 

    });

// appending the data  to main container 

 let diplaycard=document.getElementById('diplay-container');

 
    displayingdiv.appendChild(title);
    displayingdiv.appendChild(image);
    displayingdiv.appendChild(favbutton);
    diplaycard.appendChild(displayingdiv);

 // clicking on particular  titel or image to storing the data  for the particular hero in local storge
    title.addEventListener('click',(e)=>{
        e.preventDefault();
        sendValue(data);
        


    });
    image.addEventListener('click',(e)=>{
        e.preventDefault();
        sendValue(data);

    })
    

}
// storing the particular  hero details in localStorage 

 function sendValue(data){
    localStorage.setItem('superhero',JSON.stringify(data))
    window.location = 'hunter.heroinfo.html';
    
}

// storing the  favcharacters data into localStorage 

 function addtofav(data){
    localStorage.setItem(data.name,JSON.stringify(data))

}

// localStorage.setItem('ankit', 10