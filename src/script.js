window.onload = function() {
  console.log('page loaded')

  let tagButtons = document.querySelectorAll('.tag-button')
  for (let i = 0; i < tagButtons.length; i++) {
    let button = tagButtons[i]
    button.addEventListener('click', function(e) {
      let clickedButton = e.target
      if (clickedButton.classList.contains('selected')) {
        clickedButton.classList.remove('selected')
        showOnlyPostsWithThisTag()
      } else {
        for (let j = 0; j < tagButtons.length; j++) {
          tagButtons[j].classList.remove('selected')
        }
        clickedButton.classList.add('selected')
      }
      let dataTag = clickedButton.attributes['data-tag']
      if (dataTag) {
        console.log('this button was clicked', dataTag.value)
        showOnlyPostsWithThisTag(dataTag.value)
      }
    })
  }
  console.log('those are my tag buttons', tagButtons)
}

function showOnlyPostsWithThisTag(tag) {
  let thumbnails = document.querySelectorAll('.thumbnail')
  for (let i = 0; i < thumbnails.length; i++) {
    let thumb = thumbnails[i]
    if (tag == undefined) {
      thumb.classList.remove('hidden')
    } else {
      if (thumb.classList.contains(`tag-${tag}`)) {
        thumb.classList.remove('hidden')
      } else {
        thumb.classList.add('hidden')
      }
    }
  }
  console.log('I should be showing only posts of the tag', tag)
}
