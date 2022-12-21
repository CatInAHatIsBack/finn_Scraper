

class listing {
    constructor(title, href) {
        this.title= title;
        this.href = href; 
    }
}
//    gets listings and filters by new today
let myListings = []
var elements = document.querySelectorAll('.ads__unit');
var new_listings = [...elements].filter(function (element) {
    console.log(element)
    elements[1].querySelector('.u-stone')
    
    var time = element.querySelector('.u-stone')
    if (time) {
        let splitter = time.textContent.split('|')
        let title = element.querySelector('.ads__unit__content').textContent 
        let href = element.querySelector('.ads__unit__link').href
        console.log("title")
        console.log(title)
        console.log("href")
        console.log(href)
        myListings.push(new listing(title, href))
        console.log(splitter)
        return splitter[0].trim() === "Ny i dag"
    }
});
