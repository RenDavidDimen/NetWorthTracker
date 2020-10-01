import { v4 as uuidv4 } from "uuid";

export class Asset {
  constructor(asset, value, currency, month) {
    this.id = uuidv4();
    this.asset = asset;
    this.value = value;
    this.currency = currency;
    this.month = month;
  }
}
