
// acces the logo nd  if we click on logo it wil go to home page 

let logo=document.getElementById('logo');
logo.addEventListener('click',()=>{
    localStorage.removeItem("superhero");
    window.location='index.html'
})

//  fvt button to direct going on that page 

let favbutton= document.getElementById('fvt-btn');
favbutton.addEventListener('click',()=>{
    localStorage.removeItem("superhero");
    window.location='hunterfav.html'
})

let container=document.getElementById('container');

// accessing that data from localStorage nd displaying that values 

document.addEventListener('DOMContentLoaded',()=>{

    let superherodata=localStorage.getItem('superhero');
    if(superherodata){
        let superheroobj=JSON.parse(superherodata);
        displayherodetails(superheroobj);
    }
})

//  displaying the particular heros details 

function displayherodetails(data){
let detailscontainer= document.createElement('div');
let detailsheading= document.createElement('h1')
detailsheading.innerText='Details'
detailsheading.classList.add('hero-heading');
detailscontainer.appendChild(detailsheading);

detailscontainer.classList.add('details-container')
    let image=document.createElement('img');
    image.classList.add('image')
    image.src=`${data.thumbnail.path}.${data.thumbnail.extension}`;
    let title= document.createElement('h1');
    title.classList.add('heading')
    title.innerHTML=data.name;

container.appendChild(title);
container.appendChild(image)
container.appendChild(detailscontainer);
//  let chardetais= document.getElementById('char-container')

//  loop for all other  details for fetching nd diplaying 
data.series.items.forEach((obj)=>{
    if(obj.name){
       let paragraph=  document.createElement('p');
       paragraph.innerText=obj.name;
      
       detailscontainer.appendChild(paragraph);
    }
    
})

//  setting a button to direct you can add data into favourite 
let favbutton= document.createElement('button');
favbutton.innerText='Add to fav';
favbutton.addEventListener('click',()=>{
    addtolocal(data);
    favbutton.style.display='none';
   

})

container.appendChild(favbutton)
}
//  adding fav character into your  storage 
 function addtolocal(data){
    localStorage.setItem(data.name,JSON.stringify(data))

 }