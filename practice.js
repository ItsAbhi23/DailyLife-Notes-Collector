showNotes();

let addbtn=document.getElementById('addbtn');
 addbtn.addEventListener("click",function(e){
    let addtext=document.getElementById("addtext");
    let notes=localStorage.getItem("notes");
    if (notes==null) {
        notesObj=[];
    }else{
     notesObj=JSON.parse(notes);
    }
    notesObj.push(addtext.value);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    addtext.value="";
    console.log(notesObj);
    showNotes();
});
function showNotes(){
    let notes=localStorage.getItem("notes");
    if (notes==null) {
        notesObj=[];
    }else{
     notesObj=JSON.parse(notes);
    }
    let html="";
    notesObj.forEach(function(element,index) {
       html+=`
       <div class="notecard my-2 mx-2 card" style="width: 18rem;">
       <div class="card-body">
         <h5 class="card-title">Notes ${index+1}</h5>
         <p class="card-text">${element}</p>
         <button id="${index}" onclick="deleteNotes(this.id)" class="btn btn-primary">deleteNotes</button>
       </div>
     </div>
       ` ;
    });
    let notesElem=document.getElementById('notes');
    if(notesObj.length!=0){
        notesElem.innerHTML=html;
    }else{
        notesElem.innerHTML=`You Have Not Added Any Note Please Write Something In The Box and Click "Add Notes"`;
    }
}
// let imbtn=document.getElementsByClassName("imbtn");
// imbtn.addEventListener("click",function(){
//     imbtn.style.backgroundColour=red;
// })
function deleteNotes(index){
let notes=localStorage.getItem("notes");
if (notes==null) {
    notesObj=[];
}else{
notesObj=JSON.parse(notes);
}
notesObj.splice(index,1);
localStorage.setItem("notes",JSON.stringify(notesObj));

showNotes();

}
let  Search=document.getElementById("SearchIt");
Search.addEventListener("input",function(){
    let inputval=Search.value.toLowerCase();
    console.log("Input Event Fired",inputval);
    let notes=document.getElementsByClassName('notecard');
    Array.from(notes).forEach(function(element){
      let cardtext= element.getElementsByTagName("p")[0].innerText;
        // console.log("Input Event Fired" ,inputval);
        if (cardtext.includes(inputval)) {
            element.style.display="block";
        }else{
            element.style.display="none";
        }
    });
})