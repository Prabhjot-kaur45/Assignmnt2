// Define the gallery items in an array (Object format)
const galleryItems = [
    { full: "flowers-red-large.jpg", thumb: "flowers-red-large.jpg", caption: "Red tulips, a symbol of love" },
    { full: "flowers-purple-large.jpg", thumb: "flowers-purple-large.jpg", caption: "purple petals, radiating elegance and mystery" },
    { full: "flowers-pink-large.jpg", thumb: "flowers-pink-large.jpg", caption: "Graceful, delicate, vibrant pink petals" },
    { full: "flowers-yellow-large.jpg", thumb: "flowers-yellow-large.jpg", caption: "Bright, cheerful, radiant sunflowers" },
    { full: "flowers-white-large.jpg", thumb: "flowers-white-large.jpg", caption: "white blossoms in full bloom" },
];

// Function to display the thumbnail images dynamically
function displayThumbnails() {
    const thumbnailList = document.getElementById("thumbnail-list");

    // Iterate through the galleryItems array and create <li> and <img> for each item
    galleryItems.forEach(item => {
        const listItem = document.createElement("li");
        const img = document.createElement("img");
        img.src = item.thumb;
        img.alt = item.category;
        img.classList.add("thumbnail");
        listItem.appendChild(img);
        thumbnailList.appendChild(listItem);

        // Add event listener to update the featured image and caption when a thumbnail is clicked
        img.addEventListener("click", function() {
            const featuredImg = document.getElementById("featured-img");
            const caption = document.getElementById("image-caption");
            featuredImg.src = item.full;
            caption.textContent = item.caption;

            // Update the active state for thumbnails
            document.querySelectorAll(".thumbnail").forEach(thumbnail => thumbnail.classList.remove("active"));
            img.classList.add("active");
        });
    });
}

// Call the function to populate the thumbnails
displayThumbnails();