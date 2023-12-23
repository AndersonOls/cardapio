import { useEffect, useState } from "react"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate";
import { FoodData } from "../../interface/FoodData";

import './modal.css'

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

interface ModalProps {
    closeModal(): void
}

const Input = ({ label, value, updateValue }: InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}
export function CreateModal({ closeModal }: ModalProps) {
    const [tittle, setTittle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useFoodDataMutate();

    const submit = () => {
        const foodData: FoodData = {
            tittle,
            price,
            image
        }
        mutate(foodData)
    }

    useEffect(() => {
        if (!isSuccess) return
        closeModal();
    }, [isSuccess])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <div className="modal-tittle">
                <h2>Cadastrar novo item</h2>
                    <button onClick={closeModal} className="closeModal">
                        X
                    </button>
                    
                </div>

                <form className="input-container">
                    <Input label="Title" value={tittle} updateValue={setTittle} />
                    <Input label="Price" value={price} updateValue={setPrice} />
                    <Input label="Image" value={image} updateValue={setImage} />

                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'Postando...' : 'Postar'}
                </button>
            </div>

        </div>
    )
}