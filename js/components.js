async function loadComponent(id, file) {
    const response = await fetch(file);
    const text = await response.text();
    document.getElementById(id).innerHTML = text;
}

loadComponent("nav", "/components/nav.html");
loadComponent("footer", "/components/footer.html");
