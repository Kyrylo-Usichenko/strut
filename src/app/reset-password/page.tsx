import React from "react";
import styles from "./ResetPassword.module.css";
import { TextField } from "@mui/material";
import Link from "next/link";

const ResetPassword: React.FC = () => {
    const defaultStyles = {
        "mb": "12px",
        "width": "320px",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#DCDCD9",
            transition: "border-color 0.3s ease-in-out"
        },
        "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#282828"
        },
        "& .MuiInputLabel-root": {
            color: "#2d333a"
        },
        "& .Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#282828"
        },
        "& .Mui-focused .MuiInputLabel-root": {
            color: "#282828" // колір label при фокусі
        }
    };

    return (
        <div className={styles.div}>
            <h2 className={styles.title}>Forgot Your Password?</h2>
            <p className={styles.text}>Enter your email address and we will send you instructions to reset your password.</p>
            <form>
            <TextField
                    id="outlined-password-input"
                    label="Email address*"
                    type="email"
                    autoComplete="current-password"
                    sx={defaultStyles}
                    required
                />
                <button type="submit" className={styles.contBtn}>
                    Continue
                </button>
            </form>

            <Link href="/login" className={styles.backBtn}>Back to Strut</Link>
        </div>
    );
};

export default ResetPassword;
