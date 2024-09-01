"use client";
import { useState } from "react";
import WorkspaceItem from "~/components/shared/WorkspaceItem/WorkspaceItem";
import CheckedCircleIcon from "../../icons/CheckedCircleIcon";
import CheckIcon from "../../icons/CheckIcon";
import CircleHalfIcon from "../../icons/CircleHalfIcon";
import CircleQuaterIcon from "../../icons/CircleQuaterIcon";
import DashedCircleIcon from "../../icons/DashedCircleIcon";
import CircleIcon from "../../icons/CircleIcon";
import CircleWithoutQueaterIcon from "../../icons/CircleWithoutQueaterIcon";
import Button from "~/components/shared/button/Button";
import styles from "./WorkspaceModal.module.css";

type ButtonType = "first" | "second" | "third";

type Props = {
    onClose?: () => void;
};

function WorkspaceModal({ onClose = () => {} }: Props) {
    const [activeButton, setActiveButton] = useState<ButtonType>("first");
    const [inputValue, setInputValue] = useState<string>("");

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        setInputValue(e.target.value);
    }

    function handleButtonClick(button: ButtonType): void {
        setActiveButton(button);
    }

    return (
        <div className={styles.div}>
            <div className={styles.leftSide}>
                <h2 className={styles.title}>Create a workspace</h2>
                <div className={styles.enterName}>
                    <label htmlFor="name" className={styles.label}>
                        Name
                    </label>
                    <input
                        value={inputValue}
                        onChange={handleInputChange}
                        className={styles.input}
                        type="text"
                        name="WorkspaceModalNameInput"
                        id="WorkspaceModalNameInput"
                        placeholder="Workspace name..."
                        autoComplete="off"
                    />
                </div>

                <div className={styles.pickUp}>
                    <h3 className={styles.pickUpTitle}>Pick your template</h3>
                    <p className={styles.pickUpText}>You can customize after creating</p>

                    <div className={styles.btnDiv}>
                        <button
                            className={`${styles.checkButton} ${activeButton === "first" ? styles.clicked : ""}`}
                            onClick={() => handleButtonClick("first")}
                        >
                            Complete {activeButton === "first" && <CheckIcon />}
                        </button>
                        <button
                            className={`${styles.checkButton} ${activeButton === "second" ? styles.clicked : ""}`}
                            onClick={() => handleButtonClick("second")}
                        >
                            Basic {activeButton === "second" && <CheckIcon />}
                        </button>
                        <button
                            className={`${styles.checkButton} ${activeButton === "third" ? styles.clicked : ""}`}
                            onClick={() => handleButtonClick("third")}
                        >
                            Notes {activeButton === "third" && <CheckIcon />}
                        </button>
                    </div>

                    <div className={styles.cancelCreateContainer}>
                        <Button text="Cancel" onClick={onClose} />
                        <Button text="Create" state={!inputValue ? "disabled" : undefined} />
                    </div>
                </div>
            </div>
            <div className={styles.rightSide}>
                <p className={styles.rightSideText}>
                    Workspaces let you create and organize your work anyway you want.
                </p>

                <div className={styles.itemsDiv}>
                    {activeButton === "first" && (
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<DashedCircleIcon />} title="Ideas" number={0} color="black" />
                            </li>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<CircleIcon />} title="Research" number={0} color="#995CBF" />
                            </li>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<CircleQuaterIcon />} title="Outline" number={0} color="#D2461B" />
                            </li>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<CircleHalfIcon />} title="Drafts" number={0} color="#FFB546" />
                            </li>
                            <li className={styles.item}>
                                <WorkspaceItem
                                    icon={<CircleWithoutQueaterIcon />}
                                    title="In Review"
                                    number={0}
                                    color="#5C6AE4"
                                />
                            </li>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<CheckedCircleIcon />} title="Done" number={0} color="#017264" />
                            </li>
                        </ul>
                    )}

                    {activeButton === "second" && (
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<DashedCircleIcon />} title="Notes" number={0} color="black" />
                            </li>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<CircleHalfIcon />} title="Drafts" number={0} color="#FFB546" />
                            </li>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<CheckedCircleIcon />} title="Done" number={0} color="#017264" />
                            </li>
                        </ul>
                    )}

                    {activeButton === "third" && (
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <WorkspaceItem icon={<DashedCircleIcon />} title="Notes" number={0} color="black" />
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}

export { WorkspaceModal };
