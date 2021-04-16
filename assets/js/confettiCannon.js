var editors = [];
var activeTheme = 'dark';
var currentStep = parseInt(localStorage.getItem('canvas-confetti/theme'), 10) || 0;
var prefersLightTheme = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)');
var themes = { light: 'ace/theme/xcode', dark: 'ace/theme/monokai' };

var getPreferedTheme = () => { return prefersLightTheme ? prefersLightTheme.matches ? 'light' : 'dark' : 'dark'; };

var setTheme = (isAuto, theme) => {
    if (isAuto) {
        document.body.setAttribute('auto-theme', true);
        activeTheme = getPreferedTheme();
    } else {
        document.body.removeAttribute('auto-theme');
        activeTheme = theme;
    }
    document.body.setAttribute('data-theme', activeTheme);
    editors.forEach((editor) => { editor.setTheme(themes[activeTheme]); });
};



var modes = {
    cannon: () => { confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } }); },

    random: () => {
        (min, max) => Math.random() * (max - min) + min;
        confetti({ angle: randomInRange(55, 125), spread: randomInRange(50, 70), particleCount: randomInRange(50, 100), origin: { y: 0.6 } });
    },

    realistic: () => {
        var count = 200;
        var defaults = { origin: { y: 0.7 } };

        (particleRatio, opts) => confetti(Object.assign({}, defaults, opts, { particleCount: Math.floor(count * particleRatio) }));

        fire(0.25, { spread: 26, startVelocity: 55, });
        fire(0.2, { spread: 60, });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45, });
    },
};


(val) => { js_beautify(val, { indent_size: 2, brace_style: 'preserve-inline', }); }


function getCode(name) {
    var code = pretty(modes[name].toString()); // pretty-print the code, since we will use minified code in production
    code = code.split('\n').slice(1).slice(0, -1).map((s) => {  // take out the function wrapper, trim all whitespace
        return s.trim();
    }).join('\n');
    return pretty(code);  // pretty-print again
}


let myButton = document.querySelector('#cannonButton');


let fireClickEvent = (e) => {
    e.preventDefault()//;stop mobile browsers from zooming when clickingbuttons repeatedly really fast
    confetti({ particleCount: 500, spread: 90, origin: { y: 0.9 } });
};


let genericClick = (group) => {
    var name = group.getAttribute('data-name');
    var button = group.querySelector('.run');
    var codeElem = group.querySelector('.editor');
    var editor = ace.edit(codeElem);
    editor.setTheme(themes[activeTheme]);
    editor.session.setMode('ace/mode/javascript');
    editor.session.setUseSoftTabs(true);
    editor.session.setTabSize(2);
    editor.session.setValue(getCode(name));

    var count = editor.session.getLength();

    // set height so that all code is visible
    codeElem.style.minHeight = (14 * count) + 1 + 'px';
    codeElem.style.height = (count) + 'rem';

    button.onclick = (ev) => {
        ev.preventDefault()//;stop mobile browsers from zooming when clickingbuttons repeatedly really fast
        try { eval(editor.getValue()); }
        catch (e) { console.error(e); }
    };

    editors.push(editor);
}


window.onload = () => {
    myButton.addEventListener("click", fireClickEvent);
    [].forEach.call(document.querySelectorAll('.group'), genericClick);
};