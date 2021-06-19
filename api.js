const baseUrl = "http://localhost:3006/";

const makeRequest = (method, url) => {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, baseUrl + url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}



const API = {
    getItems: () => {
        return makeRequest("GET", "item");
        //ajax("GET", "item", fn);
        //  return axios.get('http:/localhost:3006/item');
    },
    getItem: (id) => {
        return makeRequest("GET", "item/" + id);
        // return axios.get('http:/localhost:3006/item/' + id);
    },

    getPicture: (picturePath) => {
        /*  return axios.get('http:/localhost:3006/' + picturePath, {
             responseType: 'blob'
         }) */
    }
}


/* ajax("GET", "item", function (items) {
    console.log(items);
    return items;
}); */




/* const makeRequest = (method, url) => {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        xhr.open(method, baseUrl + url);
        xhr.onload = function () {
            if (this.status >= 200 && this.status < 300) {
                resolve(JSON.parse(xhr.response));
            } else {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };

        xhr.onerror = function () {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };

        xhr.send();
    });
} */

/* export const API = {
    getItems: () => {
         return axios.get('http:/localhost:3006/item');
    },
    getItem: (id) => {

         return axios.get('http:/localhost:3006/item/' + id);
    },

    getPicture: (picturePath) => {
         return axios.get('http:/localhost:3006/' + picturePath, {
             responseType: 'blob'
         })
    }
}

 const getImgUrl = async path => {
    return await API.getPicture(path).then(response => {
        return window.URL.createObjectURL(new Blob([response.data]));
    });
} */