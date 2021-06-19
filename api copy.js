const instance = axios.create({
    baseURL: "http:/localhost:3006/",
})


export const API = {
    getItems: () => {
        return axios.get('http:/localhost:3006/item');
    },

    getPictureFile: (picturePath) => {
        return axios.get('http:/localhost:3006/' + picturePath, {
            responseType: 'blob'
        })
    }
}



//import { API } from "./api";

const API = {
    getItems: () => {
        return axios.get('http:/localhost:3006/item');
    },

    getPicture: (picturePath) => {
        return axios.get('http:/localhost:3006/' + picturePath, {
            responseType: 'blob'
        })
    }
}


const createCatalogItem = async (item) => {
    //./img/google-home-sm.png

    /*   API.getPictureFile("/picture/min/80f09214-ea18-46bf-9cbd-22d7493060d9").then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          var img = document.createElement('img');
          img.src = url;
          const catalog = document.querySelector('.catalog');
          catalog.append(img);
      }); */
    /* 
        await API.getPicture().then(response => {
            pictureUrl = window.URL.createObjectURL(new Blob([response.data])); */
    return `<div class="catalog-body">
    <div class="offset-controls">
        <i class="icon-favorite ${item.like && "active"}"></i>
    </div>
    <a href="detailed-page.html#${item.id}">
        <div class="item-img">
            <img src="${pictureUrl}" alt="${item.picture.alt}" />   
        </div>
        <div class="item-lable">
            ${item.name}
        </div>
        <span class="price">$${item.price.value}</span>
    </a>
</div>`
};

export const getImage = (url) => {
    return new Promise((res, rej) => {
        let image = new Image();
        image.src = url;
        image.onload = () => res(image);
        image.onerror = e => rej(e);
    })
}


const getPictures = items => {
    return items.map(i => {
        API.getPicture(i.picture.path).then(response => {
            return window.URL.createObjectURL(new Blob([response.data]));
        });
    });
}


const getItems = () => {
    API.getItems().then(response => {
        console.log(response);
        return response.data.content
    });
}


/* let newitem = document.createElement("div");
newitem.className = "catalog-item";
newitem.innerHTML = createCatalogItem(item);
html.append(newitem); */



/* const hash = window.location.hash;
if (!hash) {
    const catalog = document.querySelector('.catalog');
} else {

} */
