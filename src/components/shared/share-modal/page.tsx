"use client";

import ShareModalContact from "~/components/shared/ShareModalContact/ShareModalContact";
import styles from "./ShareModal.module.css";
import React, { useEffect, useRef, useState } from "react";
import CheckIcon from "~/components/icons/CheckIcon";

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
    const [contactIndex, setContactIndex] = useState<number | null>(null);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);
    const [activeButtonId, setActiveButtonId] = useState<number | null>(null);

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

    function handleButtonClick(index: number, event: React.MouseEvent) {
        event.stopPropagation();
        setActiveButtonId(index);
        handleOpenMenu(index);
    }

    function handleOpenMenu(index: number) {
        if (contactIndex === index && isMenuVisible) {
            closeMenu();
        } else {
            setContactIndex(index);
            setIsMenuVisible(true);
        }
    }

    function closeMenu() {
        setIsMenuVisible(false);
        setContactIndex(null);
        setActiveButtonId(null);
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node) &&
                !(
                    activeButtonId !== null &&
                    (event.target as HTMLElement).closest(`[data-button-id="${activeButtonId}"]`)
                )
            ) {
                closeMenu();
            }
        }

        function handleEscKey(event: KeyboardEvent) {
            if (event.key === "Escape") {
                closeMenu();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscKey);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscKey);
        };
    }, [activeButtonId]);

    function deleteContact(index: number) {
        setData((prevData) => prevData.filter((_, i) => i !== index));
        closeMenu();
    }

    function calculateTop(): number {
        return (contactIndex as number) * 44 + 100;
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
                        handleButtonClick={(event) => handleButtonClick(index, event)}
                        isVisible={isMenuVisible && contactIndex === index}
                        contactIndex={index}
                    />
                ))}
            </div>

            {isMenuVisible && contactIndex !== null && (
                <div className={styles.menu} style={{ top: `${calculateTop()}px`, right: "45px" }} ref={menuRef}>
                    <button className={styles.ediBtn}>
                        <CheckIcon />
                        Can edit
                    </button>
                    <button className={styles.removeBtn} onClick={() => deleteContact(contactIndex)}>
                        Remove access
                    </button>
                </div>
            )}

            <button className={styles.copyLinkBtn} onClick={copyLink}>
                {buttonText}
            </button>
        </div>
    );
}
