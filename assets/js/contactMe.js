let contactForm = document.querySelector("#contact-form")

let submitHandler = e => {
    let url = "/mail/contact_me.php"
    let messages = document.querySelector("#message")
    const formData = new FormData(e.target)
    const formDataObject = Object.fromEntries(formData.entries())
    const formDataString = JSON.stringify(formDataObject)

    try {
        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: formDataString
        })
            .then(res => { res.json(); console.log(`res.json()=${res.json()}`) })
            .then(data => { messages.innerHTML += `Success: ${data}` })
            .catch(err => { messages.innerHTML += `Fail: ${err}`})
    }
    catch (err) {
        console.log(`${err}`)
    }
}

window.onload = () => {
    contactForm.addEventListener("submit", submitHandler)
}
