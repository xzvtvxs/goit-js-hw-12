import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery, PER_PAGE} from "./js/pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader, loadMoreBtn, showLoadMoreButton, hideLoadMoreButton,} from "./js/render-functions";

const form = document.querySelector(".form");
const input = document.querySelector('[name = "search-text"]');
let currentQuery = '';
let currentPage = 1;
let totalHits = 0;
// const input = form.elements["search-text"];

form.addEventListener('submit', onSearchFormSubmit);
loadMoreBtn.addEventListener('click', onLoadMoreClick);
async function onSearchFormSubmit(e) {
    e.preventDefault();
    const query = input.value.trim();
    if (!query) {
        iziToast.warning({
            title: 'Warning!',
            message: 'Please enter a search request!',
            position: 'topRight',
        });
        return;
    }
    currentQuery = query;
    currentPage = 1;
    totalHits = 0;
    clearGallery();
    hideLoadMoreButton();
    showLoader();
    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        if (!data.hits || data.hits.length === 0) {
            hideLoader();
            hideLoadMoreButton();
            iziToast.info({
                title: 'Attention!',
                message: 'Sorry, there are no images matching your search query. Please try again!',
                position: 'topRight',
            });
            return;
        }
        totalHits = data.totalHits;
        createGallery(data.hits);
        const isMorePages = currentPage * PER_PAGE < totalHits;
        if (isMorePages) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.info({
                title: 'Attention!',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        };
        hideLoader();
    } catch(error) {
        hideLoader();
        hideLoadMoreButton();
        iziToast.error({
            message: 'Something went wrong! Please try again later!',
            position: 'topRight',
            color: '#EF4040',
            messageColor: '#FAFAFB',
            iconText: '',
            iconUrl: './img/error-icon.svg',
            iconColor: '#FAFAFB',
        });
    }
    form.reset();
};

async function onLoadMoreClick() { 
    currentPage += 1;
    hideLoadMoreButton();
    showLoader();
    try {
        const data = await getImagesByQuery(currentQuery, currentPage);
        if (!data.hits || data.hits.length === 0) {
            hideLoader();
            iziToast.info({
                title: 'Attention!',
                message: 'No more images!',
                position: 'topRight',
            });
            return;
        }
        createGallery(data.hits);
        smoothScroll();
        const isMorePages = currentPage * PER_PAGE < totalHits;
        if (isMorePages) {
            showLoadMoreButton();
        } else {
            hideLoadMoreButton();
            iziToast.info({
                title: 'Attention!',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight',
            });
        };
        hideLoader();
    } catch (error) {
        hideLoader();
        hideLoadMoreButton();
        console.log('errorSubmit', error);
        console.log('response', error?.response);
        iziToast.error({
            message: 'Something went wrong! Please try again later!',
            position: 'topRight',
            color: '#EF4040',
            messageColor: '#FAFAFB',
            iconText: '',
            iconUrl: './img/error-icon.svg',
            iconColor: '#FAFAFB',
        });
    };
    
};

function smoothScroll() { 
    const firstCard = document.querySelector('.gallery-item');
    if (!firstCard)
        return;
    const cardHeight = firstCard.getBoundingClientRect().height;
    window.scrollBy({
        top: cardHeight * 5,
        behavior: 'smooth',
    })
};

// getBoundingClientRect() Метод JS, определяет положение элемента относительно видимой области экрана. Взависимости от того какой размер экрана у пользователя.Возвращает объект с всеми размерами экрана

