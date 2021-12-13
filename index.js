
li.innerHTML = datos[i].name + " vive en " + datos[i].city + "<br>";

var btnCargar = document.getElementById("cargar")
btnCargar.addEventListener("click", function () {
    axios.get('https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8')
    .then(function (response) {

        var lista = document.createElement(li);
        listaM.appendChild(lista);

        for((lista.children.length == 0){
            
            //System.out.printl(li);

        }

        
    })
    .catch(function (error) {
        console.log(error);
    })
})
