// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    const header1 = document.createElement('header')
    const dateSpan = document.createElement('span')
    const h1 = document.createElement('h1')
    const tempSpan = document.createElement('span')

    header1.classList.add('header')
    dateSpan.classList.add('date')
    tempSpan.classList.add('temp')

    header1.appendChild(dateSpan)
    header1.appendChild(h1)
    header1.appendChild(tempSpan)

    dateSpan.textContent = ('March 28, 2020')
    h1.textContent = ('Lambda Times')
    tempSpan.textContent = ('98°')

    return header1

}

const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(Header())