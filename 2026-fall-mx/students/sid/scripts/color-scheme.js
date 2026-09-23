console.log('working')

const key = 'color-scheme-choice';

function setColorScheme(coloeScheme){
    const metaTag = document.querySelector('meta');
    console.log(coloeScheme, metaTag)
}
//setColorScheme("light");

const chooser = document.getElementById("color-chooser");
console.log(chooser)

function changeColors(event) {
    console.log(event)
    setColorScheme(event.target.value);
}
chooser.addEventListener("change", changeColors);