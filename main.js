
function engKattaGoster() {
    let parametir1 = prompt("Birinchi sonni kiriting:");
    let parametir2 = prompt("Ikkinchi sonni kiriting:");

    var enKatta = Math.max(parametir1, parametir2);
    
    alert("Eng katta son: " + enKatta);
}
engKattaGoster();