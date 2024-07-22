"use client";

import React, { useState, ChangeEvent, FocusEvent } from "react";
import styles from "./ResetPassword.module.css";
import Link from "next/link";

function ResetPassword() {
    const [isFocused, setIsFocused] = useState<boolean>(false);
    const [hasValue, setHasValue] = useState<boolean>(false);

    function handleFocus(): void {
        setIsFocused(true);
    }

    function handleBlur(e: FocusEvent<HTMLInputElement>): void {
        setIsFocused(false);
        setHasValue(e.target.value !== "");
    }

    function handleChange(e: ChangeEvent<HTMLInputElement>): void {
        setHasValue(e.target.value !== "");
    }

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Forgot Your Password?</h2>
            <p className={styles.text}>
                Enter your email address and we will send you instructions to reset your password.
            </p>
            <form>
                <div className={styles.inputContainer}>
                    <input
                        type="email"
                        id="email"
                        className={styles.input}
                        required
                        onFocus={handleFocus}
                        onBlur={handleBlur}
                        onChange={handleChange}
                    />
                    <label
                        htmlFor="email"
                        className={`${styles.label} ${isFocused || hasValue ? styles.labelFloat : ""}`}
                    >
                        Email address*
                    </label>
                </div>
                <button type="submit" className={styles.contBtn}>
                    Continue
                </button>
            </form>

            <Link href="/login" className={styles.backBtn}>
                Back to Strut
            </Link>
        </div>
    );
}

export default ResetPassword;
