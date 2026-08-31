const hexCode = document.getElementById("hex-code");
const colorBox = document.getElementById("color-box");

generateHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");

    colorBox.style.backgroundColor = randomColor;
    hexCode.textContent = randomColor;
}

copyHex = () => {
    const hexCodeVal = hexCode.textContent;

    navigator.clipboard.writeText(hexCodeVal);

    alert(`Copied: ${hexCodeVal}`);
}