import $ from "jquery";

class Modal {
  constructor() {
    this.openModalButton = $(".open-modal");
    this.modal = $(".modal");
    this.closeModalX = $(".modal__close");
    this.events();
  }

  events() {
    //clicking the open modal buttons
    this.openModalButton.click(this.openModal.bind(this));

    //clicking the x close modal buttons
    this.closeModalX.click(this.closeModal.bind(this));
    //pushes any key
    $(document).keyup(this.keyPressHandler.bind(this));
  }

  keyPressHandler(e) {
    if(e.keyCode == 27) {
      this.closeModal();
    }
  }

  openModal() {
    this.modal.addClass("modal--is-visible");
    return false;//prevents the link from taking users to the top of the page.
  }

  closeModal() {
    this.modal.removeClass("modal--is-visible");
    return false;
  }

}

export default Modal;
