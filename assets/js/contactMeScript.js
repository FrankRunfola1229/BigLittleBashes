let contactForm = document.querySelector("#contact-form")

let submitHandler = e => {
    let url = "/mail/contactMeScript.php"
    let messages = document.querySelector("#message")
    const formData = new FormData(e.target);
    const formDataObject = Object.fromEntries(formData.entries());

    console.log(`Begin submitHeader()...`)

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: formDataObject
    })
        .then(res => { res.json(); console.log(`res.json()=${res.json()}`) })
        .then(data => { messages.innerHTML += `Success: ${data}` })
        .catch(err => { messages.innerHTML += `Fail: ${err}` })

    console.log(`End submitHeader()...`)
}

window.onload = () => {
    contactForm.addEventListener("submit", submitHandler)
}