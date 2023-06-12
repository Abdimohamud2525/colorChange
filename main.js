const colorSwitcher = document.querySelectorAll(".btn");
const h1Content = document.querySelectorAll(".h1-content");
const text = document.querySelector(".text");

const input = document.querySelector(".fontsize");
const input2 = document.querySelector(".borderradius");
const input3 = document.querySelector(".fontweight");
const textTransform = document.querySelector("#textTransform");


colorSwitcher.forEach((color) => {
    color.addEventListener("click", (element) => {
        h1Content.forEach((h1) => {
            h1.style.backgroundColor = element.target.id;
        });
        text.style.color = originalTextColor;
    });
});


input.addEventListener("input", (event) => {
    const fontsize = event.target.value + 'px';
    h1Content.forEach((h1) => {
        h1.style.fontSize = fontsize;
    });
});

input2.addEventListener("input", (event) => {
    const borderRadius = event.target.value + 'px';
    h1Content.forEach((h1) => {
        h1.style.borderRadius = borderRadius;
    });
});

input3.addEventListener("input", (event) => {
    const fontweight = event.target.value;
    h1Content.forEach((h1) => {
        h1.style.fontWeight = fontweight;
    });
});

textTransform.addEventListener("change", (event) => {
    const transformValue = event.target.value;
    h1Content.forEach((h1) => {
        h1.style.textTransform = transformValue;
    });
});

