var projectsDiv=document.getElementById("projects");
for(let i=0;i<PROJECTS.length;i++){
var currentProject=PROJECTS[i];

//div
var projectDiv=document.createElement("div");
var divStyle=document.createAttribute("style");
divStyle.value="display:inline-block; width:300px;margin:10px;";
projectDiv.setAttributeNode(divStyle);

//h3
var title=document.createElement("h3");
var titleNode=document.createTextNode(currentProject.title);
title.appendChild(titleNode);

//img
var image=document.createElement("img");
var source=document.createAttribute("src");
source.value="./images/"+currentProject.img;
image.setAttributeNode(source);
var imgStyle=document.createAttribute("style");
imgStyle.value="width:180px; height:100px";
image.setAttributeNode(imgStyle);

//p
var parag=document.createElement("p");
var paragNode=document.createTextNode(currentProject.description);
parag.appendChild(paragNode);

projectDiv.appendChild(title);
projectDiv.appendChild(image);
projectDiv.appendChild(parag);

projectsDiv.appendChild(projectDiv);



}