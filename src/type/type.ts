
export interface Transaction {
  timestamp: number; 
  name: string;      
  type: "DEBIT" | "CREDIT";
  amount: number;          
  status: "SUCCESS" | "FAILED" | "PENDING";
  description: string;
};

export interface TransactionSummary {
  transactionList: Transaction[];
  totalBalance: number;
}
