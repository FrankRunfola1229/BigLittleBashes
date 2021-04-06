let successMsg = (data) => { status.innerHTML = `<div class="alert alert-primary  text-center" role="alert">${data}</div>` }
let errorMsg = (err) => { status.innerHTML = `<div class="alert alert-danger  text-center" role="alert">${err}</div>` }

let status = document.querySelector("#status")
let headers = '"Content-Type": "application/json"'

let url = "/mail/hello.php"

let clickHandler = e => {

    fetch(url, { method: "GET", headers: { headers } })
        .then(res => res.text())                // get Promise response in JSON
        .then(text => successMsg(text))
        .catch(err => errorMsg(err))
}

window.onload = function () {
    successMsg("..WAITING...")
    document.querySelector("#hello").addEventListener("click", clickHandler)
};