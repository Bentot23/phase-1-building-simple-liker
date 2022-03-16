// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'



// Your JavaScript code goes here!
const heartLike = document.querySelectorAll('.like-glyph')
// const errorModal = document.querySelector("#modal")

document.addEventListener("DOMContentLoaded", () => {
  // console.log('DOM Content is Loaded')
  // errorModal.classList.add('hidden')
  updateHeart()
})

function hideError() {
  errorModal.classList.add('hidden')
}

function updateHeart() {
    // console.log(heartLike)
    heartLike.forEach((like) => {
      // console.log('LIKE', like)
      like.addEventListener('click', () => {
        mimicServerCall()
        .then(resp => {
          console.log(resp)
          like.classList.add('activated-heart')
        })
        .catch((error) => {
          console.log(error)
          console.log(EMPTY_HEART)
          errorModal.classList.remove('hidden')
          like.classList.remove('activated-heart')
        })
          setTimeout(hideError, 3000)
      })
    })
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
