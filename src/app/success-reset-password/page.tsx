import React from "react";
import styles from "./SuccessResetPassword.module.css";
import SuccessLetter from "~/components/icons/SuccessLetter";
import Link from "next/link";

const SuccessResetPassword: React.FC = () => {
    const email = "user@gmail.com";

    return (
        <div className={styles.div}>
            <SuccessLetter />
            <h2 className={styles.title}>Check Your Email</h2>
            <p className={styles.text}>
                Please check the email address {email} for instructions to reset your password.
            </p>
            <Link href="reset-password" className={styles.resendBtn}>
                Resend email
            </Link>
        </div>
    );
};

export default SuccessResetPassword;
