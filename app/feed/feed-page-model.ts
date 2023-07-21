import { Observable } from "@nativescript/core";

export class HomeViewModel extends Observable {
  private _title: string;
  private _cartItems: any;

  constructor() {
    super();
    this._title = "teste";
    this._cartItems = [];
  }

  get title(): string {
    return this._title;
  }

  get cartItems(): any {
    this._cartItems = [
      {
        name: "Teste",
        price: 1.0,
      },
    ];
    return this._cartItems;
  }
}
