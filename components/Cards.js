// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

function cardMaker(articleObj) {
    const card = document.createElement('div')
    const headlineDiv = document.createElement('div')
    const authorDiv = document.createElement('div')
    const imgDiv = document.createElement('div')
    const img = document.createElement('img')
    img.setAttribute('src', articleObj.authorPhoto)
    const authorSpan = document.createElement('span')

    card.classList.add('card')
    headlineDiv.classList.add('headline')
    authorDiv.classList.add('author')
    imgDiv.classList.add('img-container')

    card.appendChild(headlineDiv)
    card.appendChild(authorDiv)
    authorDiv.appendChild(imgDiv)
    imgDiv.appendChild(img)
    authorDiv.appendChild(authorSpan)

    headlineDiv.textContent = (articleObj.headline)
    authorSpan.textContent = (`By ${articleObj.authorName}`)

    card.addEventListener('click', () => {
        console.log(articleObj.headline)
      })

    return card
}

const cardsContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-api.herokuapp.com/articles')
        .then(res => {
            const javaArr = res.data.articles.javascript
            javaArr.forEach(element => {
                cardsContainer.appendChild(cardMaker(element))
            }); 
            
            const bootArr = res.data.articles.bootstrap
            bootArr.forEach(element => {
                cardsContainer.appendChild(cardMaker(element))
            })

            const techArr = res.data.articles.technology
            techArr.forEach(element => {
                cardsContainer.appendChild(cardMaker(element))
            })

            const jArr = res.data.articles.jquery
            jArr.forEach(element => {
                cardsContainer.appendChild(cardMaker(element))
            })

            const nodeArr = res.data.articles.node
            nodeArr.forEach(element => {
                cardsContainer.appendChild(cardMaker(element))
            })
        })
        .catch(err => {
            console.log(err)
        })