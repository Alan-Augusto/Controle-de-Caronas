import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './my-button.component.html',
  styleUrl: './my-button.component.css'
})
export class MyButtonComponent {
  @Input() label!: string;
  @Input() disabled!: boolean;
  @Input() icon!: string;
  @Input() styleClass!: string;
  @Input() loading!: boolean;

  @Output() onClick = new EventEmitter();

  handleClick() {
    this.onClick.emit();
  }

}
