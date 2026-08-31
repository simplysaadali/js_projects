const qrText = document.getElementById("qrText");
const qrImage = document.getElementById("qrImage");
const qrContainer = document.getElementById("qrContainer");
const downloadBtn = document.getElementById("downloadBtn");

function generateQR() {

    const text = qrText.value.trim();

    if (text === "") {
        alert("Please enter some text or a URL.");
        return;
    }

    // Encode the user's text so special characters work correctly
    const encodedText = encodeURIComponent(text);

    // QR Server API
    const qrURL =
        `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedText}`;

    // Set QR image
    qrImage.src = qrURL;

    // Show QR code
    qrContainer.style.display = "flex";

    // Show download button
    downloadBtn.style.display = "block";
}


function downloadQR() {

    const qrURL = qrImage.src;

    const link = document.createElement("a");

    link.href = qrURL;
    link.download = "qr-code.png";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}
