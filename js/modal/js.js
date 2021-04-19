class Modal {
  constructor(options = {}) {
    this.container = document.createElement("div");
    this.backdrop = document.createElement("div");
    this.modal = document.createElement("div");
    this.body = document.createElement("div");
    this.closeBtn = document.createElement("div");
    this.confirm = document.createElement("button");
    this.cancel = document.createElement("button");

    this.options = options;
    console.log("modal this.options", this.options);

    this.createEverything();

    if (options.body) {
      this.setBody(options.body);
    }
  }

  setBody(el) {
    this.body.innerHTML = "";

    if (typeof el === "string") {
      this.body.innerHTML = el;
    } else {
      this.body.appendChild(el);
    }

    this.body.appendChild(this.confirm);
    this.body.appendChild(this.cancel);
  }

  show(el) {
    if (el) {
      this.setBody(el);
    }

    this.container.style.display = "block";
    setTimeout(() => {
      this.closeListener();
    });
  }

  hide() {
    this.container.style.display = "none";
  }

  closeListener() {
    document.addEventListener(
      "click",
      (e) => {
        if (!this.modal.contains(e.target)) {
          this.hide();
        }
      },
      { once: true }
    );
  }
  setOnConfirm(callback) {
    this.options.onConfirm = callback;
  }

  createEverything() {
    this.container.classList.add("__modal-container");
    this.backdrop.classList.add("__modal-backdrop");
    this.modal.classList.add("__modal-modal");

    this.closeBtn.classList.add("__modal-close-btn");
    this.closeBtn.innerHTML = "⨉";
    this.closeBtn.onclick = () => {
      this.hide();
    };

    this.confirm.innerHTML = "Confirm";
    this.confirm.onclick = () => {
      this.hide();
      if (this.options.onConfirm) {
        this.options.onConfirm();
      }
    };

    this.cancel.innerHTML = "Cancel";
    this.cancel.onclick = () => {
      this.hide();
    };

    const el = document.createElement("div");
    el.classList.add("__modal-inner-container");
    el.appendChild(this.backdrop);
    el.appendChild(this.modal);

    this.body.classList.add("__modal-body");

    this.modal.appendChild(this.closeBtn);
    this.modal.appendChild(this.body);
    this.container.appendChild(el);
    document.body.appendChild(this.container);
  }
}
