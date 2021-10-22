import {createContext, ReactNode, useContext, useEffect, useState} from "react";
import { api } from "../services/api";

interface TransactionState {
    id: number;
    title: string;
    type: string;
    category: string;
    amount: number;
    created_at?: string;
}

type CreateTransaction = Omit<TransactionState, "id"|"createdAt">;

interface CreateTransactionReponse {
    transaction : {};
}

interface TransactionResponse {
    transactions: [];
}

interface TransactionProviderProps {
    children: ReactNode;
}

interface TransactionsContextData {
    transactions: TransactionState[];
    createTransaction: (transaction: CreateTransaction) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>(
    {} as TransactionsContextData
);


export const TransactionsProvider = ({children}: TransactionProviderProps) => {
    const [transactions, setTransactions] = useState<TransactionState[]>([]);

    const getTransactions = async () => {

        const data = await api.get<TransactionResponse>("get-dt");
        setTransactions(data.data.transactions);
    }

    useEffect(() => {
        getTransactions();
    }, [])

    const createTransaction = async (transactionInput: CreateTransaction) => {

        const resp = await api.post<CreateTransactionReponse>("create-dt",{
            ...transactionInput,
        });

        window.location.reload();
        const { transaction } = resp.data;

        setTransactions([
            ...transactions,
            transaction as TransactionState
        ]);
    }

    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
        </TransactionsContext.Provider>
    );
}

export function useTransactions() {
    const context = useContext(TransactionsContext);

    return context;
}