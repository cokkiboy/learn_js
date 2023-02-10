const username =document.querySelector("#username");
const major=document.querySelector("#major");
const bttn =document.querySelector('form > button');
 bttn.addEventListener( "click",(e)=>{
      e.preventDefault();
      let tbody =document.querySelector("#attendant > tbody");
      let newname =document.createElement("tr");
     
      let nameid =document.createElement("td");
      nameid.innerText= username.value;

      username.value="";

      let majorid =document.createElement("td");
      majorid.innerText=major.value;

      major.value="";

      newname.appendChild(nameid);
      newname.appendChild(majorid);
      tbody.appendChild(newname);

 });