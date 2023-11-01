const showButton = document.getElementById('show-button');
const imageList = document.getElementById('image-list');
const plant = document.getElementById('plant');
const waterDrops = document.getElementById('water-drops');
const waterCan = document.getElementById('water-can');
const dropsNeeded = document.getElementById('drops-needed');
const waterButton = document.getElementById('water-button');

let waterDropCount = 0;
let dropsNeededForPlant = 0;

function updateWaterDrops() {
    waterDropCount++;
    waterDrops.textContent = `${waterDropCount} giọt nước`;
}

setInterval(updateWaterDrops, 3000); // Tự động cộng 1 giọt nước mỗi 30 giây

showButton.addEventListener('click', () => {
    // Ẩn nút hiển thị
    showButton.style.display = 'none';

    // Hiển thị danh sách hình ảnh cây
    imageList.style.display = 'flex';

    // Xóa bất kỳ hình ảnh nào có trong danh sách (nếu có)
    while (imageList.firstChild) {
        imageList.removeChild(imageList.firstChild);
    }

    // Tải và hiển thị 7 hình ảnh từ thư mục "IMG/plant" với đuôi .png
    for (let i = 1; i <= 7; i++) {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        imageItem.style.backgroundImage = `url(IMG/plant/cay${i}.png)`;
        imageList.appendChild(imageItem);
    }
});



waterButton.addEventListener('click', () => {
    if (waterDropCount <= dropsNeededForPlant) {
        dropsNeededForPlant -= waterDropCount;
        dropsNeeded.textContent = `${dropsNeededForPlant} giọt cần tưới`;
        waterDropCount = 0;
        waterDrops.textContent = `${waterDropCount} giọt nước`;
        // Thực hiện tưới cây ở đây
        console.log('Cây đã được tưới!');
    } else {
        console.log('Không đủ nước để tưới cây!');
    }
});

imageList.addEventListener('click', (event) => {
    if (event.target.className === 'image-item') {
        // Khi nhấn vào một hình ảnh, đặt số nước cần tưới là 22
        dropsNeededForPlant = 22;
        dropsNeeded.textContent = `${dropsNeededForPlant} giọt cần tưới`;
        // Khi nhấn vào một hình ảnh, đặt nền của div plant là hình ảnh đó
        const imageUrl = event.target.style.backgroundImage;
        plant.style.backgroundImage = imageUrl;
        // Ẩn danh sách hình ảnh sau khi đã chọn
        imageList.style.display = 'none';
        // Hiển thị lại nút hiển thị
        showButton.style.display = 'block';
    }
});
