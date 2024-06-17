export class order  {
    company: string = '';
    inv: number = 0;
    endDate: string = '';
    disxription: string = '';

    constructor(company: string, inv:  number, endDate: string, disxription: string){
        this.company = company;
        this.inv = inv;
        this.endDate = endDate;
        this.disxription = disxription
    }
};

const orderData: order[] = [];