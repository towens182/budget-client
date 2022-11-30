export interface Transaction {
    id: number;
    name: string;
    amount: number;
    type: string; // Credit, Debit, Income, Bonus
    
    financialInstitution: string;
    // paymentSource: Payment
    postedDate: string;
    month: string;
    year: string;

    category: string; // TODO make customizable enum
    subCategory: string;
}