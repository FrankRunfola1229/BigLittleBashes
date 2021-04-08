const formElem = document.querySelector("#contact-form")
let status = document.querySelector("#status")
const url = "/mail/contactMe.php"

let resp = "";
let respText = "";

let successMsg = (msg) => {
    if (msg.search("spam") > 0)
        status.innerHTML = `<div class="alert alert-warning  text-center" role="alert">${msg}</div>`
    else
        status.innerHTML = `<div class="alert alert-primary  text-center" role="alert">${msg}</div>`
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
        successMsg(respText)
    }

    catch (err) { errorMsg(err) }

    finally { e.target.reset(); }
}

formElem.addEventListener("submit", submitHandler)