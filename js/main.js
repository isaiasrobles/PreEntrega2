let nombre = prompt("Ingresá tu nombre");
titulo.innerHTML = "Hola <em>" + nombre + "</em>" + "," + " bienvenido a nuestra tienda!";

function elegir() {
    const opciones = {
        1: "Nike",
        2: "Adidas",
        3: "Jordan"
    };

    let mensaje = "¿Qué marca querés comprar?" + "\n1. Nike" + "\n2. Adidas" + "\n3. Jordan";
    const elegirOpcion = (opcion) => {
        if (opcion === 1) {
            alert("1: NIKE JORDAN AIR 1 MID $ 137.999" + "\n2: NIKE AIR FORCE 1 07 $ 167.999" + "\n3: NIKE DUNK LOW $ 169.999" + "\n4: NIKE LEBRON NXXT $ 284.999" + "\n5: NIKE AIR MAX 1 $ 274.999");
        } else if (opcion === 2) {
            alert("1: ADIDAS ORIGINALS SL 72 $ 171.999" + "\n2: ADIDAS ORIGINALS COUNTRY II $ 189.999" + "\n3: ADIDAS ORIGINALS CAMPUS 00S $ 171.999" + "\n4: ADIDAS ORIGINALS SAMBA XLG $ 189.999" + "\n5: ADIDAS ORIGINALS GAZELLE INDOOR $189.999");
        } else if (opcion === 3) {
            alert("1: JORDAN AIR 1 LOW $ 209.999" + "\n2: JORDAN AIR 3 RETRO $ 359.999" + "\n3: JORDAN AIR 1 ZOOM COMFORT 2 $ 279.999" + "\n4: JORDAN TATUM 2 $ 229.999" + "\n5: JORDAN STADIUM 90 $ 256.999");
        } else {
            alert("Opción no válida");
        }
    };

    let eleccion = prompt(mensaje);  // Captura la entrada del usuario

    eleccion = Number(eleccion);  // Convierte la entrada a número

    if (opciones[eleccion]) {
        alert("Has elegido: " + opciones[eleccion]);
        elegirOpcion(eleccion);
    } else {
        alert("Opción no válida. Por favor, elige 1, 2 o 3.");
    }
}

elegir();

