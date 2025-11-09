// actions.ts
import { Transaction, TransactionSummary } from "../../type/type";

const API_URL_ISSUES = "http://localhost:8800/api/v1/transaction/issues";
const API_URL_TRANSACTION = "http://localhost:8800/api/v1/transaction/balance";
const API_URL_UPLOAD_TRANSACTION = "http://localhost:8800/api/v1/transaction/upload"

export async function fetchTransactionIssues(): Promise<Transaction[]> {
    try {
        const res = await fetch(API_URL_ISSUES);
        if (!res.ok) {
            throw new Error("Failed to fetch transaction issues");
        }
        const data = await res.json();
        const issues = data?.Data?.issues
        return issues as Transaction[];
    } catch (err) {
        console.error(err);
        return [];
    }
}

export async function fetchTransactionSummary(): Promise<TransactionSummary> {
    try {
        const res = await fetch(API_URL_TRANSACTION);
        if (!res.ok) {
            throw new Error("Failed to fetch transaction issues");
        }
        const data = await res.json();
        const transactionSummary = {
            transactionList: data?.Data?.transactions,
            totalBalance: data?.Data?.total_balance
        }
        return transactionSummary as TransactionSummary;
    } catch (err) {
        console.error(err);
        return {
            transactionList: [],
            totalBalance: 0
        };
    }
}

export const uploadTransactionCSV = async (file: File): Promise<void> => {
  const formData = new FormData();
  formData.append("file", file);

  try {
    const res = await fetch(API_URL_UPLOAD_TRANSACTION, {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(text || "Upload csv failed");
    }
  } catch (error: any) {
    const errorResult = JSON.parse(error.message)
    console.error("Upload failed:",  errorResult?.Message);
    throw error;
  }
};
