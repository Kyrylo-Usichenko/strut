"use client";
import AvatarIcon from "~/components/icons/AvatarIcon";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import AccountPopup from "./account-popup/AccountPopup";
import s from "./styles.module.css";
import { useVisible } from "../PopupMenu/utils/useVisible";

function AccountButton() {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };


    return (
        <div className={s.wrapper} ref={ref}>
            <ButtonIconOnly
                onClick={() => {
                    setIsVisible(!isVisible);
                }}
                icon={<AvatarIcon />}
                className={s.icon}
                tooltipLabel="Account"
                tooltipVisible={!isVisible}
            />
            <AccountPopup
                isOpened={isVisible}
                position={{
                    top: "32px"
                }}
            />
        </div>
    );
}

export default AccountButton;
