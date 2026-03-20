function loadComponent(id, file){
fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;

/* 🔥 attach menu AFTER nav loads */
if(id === "nav-placeholder"){
const menuButton = document.getElementById("menuButton");
const sidebar = document.getElementById("sidebar");

if(menuButton && sidebar){
menuButton.addEventListener("click", () => {
sidebar.classList.toggle("closed");
});
}
}

});
}

loadComponent("nav-placeholder","components/nav.html");
loadComponent("footer-placeholder","components/footer.html");
