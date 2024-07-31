"use client";
import Popup from "../../popup/Popup";
import { Position } from "../../popup/utils/getPosition";
import AccountMenu from "~/app/account-menu/page";

type Props = {
    isOpened: boolean;
    position?: Position;
};

export default function AccountPopup({ isOpened, position }: Props) {
    return (
        <Popup isOpened={isOpened} position={position}>
            <AccountMenu />
        </Popup>
    );
}
