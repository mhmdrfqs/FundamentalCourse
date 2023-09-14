
function htg_Luas() {
    var sisi = parseFloat(document.getElementById("sisi").value);
    var luas = sisi * sisi;

    document.getElementById("rumus").textContent = "L = S x S";
    document.getElementById("output").textContent = "L = " + sisi + " x " + sisi;
    document.getElementById("luas").textContent = "L = " + luas;

}


function htg_Keliling() {
    var sisi = parseFloat(document.getElementById("sisi2").value);
    var keliling = 4 * sisi;
    

    document.getElementById("rumus2").textContent = 'K = 4 x S';
    document.getElementById("output2").textContent = 'K = 4 x ' + sisi;
    document.getElementById("keliling").textContent = 'K = ' + keliling;
}

function switchKomponen() {
    var komponen1 = document.getElementById("display1");
    var komponen2 = document.getElementById("display2");

    if (komponen1.style.display === "none") {
        komponen1.style.display = "block";
        komponen2.style.display = "none";
    } else {
        komponen1.style.display = "none";
        komponen2.style.display = "block";
    }
}

function Swbutton() {
    var butt1 = document.getElementById("Btn-1");
    var butt2 = document.getElementById("Btn-2");

    if (butt1.style.display === "none") {
        butt1.style.display = "block";
        butt2.style.display = "none";
    } else {
        butt1.style.display = "none";
        butt2.style.display = "block";
    }
}

function switchKomponen2() {
    var header1 = document.getElementById("displayH1");
    var header2 = document.getElementById("displayH2");

    if (header1.style.display === "none") {
        header1.style.display = "block";
        header2.style.display = "none";
    } else {
        header1.style.display = "none";
        header2.style.display = "block";
    
    }
}

function dsplayBody() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

function toggleMode() {
  const flipContainer = document.querySelector(".flip-container");
  flipContainer.classList.toggle("flipped");
}

function flipRectangle() {
  const rectangle = document.getElementById("rectangle");
  rectangle.classList.toggle("flipped2");
}

