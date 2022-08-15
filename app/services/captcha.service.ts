import { Injectable } from '@angular/core';

export class CaptchService {
  Generatecode() {
    let a = Math.random() * 10;
    let b = Math.random() * 10;
    let c = Math.random() * 10;
    let d = Math.random() * 10;
    let code = `${Math.round(a)} ${Math.round(b)} ${Math.round(c)} ${Math.round(
      d
    )}`;
    return code;
  }
}
