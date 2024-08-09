"use client";

import Image from "next/image";
import styles from "./ShareModalContact.module.css";
import SmallArrowIcon from "~/components/icons/SmallArrowIcon";
import { useVisible } from "../PopupMenu/utils/useVisible";
import CheckIcon from "~/components/icons/CheckIcon";

type Props = {
    name: string;
    image: string;
    status: string;
    onRemove: () => void;
};

export default function ShareModalContact({ name, image, status, onRemove }: Props) {
    const { ref, isVisible, setIsVisible } = useVisible(false);

    function handleOpenMenu() {
        setIsVisible(!isVisible);
    }

    function deleteContact() {
        onRemove();
        setIsVisible(!isVisible);
    }
    return (
        <div className={styles.container}>
            <div className={styles.contactDiv}>
                <img src={image} alt="contact" className={styles.img} />
                <p className={styles.name}>{name}</p>
            </div>
            <div>
                {status === "owner" ? (
                    <p className={styles.owner}>Owner</p>
                ) : (
                    <div className={styles.meniDiv}>
                        <div className={`${isVisible ? styles.editActive : styles.edit}`} onClick={handleOpenMenu}>
                            Can edit{" "}
                            <span className={styles.arrow}>
                                <SmallArrowIcon />
                            </span>
                        </div>
                        {isVisible && (
                            <div className={styles.menu} ref={ref}>
                                <button className={styles.ediBtn}>
                                    <CheckIcon />
                                    Can edit
                                </button>
                                <button className={styles.removeBtn} onClick={deleteContact}>
                                    Remove access
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}
