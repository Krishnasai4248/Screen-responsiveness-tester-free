document.getElementById('loadButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value;
    const iframe = document.getElementById('siteFrame');
    const deviceSelect = document.getElementById('deviceSelect').value;

    // Validate URL
    if (!/^https?:\/\//i.test(urlInput)) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }

    iframe.src = urlInput;

    // Adjust iframe size based on selected device
    if (deviceSelect) {
        const [width, height] = deviceSelect.split('x').map(Number);
        document.querySelector('.device-frame').style.width = `${width}px`;
        document.querySelector('.device-frame').style.height = `${height}px`;
        iframe.style.height = `${height - 40}px`; // Adjust iframe height for borders
    } else {
        alert('Please select a device.');
    }
});
