import {
  Component,
  Input,
  Output,
  OnChanges,
  SimpleChanges,
  AfterViewChecked,
} from '@angular/core';
import {
  ModalDismissReasons,
  NgbActiveModal,
  NgbModal,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="btn-close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      ></button>
    </div>
    <div class="modal-body">
      <p>Hello, {{ name }}!</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-outline-dark"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
})
export class NgbdModalContent {
  @Input() name: string | undefined;

  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-modal',
  template: `{{ showModal }}`,
  styles: [],
})
export class ModalComponent implements OnChanges {
  @Input() openModal = false;
  public showModal = false;
  closeResult: string | undefined = 'not yet';

  constructor(private modalService: NgbModal) {}
  ngOnChanges(changes: SimpleChanges): void {
    this.showModal = changes['openModal'].currentValue;
    console.log(this.showModal);
    if (this.showModal === true) {
      this.open();
    }
  }

  open() {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.componentInstance.name = 'Alex';
    // TODO: Fix updating the state value.

    modalRef.result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
        this.showModal = false;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        this.showModal = false;
      }
    );
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}

import { BuilderBlock } from '@builder.io/angular';

BuilderBlock({
  tag: 'builder-ngb-modal',
  name: 'ngb modal',
  image:
    'https://cdn.builder.io/api/v1/image/assets%2F1ca9a27ac5dc472da10ca7fd3ef2afd7%2F550b915d83c6498c8c0414a8ee28d1be',
  inputs: [
    {
      name: 'openModal',
      type: 'boolean',
      defaultValue: false,
    },
  ],
})(ModalComponent);
