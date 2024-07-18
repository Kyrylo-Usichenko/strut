"use client";
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import styles from "./login.module.css";
import { FcGoogle } from "react-icons/fc";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";
import React, { useState } from "react";
import Link from "next/link";

const Login: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

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
            <h2 className={styles.title}>Log in to Strut</h2>
            <button className={styles.googleBtn}>
                <FcGoogle className={styles.googleSvg} /> Continue with Google
            </button>
            <span className={styles.spanOr}>or</span>

            <form>
                <TextField
                    id="outlined-password-input"
                    label="Email address*"
                    type="email"
                    autoComplete="current-password"
                    sx={defaultStyles}
                    required
                />

                <FormControl
                    sx={defaultStyles}
                    variant="outlined"
                >
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    edge="end"
                                >
                                    {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                        required
                    />
                </FormControl>

                <Link href="/forgot-password" className={styles.forgotLink}>Forgot password?</Link>

                <button type="submit" className={styles.contBtn}>Continue</button>
            </form>
        </div>
    );
};

export default Login;
