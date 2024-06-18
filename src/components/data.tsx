export class order  {
    company: string = '';
    inv: number = 0;
    endDate: string = '';
    discription: string = '';
    status:string = 'awaiting'

    constructor(company: string, inv:  number, endDate: string, discription: string, status: string){
        this.company = company;
        this.inv = inv;
        this.endDate = endDate;
        this.discription = discription;
        this.status = status
    }
};
