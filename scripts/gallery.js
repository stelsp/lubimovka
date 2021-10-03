const galleryElement = document.querySelector('.gallery'),
galleryImage = galleryElement.querySelectorAll('.gallery__image'),
galleryPopup = document.querySelector('.popup'),
popupImage = document.querySelector('.popup__photo'),
btnClose = galleryPopup.querySelector('.buttons-nav_type_close'),
btnNext = galleryPopup.querySelector('.buttons-nav_type_nav-arrow-right'),
btnPrev = galleryPopup.querySelector('.buttons-nav_type_nav-arrow');
let newItem;

function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

galleryImage.forEach( item => {
  item.addEventListener('click', () => {
    popupImage.src = item.src;
    openPopup(galleryPopup);
  })
})

btnClose.addEventListener('click', () => {
  closePopup(galleryPopup);
})

btnNext.addEventListener('click', () => {
  galleryImage.forEach( (item, index, arr) => {
    if (item.src === popupImage.src) {
      if (index >= galleryImage.length-1) newItem = arr[0].src
      else newItem = arr[index+1].src;
    }
});
popupImage.src = newItem;

})

btnPrev.addEventListener('click', () => {
  galleryImage.forEach( (item, index, arr) => {
    if (item.src === popupImage.src) {
      if (index <= 0) newItem = arr[galleryImage.length-1].src
      else newItem = arr[index-1].src;
    }
});
popupImage.src = newItem;
})




