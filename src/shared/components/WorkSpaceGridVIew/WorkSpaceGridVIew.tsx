import styles from "./WorkSpaceGridVIew.module.css";
import WorkSpaceGridViewIcon from "~/components/icons/WorkSpaceGridViewIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import { PopupMenuWithButton } from "~/components/shared/PopupMenu/PopupMenuWithButton";
import menu from "~/components/shared/PopupMenu/menu.module.css";
import { items } from "~/components/shared/PopupMenu/PopupMenuWithButton";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";

type Props = {
    title: string;
};
export default function WorkSpaceGridVIew({ title }: Props) {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className={styles.container}>
            <div className={styles.start}>
                <WorkSpaceGridViewIcon />
                <p className={styles.title}>{title}</p>
            </div>
            <div className={menu.container} ref={ref}>
            <ButtonIconOnly
                onClick={handleButtonClick}
                icon={<ThreeDotsIcon />}
                tooltipLabel="More Options"
                tooltipVisible={!isVisible}
            />
            <PopupMenu items={items} direction="bottom" visible={isVisible} />
        </div>
        </div>
    );
}
