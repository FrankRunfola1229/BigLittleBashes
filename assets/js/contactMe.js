

const formElem = document.querySelector("#contact-form")

const createMessage = (status) => {
    let elem = document.createElement("div");   // Create a <button> element
    elem.innerHTML = `<div class="alert alert-primary text-center" role = "alert">${status}</div>`
    formElem.appendChild(elem);
}

formElem.addEventListener("submit",

    function callClickHandler(e) {

        const url = "/mail/contactMe.php"
        const formData = new FormData(e.target)
        const formDataString = JSON.stringify(Object.fromEntries(formData.entries()))

        try {
            const response = fetch(url, { method: 'POST', body: formDataString })

            const responseText = response.text == null ? "Message Sent!" : response.text
            alert(`fetched ${responseText} `)
            createMessage(responseText)
        }

        catch (e) {
            alert(`ERROR ${e} `)
        }
    });