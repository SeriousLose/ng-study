import { HostListener } from '@angular/core';

export abstract class BaseComponent {
  protected abstract getName(): string;

  @HostListener('click')
    onClick() {
        alert('Click');
    }
}
