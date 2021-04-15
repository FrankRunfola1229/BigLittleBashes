let animateButton = (e) => {
    e.preventDefault; //reset animation
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(() => e.target.classList.remove('animate'), 2000);
};

let classname = document.getElementsByClassName("confetti-button");

for (let i = 0; i < classname.length; i++)
    classname[i].addEventListener('click', animateButton, false);