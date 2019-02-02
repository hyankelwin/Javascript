function gameOver2() {
    location.reload();
}
(function () {
    var imagens = [];
    var cartasViradas = [];
    var quantidadeCartasViradas = 0;
    var rrr = document.createElement('div');
    rrr.id = 'meuId';
    for (i = 0; i < 32; i++) {
        var img = {
            src: "img/" + i + ".jpg",
            rrr: i % 16

        };
        imagens.push(img)
    }
    startGame();

    function startGame() {
        imagens = randomSort(imagens);
        var frontFace = document.getElementsByClassName("front");
        for (i = 0; i < 32; i++) {
            var divcarta = document.getElementById("carta" + i);
            divcarta.addEventListener("click", roda, false);
            frontFace[i].style.backgroundImage = "url('" + imagens[i].src + "')";
            frontFace[i].setAttribute("meuId", imagens[i].rrr);
        }
        this.inicio();
    }

    function randomSort(arrayVelho) {
        var novoArray = [];
        while (novoArray.length !== arrayVelho.length) {
            var resultado = Math.floor(Math.random() * arrayVelho.length);
            if (novoArray.indexOf(arrayVelho[resultado]) < 0) {
                novoArray.push(arrayVelho[resultado]);
            }
        }
        return novoArray;
    }

    function roda() {
        if (cartasViradas.length < 2) {
            quantidadeCartasViradas = quantidadeCartasViradas + 1;
            var faces = this.getElementsByClassName("face");
            faces[0].classList.toggle("viradas");
            faces[1].classList.toggle("viradas");
            cartasViradas.push(this);
            if (cartasViradas.length === 2) {
                if (cartasViradas[0].childNodes[3].getAttribute("meuid") === cartasViradas[1].childNodes[3].getAttribute("meuid")) {
                    cartasViradas[0].style.boxShadow = "0px 0px 10px #0f0";
                    cartasViradas[1].style.boxShadow = "0px 0px 10px #0f0";
                    cartasViradas = [];
                }
            }
        } else {
            cartasViradas.forEach(function (cartaVirada) {
                cartaVirada.childNodes[1].classList.toggle("viradas")
                cartaVirada.childNodes[3].classList.toggle("viradas")
            });
            cartasViradas = [];
            quantidadeCartasViradas = quantidadeCartasViradas - 2;
        }
        if (quantidadeCartasViradas == 32) {
            gameOver();
        }
    }

    function gameOver() {
        document.getElementsByClassName("modalGameOver")[0].style.display = "block";
        this.parar()
    }
}());

var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;
function inicio () {
	control = setInterval(cronometro,10);
	document.getElementById("inicio").disabled = true;
	document.getElementById("parar").disabled = false;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = false;
}
function parar () {
	clearInterval(control);
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = false;
}
function reinicio () {
	clearInterval(control);
	centesimas = 0;
	segundos = 0;
	minutos = 0;
	horas = 0;
	Centesimas.innerHTML = ":00";
	Segundos.innerHTML = ":00";
	Minutos.innerHTML = "00";
	Horas.innerHTML = "00";
	document.getElementById("inicio").disabled = false;
	document.getElementById("parar").disabled = true;
	document.getElementById("continuar").disabled = true;
	document.getElementById("reinicio").disabled = true;
}
function cronometro () {
	if (centesimas < 99) {
		centesimas++;
		if (centesimas < 10) { centesimas = "0"+centesimas }
        Centesimas.innerHTML = ":"+centesimas;
	}
	if (centesimas == 99) {
        centesimas = -1;
	}
	if (centesimas == 0) {
		segundos ++;
		if (segundos < 10) { segundos = "0"+segundos }
        Segundos.innerHTML = ":"+segundos;
	}
	if (segundos == 59) {
        segundos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0) ) {
		minutos++;
		if (minutos < 10) { minutos = "0"+minutos }
        Minutos.innerHTML = minutos;
	}
	if (minutos == 59) {
        minutos = -1;
	}
	if ( (centesimas == 0)&&(segundos == 0)&&(minutos == 0) ) {
		horas ++;
		if (horas < 10) { horas = "0"+horas }
        Horas.innerHTML = horas;
	}
}