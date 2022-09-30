export class CardInfo {
    cardNumber: string;
    cvv: number;
    expiryYear: number;
    expiryMonth: number;
    
    constructor(cardNumber:string, cvv: number, expiryMonth:number, expiryYear:number) {
        this.cardNumber = cardNumber;
        this.cvv = cvv;
        this.expiryMonth = expiryMonth;
        this.expiryYear = expiryYear;
    }
}