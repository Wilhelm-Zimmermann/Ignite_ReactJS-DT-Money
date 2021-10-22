import Modal from "react-modal";
import { useTransactions } from "../../hooks/useTransactions";
import { FormEvent, useContext, useState } from "react";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";

import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";

interface NewTransactionalModaProps {
    isOpen: boolean;
    onTransactionalModalClose: () => void;
}

export function NewTransactionalModal({ onTransactionalModalClose, isOpen }: NewTransactionalModaProps) {
    const { createTransaction } = useTransactions();

    const [type, setType] = useState("desposit");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [value, setValue] = useState(0);

    const handleCreateNewTransaction = async (e: FormEvent) => {
        e.preventDefault();
        
        await createTransaction({
            title,
            amount: value,
            category,
            type
        });
        
        setTitle("");
        setValue(0);
        setCategory("");
        setType("deposit");
        onTransactionalModalClose()
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onTransactionalModalClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                className="modal-close"
                onClick={onTransactionalModalClose}
            >
                <img src={closeImg} alt="close" />
            </button>

            <Container onSubmit={handleCreateNewTransaction}>
                <h2>Cadastrar Transação</h2>
                <input
                    placeholder="Título"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    placeholder="Valor"
                    type="number"
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                />

                <TransactionTypeContainer>
                    <RadioBox
                        type="button"
                        onClick={() => setType("deposit")}
                        isActive={type === "deposit"}
                        activeColor="green"
                    >
                        <span>Entrada</span>
                        <img src={incomeImg} alt="income" />
                    </RadioBox>

                    <RadioBox
                        type="button"
                        onClick={() => setType("withdraw")}
                        isActive={type === "withdraw"}
                        activeColor="red"
                    >
                        <span>Saída</span>
                        <img src={outcomeImg} alt="outcome" />
                    </RadioBox>
                </TransactionTypeContainer>

                <input
                    placeholder="Categoria"
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                />

                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}