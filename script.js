let databaseCosult = [
    {
        idConsult: 1,
        name: "John Bregel",
        email: "johnjungkring87@gmail.com",
        message: "saya ingin merencanakan diet bulking selama 30 hari"
    }
]

function addConsult (){
    let name = document.getElementById("name")
    let email = document.getElementById("email")
    let message = document.getElementById("message")

    let idConsult = 1

    if(databaseCosult.length > 0){
        idConsult = databaseCosult[databaseCosult -1].idConsult + 1
    }

    let tempObjConsult = {
        idConsult,
        name: name.value,
        email: email.value,
        message: message.value
    }

    databaseCosult.push(tempObjConsult)

    name.value = ""
    email.value = ""
    message.value = ""
    console.log(databaseCosult, "success creating consult!");

    readConsult()

}

function readConsult(){
    document.getElementById("titleConsult").innerText = "List consult"

    let templateConsult = ""

    for(let i=0; i<databaseCosult.length; i++){
        let perObjConsult = databaseCosult[i]

        let {idConsult, name, email, message} = perObjConsult

        templateConsult += `<div class="card">
        <p>${name}</p>
        <p>${email}</p>
        <p>${message}</p>
        </div>`

    }

    let containerCardConsult = document.getElementById("container-card")
    containerCardConsult.innerHTML = templateConsult
}
