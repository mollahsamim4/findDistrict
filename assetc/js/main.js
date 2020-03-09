const url="./assetc/js/dial.json";
const states=[];
fetch(url)
.then(res=>res.json())
.then(data=>states.push(...data));



function findState(state,states){
	return states.filter(findDistrict=>{
	const regex=new RegExp(state,"gi");
		return findDistrict.state.match(regex);
	});
}
const input=document.querySelector("#state");
const area=document.querySelector(".area");

function displayDist(e){

const districts=findState(this.value,states);
const stateName=findState(this.value,states).map(stateName=>stateName.state).join("");


const html=districts.map(dist=>{
	return dist.districts;
});
const stateHeading=document.querySelector(".stateName").innerHTML=stateName;
const HourMuch=html.map(data=>data.length).join("");
document.querySelector("#count").innerHTML=HourMuch;
let string="";
for(let i=0;i<html.map(data=>data.length);i++){
	string+=`<li>${html.map(datas=>datas[i])}</li>`;
}
area.innerHTML=string;


}
input.addEventListener("change",displayDist);
input.addEventListener("keyup",displayDist);

