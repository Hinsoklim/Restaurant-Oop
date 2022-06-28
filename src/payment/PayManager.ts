import { Receipt } from "./Receipt";
export class PayManager {
    protected receipts: Receipt[] = [];

    getReceipt() {
        return this.receipts;
    }

    addReceipt(newReceipt: Receipt) {
        return this.receipts.push(newReceipt);
    }
}