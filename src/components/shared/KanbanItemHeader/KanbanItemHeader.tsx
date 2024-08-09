"use client";
import PlusIcon from "~/components/icons/PlusIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import StageInput from "~/components/shared/stage-input/StageInput";
import { MenuItem } from "~/components/shared/PopupMenu/PopupMenu";
import ArrowIcon from "~/components/icons/ArrowIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import { StageMenu } from "~/components/shared/stage-menu/StageMenu";
import menu from "~/components/shared/PopupMenu/menu.module.css";
import styles from "./KanbanItemHeader.module.css";

type Props = {
    icon: React.ReactElement;
    title?: string;
    number: number;
    color: string;
    position?: "left" | "right" | "center";
};

const stageItems: MenuItem[] = [
    { icon: <ArrowIcon direction="left" />, label: "Move Stage Left", link: "" },
    { icon: <ArrowIcon direction="right" />, label: "Move Stage Right", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];
const stageItemsForLeft: MenuItem[] = [
    { icon: <ArrowIcon direction="right" />, label: "Move Stage Right", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];
const stageItemsForRight: MenuItem[] = [
    { icon: <ArrowIcon direction="left" />, label: "Move Stage Left", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" }
];

export default function KanbanItemHeader({ icon, title = "Untitlted", number, color, position = "left" }: Props) {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };

    function determinePosition(position: string) {
        if (position === "right") {
            return stageItemsForRight;
        } else if (position === "left") {
            return stageItemsForLeft;
        }
        return stageItems;
    }
    return (
        <div className={styles.container}>
            <StageInput viewMode="kanban" icon={icon} width={200} value={title} amount={number} color={color} />
            <div className={styles.hidden}>
                <ButtonIconOnly icon={<PlusIcon width={12} height={12} />} tooltipLabel="New Doc" />
                <div className={menu.container} ref={ref}>
                    <ButtonIconOnly
                        onClick={handleButtonClick}
                        icon={<ThreeDotsIcon />}
                        tooltipLabel="More Options"
                        tooltipVisible={!isVisible}
                    />
                    <StageMenu items={determinePosition(position)} visible={isVisible} direction="bottom" />
                </div>
            </div>
        </div>
    );
}
