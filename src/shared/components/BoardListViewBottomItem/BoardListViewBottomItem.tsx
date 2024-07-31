import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import styles from "./BoardListViewBottomItem.module.css";
import SmallCheckIcon from "~/components/icons/SmallCheckIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import TagIcon from "~/components/icons/TagIcon";
import { ReactElement } from "react";

type Props = {
    icon: ReactElement;
    text: string;
    iconColor: string;
};

export default function BoardListViewBottomItem({ text, icon, iconColor }: Props) {

    function doNothing(){
        return
    }
    return (
        <div className={styles.container}>
            <div className={styles.leftSide}>
                <div className={styles.chekedIcon}>
                    <SmallCheckIcon />
                </div>
                <p className={styles.text}>{text}</p>
            </div>

            <div className={styles.rightSide}>
                <ButtonIconOnly onClick={doNothing} icon={<TagIcon/>}/>
                <ButtonIconOnly onClick={doNothing} icon={icon} color={iconColor} />
                <ButtonIconOnly onClick={doNothing} icon={<ThreeDotsIcon/>} />
            </div>
        </div>
    );
}
