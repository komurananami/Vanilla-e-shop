class Carrossel {
  constructor(obj) {
    this._els = [];
    this._current = 0;
    this._imgContainer = document.createElement("div");
    this._moveLeft = document.createElement("div");
    this._moveRight = document.createElement("div");

    if (obj.images) {
      this.images = obj.images;
    }

    if (obj.el) {
      this.el = obj.el;
      this.el.classList.add("__carrossel-container");
    }

    if (obj.el && obj.images && obj.images.length) {
      this.createElements();

      if (obj.images.length > 1) {
        this.el.appendChild(this._moveLeft);
      }

      this.el.appendChild(this._imgContainer);

      if (obj.images.length > 1) {
        this.el.appendChild(this._moveRight);
      }

      this.renderImages();
      this.showImage();
    }
  }

  renderImages() {
    for (let i = 0; i < this.images.length; i++) {
      const imgUrl = this.images[i];
      const imgEl = this.createImgElement(i, imgUrl);
      this._imgContainer.appendChild(imgEl);
    }
  }

  createImgElement(idx, imgUrl) {
    const el = document.createElement("img");
    el.src = imgUrl;
    el.classList.add("__carrossel-img");
    el.style.display = "none";

    const existsIndex = this._els.findIndex((x) => x === imgUrl);
    if (existsIndex > -1) {
      this._els[existsIndex] = el;
    } else {
      this._els.push(el);
    }

    return el;
  }

  createElements() {
    this._moveLeft.innerHTML = "<";
    this._moveLeft.classList.add("__carrossel-move-left");
    this._moveLeft.onclick = () => {
      this._current--;

      if (this._current < 0) {
        this._current = this.images.length - 1;
      }

      this.showImage();
    };

    this._moveRight.innerHTML = ">";
    this._moveRight.classList.add("__carrossel-move-right");
    this._moveRight.onclick = () => {
      this._current++;

      if (this._current > this.images.length - 1) {
        this._current = 0;
      }

      this.showImage();
    };
  }

  showImage() {
    for (let i = 0; i < this._els.length; i++) {
      const img = this._els[i];
      img.style.display = "none";
    }

    this._els[this._current].style.display = "block";
  }
}
