"use client";

import ShareModalContact from "~/components/shared/ShareModalContact/ShareModalContact";
import styles from "./ShareModal.module.css";
import { useState } from "react";

type DataType = {
    name: string;
    image: string;
    status: string;
};

const data1: DataType[] = [
    {
        name: "Henry Ford",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsbEuUIbX5FIKY7oJL-p7WBcTJQwhYOMpDQ&s",
        status: "owner"
    },
    {
        name: "Enzo Ferrari",
        image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQpVB9UbBXYbcN5son5Ea11x_36I2-A9zK38DGBmEjkVt6xcEWK",
        status: "guest"
    }
];

export default function ShareModal() {
    const [data, setData] = useState<DataType[]>(data1);
    const [input, setInput] = useState("");
    const [buttonText, setButtonText] = useState("Copy Link");

    function handleEnter(e: React.ChangeEvent<HTMLInputElement>) {
        setInput(e.target.value);
    }

    function sendInvite() {
        if (input.trim() === "") return;

        const newContact = {
            name: input,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSC7j6s9pjrZOL3LgxZbdf7C588MZo26zQT2EjT0JHxaXGS7phJ72NCBf_E1Nj-HM7TTbE&usqp=CAU",
            status: "guest"
        };

        setData((prevData) => [...prevData, newContact]);

        setInput("");
    }

    function copyLink() {
        setButtonText("Copied!");
        setTimeout(() => {
            setButtonText("Copy Link");
        }, 1500);
    }

    function deleteContact(index: number) {
        setData((prevData) => prevData.filter((_, i) => i !== index));
    }
    return (
        <div className={styles.conatiner}>
            <div className={styles.inputContainer}>
                <input
                    type="text"
                    placeholder="Enter an email..."
                    className={styles.input}
                    onChange={handleEnter}
                    value={input}
                />
                <button className={styles.sendBtn} onClick={sendInvite}>
                    Send invite
                </button>
            </div>
            <div className={styles.contactContainer}>
                {data.map((item, index) => (
                    <ShareModalContact
                        name={item.name}
                        image={item.image}
                        status={item.status}
                        key={index}
                        onRemove={() => deleteContact(index)}
                    />
                ))}
            </div>

            <button className={styles.copyLinkBtn} onClick={copyLink}>
                {buttonText}
            </button>
        </div>
    );
}
