function loadComponent(id,file){

fetch(file)
.then(response=>response.text())
.then(data=>{
document.getElementById(id).innerHTML=data;
});

}

loadComponent("nav-placeholder","components/nav.html");

loadComponent("footer-placeholder","components/footer.html");
