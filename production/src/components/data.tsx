export class order  {
    company: string = '';
    inv: number = 0;
    endDate: string = '';
    discription: string = '';

    constructor(company: string, inv:  number, endDate: string, discription: string){
        this.company = company;
        this.inv = inv;
        this.endDate = endDate;
        this.discription = discription
    }
};
