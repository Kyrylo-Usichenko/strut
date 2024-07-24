"use client";
import Link from "next/link";
import React, { useState } from "react";
import Eye from "~/components/icons/Eye";
import EyeBlocked from "~/components/icons/EyeBlocked";
import Google from "~/components/icons/Google";
import ContinueButton from "~/components/shared/ContinueButton/ContinueButton";
import styles from "./login.module.css";

function Login() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [emailFocused, setEmailFocused] = useState<boolean>(false);
    const [passwordFocused, setPasswordFocused] = useState<boolean>(false);

    function handleClickShowPassword(): void {
        setShowPassword((show) => !show);
    }

    function handleMouseDownPassword(event: React.MouseEvent<HTMLButtonElement>): void {
        event.preventDefault();
    }

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Log in to Strut</h2>
            <button className={styles.googleBtn}>
                <Google />
                Continue with Google
            </button>
            <span className={styles.spanOr}>or</span>

            <form>
                <div className={styles.inputContainer}>
                    <input
                        type="email"
                        id="email"
                        className={styles.input}
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        onFocus={() => setEmailFocused(true)}
                        onBlur={() => setEmailFocused(email.length > 0)}
                    />
                    <label
                        htmlFor="email"
                        className={`${styles.label} ${emailFocused || email.length > 0 ? styles.labelFloating : ""}`}
                    >
                        Email address*
                    </label>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        type={showPassword ? "text" : "password"}
                        id="password"
                        className={styles.input}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onFocus={() => setPasswordFocused(true)}
                        onBlur={() => setPasswordFocused(password.length > 0)}
                    />
                    <label
                        htmlFor="password"
                        className={`${styles.label} ${passwordFocused || password.length > 0 ? styles.labelFloating : ""}`}
                    >
                        Password*
                    </label>
                    <button
                        type="button"
                        className={styles.passwordToggle}
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                    >
                        {showPassword ? <EyeBlocked /> : <Eye />}
                    </button>
                </div>

                <Link href="/forgot-password" className={styles.forgotLink}>
                    Forgot password?
                </Link>

                <ContinueButton />
            </form>
        </div>
    );
}

export default Login;
