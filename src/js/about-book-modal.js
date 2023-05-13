const bookModalContainer = document.querySelector('.modal');
const openModalBtn = document.querySelector('#openModalBtn');
const storageButton = document.querySelector('.storage-button');
const deleteStorageBtn = document.querySelector('.storage-delete-button');
const storageDescription = document.querySelector('.storage-description');
const bookId = '643282b2e85766588626a0fc';
const secondBookId = '643282b1e85766588626a080';
const STORAGE_KEY = 'storage-data';
const storageArr = [];
let storageObj = {};

deleteStorageBtn.addEventListener('click', onStorageDelete);
storageButton.addEventListener('click', onStorageAdd);
openModalBtn.addEventListener('click', onModalOpen);

function onModalOpen() {
  createModal(bookId);
}

async function fetchBookById(bookId) {
  try {
    storageObj = {};
    const response = await fetch(
      `https://books-backend.p.goit.global/books/${bookId}`
    );
    const data = await response.json();
    storageObj = {
      book_image: data.book_image,
      title: data.title,
      author: data.author,
      marketAmazon: data.buy_links[0].url,
      marketAppleBooks: data.buy_links[1].url,
      marketBookshop: data.buy_links[4].url,
      list_name: data.list_name,
      id: data._id,
    };
    console.log(storageObj);
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

function createMarkup(data) {
  const bookModalImage = data.book_image;
  const bookTitle = data.title;
  const bookAuthor = data.author;
  const marketAmazon = data.buy_links[0].url;
  const marketAppleBooks = data.buy_links[1].url;
  const marketBookshop = data.buy_links[4].url;

  const html = `
  <img src="${bookModalImage}" alt="Book Image" class="image__about-book-modal">
  <h2>${bookTitle}</h2>
  <p> ${bookAuthor}</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error, iure nam facere exercitationem quibusdam cum in quasi impedit perferendis porro. Vero quos minima doloribus magni corporis beatae ducimus officiis! Rerum?</p>
  <ul> <li><a href="${marketAmazon}" target="_blank"
    > <img
    width="28"
    height="28"
    src="src/images/png-icons/shops/amazon-icon.png"
    alt="close-icon"
  /></a></li>
  <li><a href="${marketAppleBooks}" target="_blank"
    > <img
    width="28"
    height="28"
    src="src/images/png-icons/shops/first-book-shop-icon.png"
    alt="close-icon"
  /></a></li>
  <li><a href="${marketBookshop}" target="_blank"
    > <img
    width="28"
    height="28"
    src="src/images/png-icons/shops/second-book-shop-icon.png"
    alt="close-icon"
  /></a></li>
</ul>
  `;

  bookModalContainer.insertAdjacentHTML('afterbegin', html);
}

async function createModal(bookId) {
  storageObj = {}; // ????????????????????????????????????
  try {
    const data = await fetchBookById(bookId);
    createMarkup(data);
    return data;
  } catch (error) {
    console.error('Error', error);
    throw error;
  }
}

function onStorageAdd(e) {
  const dataToSave = storageObj;
  storageArr.push(dataToSave);
  storageDescription.textContent =
    'Сongratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';
  e.target.textContent = 'Remove from the shopping list';
  localStorage.setItem(STORAGE_KEY, JSON.stringify(storageArr));
}

function onStorageDelete() {
  const idToDelete = storageObj.id;
  const storageArr = JSON.parse(localStorage.getItem(STORAGE_KEY));
  storageDescription.textContent = '';

  const indexToDelete = storageArr.findIndex(obj => obj.id === idToDelete);
  const newStorageArr = storageArr.splice(indexToDelete + 1, 1);

  localStorage.setItem(STORAGE_KEY, JSON.stringify(newStorageArr));
}