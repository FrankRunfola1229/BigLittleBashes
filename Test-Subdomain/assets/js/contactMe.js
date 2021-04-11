const formElem = document.querySelector("#contact-form")
let status = document.querySelector("#status")
const url = "/mail/contactMe.php"

let resp = "";
let respText = "";

let showMsg = (msg) => {
    let alertType = ""

    if (respText === "") { msg = "Couldn't reach Mail Server ..."; alertType = "danger" }
    else if (msg.search("spam") > 0) alertType = "warning"
    else alertType = "primary" //success!

    status.innerHTML = `<div class="alert alert-${alertType} text-center" role="alert">${msg}</div>`
}

let errorMsg = (err) => {
    status.innerHTML = `<div class="alert alert-danger  text-center" role="alert">${err}</div>`
}

async function submitHandler(e) {
    e.preventDefault(); //  prevent it from submitting the form since it's fetched manually
    const formData = new FormData(e.target)
    const formDataString = JSON.stringify(Object.fromEntries(formData.entries()))

    try {
        resp = await fetch(url, { method: 'POST', body: formDataString }) // wait for promise to return
        respText = await resp.text() // make sure to assign vars globally, or assignment will precede promise return!!!

        showMsg(respText)
    }

    catch (err) { errorMsg(err) }
    finally { e.target.reset(); }
}

formElem.addEventListener("submit", submitHandler)