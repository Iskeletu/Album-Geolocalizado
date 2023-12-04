//Makes various GET requests to json-server API to get the carousel image URL's.
async function GetCarouselImage(slotnumber) {
    let loadedjson;
    let res = await fetch("http://localhost:3000/Carousel");
    loadedjson = await res.json();
    
    const temp = "Slot" + slotnumber.toString();
    const photo = loadedjson[temp]["Photo Identifier"].toString();

    res = await fetch("http://localhost:3000/Photos");
    loadedjson = await res.json();

    return loadedjson[photo]["URL"].toString()
}

//Makes various GET requests to json-server API to get the carousel image titles.
async function GetCarouselTitle(slotnumber) {
    let loadedjson;
    let res = await fetch("http://localhost:3000/Carousel");
    loadedjson = await res.json();
    
    const temp = "Slot" + slotnumber.toString();
    const photo = loadedjson[temp]["Photo Identifier"].toString();

    res = await fetch("http://localhost:3000/Photos");
    loadedjson = await res.json();

    const album = loadedjson[photo]["Album"].toString()

    res = await fetch("http://localhost:3000/Albums");
    loadedjson = await res.json();

    return loadedjson[album]["Title"].toString()
}

//Makes various GET requests to json-server API to get the carousel image descriptions.
async function GetCarouselDescription(slotnumber) {
    let loadedjson;
    let res = await fetch("http://localhost:3000/Carousel");
    loadedjson = await res.json();
    
    const temp = "Slot" + slotnumber.toString();
    const photo = loadedjson[temp]["Photo Identifier"].toString();

    res = await fetch("http://localhost:3000/Photos");
    loadedjson = await res.json();

    const album = loadedjson[photo]["Album"].toString()

    res = await fetch("http://localhost:3000/Albums");
    loadedjson = await res.json();

    return loadedjson[album]["Description"].toString()
}

//Updates gallery text data with json-server data.
async function updateGalleryData() {
    let loadedjson;
    let res = await fetch("http://localhost:3000/Albums");
    loadedjson = await res.json();

    //Card 1.
    document.getElementById('card1-h5').textContent = loadedjson["Album-1"]["Title"]
    document.getElementById('card1-p').textContent = loadedjson["Album-1"]["Description"]

    //Card 2.
    document.getElementById('card2-h5').textContent = loadedjson["Album-2"]["Title"]
    document.getElementById('card2-p').textContent = loadedjson["Album-2"]["Description"]

    //Card 3.
    document.getElementById('card3-h5').textContent = loadedjson["Album-3"]["Title"]
    document.getElementById('card3-p').textContent = loadedjson["Album-3"]["Description"]

    //Card 4.
    document.getElementById('card4-h5').textContent = loadedjson["Album-4"]["Title"]
    document.getElementById('card4-p').textContent = loadedjson["Album-4"]["Description"]

    //Card 5.
    document.getElementById('card5-h5').textContent = loadedjson["Album-5"]["Title"]
    document.getElementById('card5-p').textContent = loadedjson["Album-5"]["Description"]

    //Card 6.
    document.getElementById('card6-h5').textContent = loadedjson["Album-6"]["Title"]
    document.getElementById('card6-p').textContent = loadedjson["Album-6"]["Description"]

    //Card 7.
    document.getElementById('card7-h5').textContent = loadedjson["Album-7"]["Title"]
    document.getElementById('card7-p').textContent = loadedjson["Album-7"]["Description"]

    //Card 8.
    document.getElementById('card8-h5').textContent = loadedjson["Album-8"]["Title"]
    document.getElementById('card8-p').textContent = loadedjson["Album-8"]["Description"]
}

//Runs on page load.
async function onLoad() {
    //Updates carousel images.
    document.getElementById('icimg-1').src = await GetCarouselImage(1);
    document.getElementById('icimg-2').src = await GetCarouselImage(2);
    document.getElementById('icimg-3').src = await GetCarouselImage(3);

    //Updates carousel titles.
    document.getElementById('ich5-1').textContent = await GetCarouselTitle(1);
    document.getElementById('ich5-2').textContent = await GetCarouselTitle(2);
    document.getElementById('ich5-3').textContent = await GetCarouselTitle(3);

    //Updates carousel descriptions.
    document.getElementById('icp-1').textContent = await GetCarouselDescription(1);
    document.getElementById('icp-2').textContent = await GetCarouselDescription(2);
    document.getElementById('icp-3').textContent = await GetCarouselDescription(3);

    //Calls for data update on the entire gallery.
    await updateGalleryData();
}