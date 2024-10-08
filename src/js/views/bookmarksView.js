import view from './view.js';
import previewView from './previewView.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class BookmarksView extends view {
  _parentElement = document.querySelector('.bookmarks__list');
  _errorMessage =
    'No bookmarks anymore! Please find a nice recipe and then bookmarks it ;)';
  _message = '';

  addHandlerRender(handler) {
    window.addEventListener('load', handler);
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}
export default new BookmarksView();
