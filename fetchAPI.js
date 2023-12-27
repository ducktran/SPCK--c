let useAPIfeatures = document.getElementsByClassName("useAPIfeatures")
let useAPItrending = document.getElementsByClassName("useAPItrending")
let useAPIcategories = document.getElementsByClassName("useAPIcategories")
let useAPImostPlayed = document.getElementsByClassName("useAPImostPlayed")
fetch("./features.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {  //lấy ra từng phần tử trong file json
            for (j = 0; j < useAPIfeatures.length; j++) { //lập ra tương ứng các phần tử có trong file json
                useAPIfeatures[j].innerHTML += `
                <div class="col-lg-3 col-md-6">
                    <a href="#">
                        <div class="item">
                        <div class="image">
                            <img src="${data[i].image}" alt="" style="max-width: 44px;">
                        </div>
                        <h4>${data[i].title}</h4>
                        </div>
                    </a>
                </div>
                `
            }
        }
    })

fetch("./trending.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPItrending.length; j++) {
                useAPItrending[j].innerHTML += `
                <div class="col-lg-3 col-md-6">
                    <div class="item">
                        <div class="thumb">
                        <a href="product-details.html"><img src="${data[i].image}" alt=""></a>
                        <span class="price"></em>${data[i].price}</span>
                        </div>
                        <div class="down-content">
                        <span class="category">${data[i].category}</span>
                        <h4>${data[i].title}</h4>
                        <a href="product-details.html"><i class="fa fa-shopping-bag"></i></a>
                        </div>
                    </div>
                </div>
                `
            }
        }
    })

fetch("./categories.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPIcategories.length; j++) {
                useAPIcategories[j].innerHTML += `
                <div class="col-lg col-sm-6 col-xs-12">
                    <div class="item">
                        <h4>Action</h4>
                        <div class="thumb">
                            <a href="product-details.html"><img src="${data[i].image}" alt=""></a>
                        </div>
                    </div>
                </div>
                `
            }
        }
    })

fetch("./most-played.json")
    .then((response) => response.json())
    .then((data) => {
        for (i = 0; i < data.length; i++) {
            for (j = 0; j < useAPImostPlayed.length; j++) {
                useAPImostPlayed[j].innerHTML += `
                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="item">
                        <div class="thumb">
                            <a href="product-details.html"><img src="${data[i].image}" alt=""></a>
                        </div>
                        <div class="down-content">
                            <span class="category">${data[i].category}</span>
                            <h4>${data[i].title}</h4>
                            <a href="product-details.html">Explore</a>
                        </div>
                    </div>
                </div>
                `
            }
        }
    })