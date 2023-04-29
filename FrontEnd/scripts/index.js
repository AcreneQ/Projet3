const gallery = document.querySelector(".gallery");
const filter = document.getElementById('categories')
const categoryObject = document.getElementById('category-object')
const categoryAll = document.getElementById('category-all')
const categoryAppartements = document.getElementById('category-appartements')
const categoryHotels = document.getElementById('category-hotels')

let works

fetch("http://localhost:5678/api/works")
    .then(response => response.json())
    .then(data => {
        data.forEach(item => {
            const figure = document.createElement("figure");
            const img = document.createElement("img");
            img.crossorigin = "anonymous";
            img.src = item.imageUrl;
            img.alt = item.title;
            const figcaption = document.createElement("figcaption");
            figcaption.textContent = item.title;
            figure.appendChild(img);
            figure.appendChild(figcaption);
            gallery.appendChild(figure);
        });
        console.log(data)
        works = data
    });

categoryObject.addEventListener('click', () => {
    console.log('click')
    console.log("works:", works)

    const objects = works.filter(item => item.categoryId === 1)

    console.log("object:", objects)

    
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild)
    }

    objects.forEach(item => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.crossorigin = "anonymous";
        img.src = item.imageUrl;
        img.alt = item.title;
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = item.title;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
})
categoryAppartements.addEventListener('click', () => {
    console.log('click')
    console.log("works:", works)

    const appartements = works.filter(item => item.categoryId === 2)

    console.log("appartements:", appartements)

    
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild)
    }

    appartements.forEach(item => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.crossorigin = "anonymous";
        img.src = item.imageUrl;
        img.alt = item.title;
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = item.title;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
})

categoryHotels.addEventListener('click', () => {
    console.log('click')
    console.log("works:", works)

    const hotels = works.filter(item => item.categoryId === 3)

    console.log("hotels:", hotels)

    
    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild)
    }

    hotels.forEach(item => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.crossorigin = "anonymous";
        img.src = item.imageUrl;
        img.alt = item.title;
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = item.title;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
})
categoryAll.addEventListener('click', () => {
    console.log('click')
    console.log("works:", works)


    while (gallery.firstChild) {
        gallery.removeChild(gallery.firstChild)
    }

    works.forEach(item => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        img.crossorigin = "anonymous";
        img.src = item.imageUrl;
        img.alt = item.title;
        const figcaption = document.createElement("figcaption");
        figcaption.textContent = item.title;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
})
