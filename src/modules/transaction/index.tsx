import React, { useState, useEffect } from "react";
import { Transaction, TransactionSummary } from "@/type/type";
import TransactionTable from "./table";
import styles from "./style.module.css";
import { fetchTransactionIssues, fetchTransactionSummary, uploadTransactionCSV } from "@/action/transaction/action";
import TotalBalanceSection from "./total_balance_section";
import EmptyState from "@/components/empty_state";

const TransactionContainer: React.FC = () => {
    const [nonSuccessTransaction, setNonSuccessTransaction] = useState<Transaction[]>([]);
    const [isUploading, setIsUploading] = useState(false);
    const [transactionSummary, setTransactionSummary] = useState<TransactionSummary>({
        transactionList: [],
        totalBalance: 0,
    });
    useEffect(() => {
        fetchTransactionIssues().then(setNonSuccessTransaction);
        fetchTransactionSummary().then((data) => {
            setTransactionSummary({
                transactionList: data?.transactionList,
                totalBalance: data.totalBalance,
            });
        });
    }, [isUploading]);

    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        try {
            setIsUploading(true);
            await uploadTransactionCSV(file);
            alert("✅ File uploaded successfully!");
        } catch (err: any) {
            const errorResult = JSON.parse(err.message)
            alert("❌ Upload failed. " + errorResult?.Message);
        } finally {
            setIsUploading(false);
            e.target.value = "";
        }
    };

    return (
        <div className={styles.container}>
            <h1>Bank Statement Viewer</h1>


            <div className={styles.upload}>
                <label htmlFor="csv-upload" className={styles.uploadLabel}>
                    Upload CSV File
                </label>
                <input
                    id="csv-upload"
                    type="file"
                    accept="csv"
                    onChange={handleFileUpload}
                />
            </div>

            {/* Show end balance */}
            <TotalBalanceSection totalBalance={transactionSummary?.totalBalance} />

            {/* Transaction Table */}
            {nonSuccessTransaction?.length > 0 ?
                (<TransactionTable nonSuccessTransaction={nonSuccessTransaction} />) :
                (<EmptyState message={"There are no failed transactions to display yet. Try uploading a CSV file to get started."}/>)}
        </div>
    );
};

export default TransactionContainer;
