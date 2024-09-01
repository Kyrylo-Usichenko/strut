"use client";
import React from "react";
import Image from "next/image";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";
import styles from "./ShareModalContact.module.css";

type Props = {
    name: string;
    image: string;
    status: string;
    handleButtonClick: (event: React.MouseEvent) => void;
    isVisible: boolean;
    contactIndex: number;
};

export default function ShareModalContact({ name, image, status, handleButtonClick, isVisible, contactIndex }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.contactDiv}>
                <Image src={image} alt="contact" className={styles.img} width={24} height={24} unoptimized={true} />
                <p className={styles.name}>{name}</p>
            </div>
            <div>
                {status === "owner" ? (
                    <p className={styles.owner}>Owner</p>
                ) : (
                    <div className={styles.meniDiv}>
                        <button
                            className={`${isVisible ? styles.editActive : styles.edit}`}
                            onClick={handleButtonClick}
                            data-button-id={contactIndex}
                        >
                            Can edit
                            <span className={styles.arrow}>
                                <SmallArrowIcon />
                            </span>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
