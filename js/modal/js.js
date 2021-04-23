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

  // setBody(el, product, myCart) {
  setBody(el, product, setCount) {
    this.countBtnContainer = document.createElement("div");
    const minusBtn = document.createElement("button");
    const plusBtn = document.createElement("button");

    this.body.innerHTML = "";
    console.log("product, setCount取れてる", product, setCount);

    if (typeof el === "string") {
      this.body.innerHTML = el;
    } else {
      this.body.appendChild(el);
      // minusBtn.innerHTML = "-";
      // minusBtn.style.borderRadius = "0px";
      // minusBtn.style.margin = "5px";
      // minusBtn.style.padding = "4px 7px";
      // minusBtn.onclick = this.countMinus;
      // minusBtn.onclick = function () {
      //   console.log("---------");
      // };
      // minusBtn.onclick = () => {
      //   console.log("minus", product, setCount);
      //   if (setCount > 1) {
      //     setCount -= 1;
      //     console.log("-1しました", setCount);
      //     App.events.addCartHandler(product, setCount);
      //   } else {
      //     console.log("countが１以下だよ");
      //   }
      // };

      // plusBtn.innerHTML = "+";
      // plusBtn.style.borderRadius = "0px";
      // plusBtn.style.margin = "5px";
      // plusBtn.style.padding = "4px 5px";
      // plusBtn.onclick = function () {
      //   console.log("++++++++++");
      // };

      this.body.appendChild(this.countBtnContainer);
      // this.countBtnContainer.appendChild(minusBtn);
      // this.countBtnContainer.appendChild(plusBtn);

      // el.className = "__modal-inner-body";
    }

    this.body.appendChild(this.cancel);
    this.body.appendChild(this.confirm);
  }

  // show(el, product, myCart) {
  show(el, product, setCount) {
    if (el) {
      // this.setBody(el, product, myCart);
      this.setBody(el, product, setCount);
    }

    this.container.style.display = "block";
    console.log("ここのblockが効いてない", this.container);

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
    this.confirm.className = "__modal-confirm";
    this.cancel.className = "__modal-cancel";

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

  // countMinus() {
  //   console.log("hello");
  // }
}
