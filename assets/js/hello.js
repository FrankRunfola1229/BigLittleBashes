let successMsg = (data) => { result.innerHTML = `<div class="alert alert-primary  text-center" role="alert">${data}</div>` };

let errorMsg = (err) => { result.innerHTML = `<div class="alert alert-danger  text-center" role="alert">${err}</div>` };

let result = document.querySelector("#result");

let headers = '"Content-Type": "application/json"';

let url = "/mail/hello.php";

let clickHandler = e => {

    fetch(url, { method: "GET", headers: { headers } })
        .then(res => res.text())
        .then(text => successMsg(text))
        .catch(err => errorMsg(err));
};

window.onload = () => {
    document.querySelector("#hello").addEventListener("click", clickHandler);
};