const gallery = document.getElementById("gallery");

async function getImages() {
    try {
        const image = await fetch("http://localhost:3000/api/images");

        if(!image.ok){
            throw new error("Failed fetching image");
        }

        const data = await image.json();
        
        data.photos.forEach(photo => {
            const img = document.createElement("img");

            img.src = photo.src.large;
            img.alt = photo.alt || "Pexels Image";

            gallery.appendChild(img);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

getImages();