function displaySelectedImage() {
    const input = document.getElementById('imageInput');
    const image = document.getElementById('selectedImage');
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            image.style.display = 'block';
            image.src = e.target.result;
        };
        reader.readAsDataURL(input.files[0]);
    }
}
