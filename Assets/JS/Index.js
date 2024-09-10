$(document).ready(function () {
    var cards = [
        {
            title: "Refactoring Horiseon",
            text: "Refactored the Horiseon website to make it more accessible and optimized for search engines.",
            imgSrc: "https://github.com/ABELTRAN177/Refactoring-Horiseon/assets/166947418/8c675761-984c-4efa-b519-7be067b5ebdb",
            link: "https://abeltran177.github.io/Refactoring-Horiseon/"
        },
        {
            title: "Managing Payroll Data",
            text: "A simple application that allows users to manage payroll data.",
            imgSrc: "https://github.com/ABELTRAN177/Managing-Payroll-Data/assets/166947418/d3fd2529-8a7a-468a-9527-8f02de3612bc",
            link: "https://abeltran177.github.io/Managing-Payroll-Data/"
        },
        {
            title: "My Blog",
            text: "A simple blog application that allows users to create, read, update, and delete blog posts.",
            imgSrc: "https://github.com/user-attachments/assets/9317a6bd-00e6-42d3-ac5e-8ae450b6d0cf",
            link: "https://abeltran177.github.io/My-Blog/"
        },
        {
            title: "Weather Dashboard",
            text: "A simple weather dashboard that allows users to search for the current weather and five-day forecast for any city.",
            imgSrc: "https://github.com/user-attachments/assets/e0ebcd48-8c2a-469e-896e-b1c0824824d8",
            link: "https://abeltran177.github.io/Weather-Dashboard/"
        },
        {
            title: "README Generator",
            text: "A simple command-line application that generates a README file based on user input.",
            imgSrc: "",
            link: "https://github.com/ABELTRAN177/README-CREATOR"
        },
        {
            title: "ADVANCED NOTE TAKER",
            text: "A simple note-taking application that allows users to create, read, update, and delete notes.",
            imgSrc: "",
            link: "https://abeltran177.github.io/ADVANCED-NOTE-TAKER/"
        },
        {
            title:"SVG LOGO CREATOR",
            text:"A simple application that allows users to create custom SVG logos.",
            imgSrc:"",
            link:"https://abeltran177.github.io/SVG-LOGO-CREATOR"
        },
        {
            title:"EMPLOYEE DATABASE MANANGER",
            text:"A simple application that allows users to manage an employee database.",
            imgSrc:"",
            link:"https://abeltran177.github.io/EMPLOYEE-DATABASE-MANAGER"
        },
        {
            title:"ECOMMERCE DEVELOPER",
            text:"A simple application that allows users to manage an ecommerce website.",
            imgSrc:"",
            link:"https://abeltran177.github.io/ECOMMERCE-DEVELOPER"
        }
    
    ];

    var carouselInner = document.querySelector(`.carousel-inner`);


    cards.forEach(function(card, index) {
        var activeClass = index === 0 ? 'active' : '';
        var cardHTML = `
        <div class="carousel-item ${activeClass}">
            <div class="d-flex justify-content-around">
                <div class="card" style="width: 18rem;">
                    <img src="${card.imgSrc}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.text}</p>
                        <a href="${card.link}" class="btn btn-primary">OPEN</a>
                    </div>
                </div>
            </div>
        </div>
        `;
        carouselInner.innerHTML += cardHTML;
    });

    $(`#carouselExampleIndicators`).on(`slide.bs.carousel`, function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(`.carousel-item`).length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                if (e.direction == `left`) {
                    $(`.carousel-item`).eq(i).appendTo(`.carousel-inner`);
                } else {
                    $(`.carousel-item`).eq(0).appendTo(`.carousel-inner`);
                }
            }
        }
    }
);
});





