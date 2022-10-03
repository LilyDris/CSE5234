export class ShippingInfo {
    Name: string;
    Street: string;
    City: string;
    State: string;
    Zip: number;
    
    constructor(name: string, street:string, city:string, state:string, zip:number) {
        this.Name=name;
        this.Street=street
        this.City=city;
        this.State=state;
        this.Zip=zip;
    }
}