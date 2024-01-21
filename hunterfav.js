
// acces the container which we want to show our fav character 

let container=document.getElementById('fav-container');
// container.style.color='white';
container.style.textAlign='center'

// by clicking the logo going back to homepage 
 let logo=document.getElementById('logo').addEventListener('click',()=>{
    document.location.href='index.html';
    

 })
//  checking the local storge if there is data or its null 


 function checkinglocalstorage(){
    if(localStorage.length < 1){
       
          container.innerText='Not any item added yet';
          container.style.display='block';
    }else{
        container.style.display='none';
       
    }   
}
//  adding localStorage data to our veriable so we can use  

      document.addEventListener("DOMContentLoaded", () => {
        const items = { ...localStorage };
        const favValues = Object.keys(items).map((key) => JSON.parse(items[key]));
        //console.log(favValues);
        //localStorage.removeItem("superhero");
        favValues.forEach((obj) => {
            // console.log(favValues);
            diplayfav(obj);
        });

        if(localStorage.length<1){
            container.style.display='block';
            container.innerText='Nov Fav item added yet';
        }
 if(localStorage.length == 1 && localStorage.getItem("superhero")) {
         container.style.display = "block";
         container.innerText = "No Fav Item Added";
       }
    });





      
//  container on which we are showing our fav characters 



 function diplayfav(data){
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

    let Remove= document.createElement('button');
    Remove.innerText='Remove';
    Remove.classList.add('button')
     Remove.addEventListener('click',(e)=>{
        e.preventDefault();
        displayingdiv.style.display = "none";

        localStorage.removeItem(`${data.name}`);
       
        container.removeItem(`${data.name}`)
        checkinglocalstorage();
        
     });
//  appending to main container 
     displayingdiv.appendChild(title);
     displayingdiv.appendChild(image);
     displayingdiv.appendChild(Remove);
     container.appendChild(displayingdiv);
 
//   clicking to img or title to  store the data into local storge  nd accesing the data 
     title.addEventListener('click',(e)=>{
         e.preventDefault();
         sendValue(data);
         
 
 
     });
     image.addEventListener('click',(e)=>{
         e.preventDefault();
         sendValue(data);
 
     })
     
 
 
 // clicking on image or title will set that  the data on to your localstorage nd going to that that page 
  function sendValue(superhero){
     localStorage.setItem('superhero',JSON.stringify(superhero))
     window.location = 'hunter.heroinfo.html';
 }
 
 
 
    
 }