document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const images = ["imgs/news1.jpg", "imgs/news2.jpg", "imgs/news3.jpg", "imgs/news4.jpg", "imgs/news5.jpg"];
let currentIndex = 0;

const imgElement = document.getElementById("img-1");

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    imgElement.src = images[currentIndex];
}

imgElement.addEventListener("click", changeImage);