

const formElem = document.querySelector("#contact-form")

formElem.addEventListener("submit",

    async function callClickHandler(e) {

        const url = "/mail/contactMe.php"
        const formData = new FormData(e.target)
        const formDataString = JSON.stringify(Object.fromEntries(formData.entries()))

        alert(`FETCHING .. ${url} ${headers} ${formDataString}`)

        try {
            const response = await fetch(url, { method: "POST", headers: { 'Content-Type': 'application/json', }, body: formDataString })
            const responseText = await response.text
            console.log(responseText);
            alert(`fetched ${responseText}`)
            document.querySelector("#result").innerHTML = `<div class="alert alert-primary  text-center" role="alert">${responseText}</div>`
        }

        catch (e) {
            alert(`ERROR ${e}`)
        }


    });