import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import styles from "./WorkSpaceGridVIew.module.css";
import WorkSpaceGridViewIcon from "~/components/icons/WorkSpaceGridViewIcon";
import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import menu from "~/components/shared/PopupMenu/menu.module.css";
import ExportIcon from "~/components/icons/ExportIcon";
import EyeIcon from "~/components/icons/EyeIcon";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";

type Props = {
    title: string;
};
const items = [
    { icon: <ExportIcon />, label: "Export to Markdown", link: "" },
    { icon: <EyeIcon />, label: "Hide from Sidebar", link: "" },
    { icon: <TrashBinIcon />, label: "Delete Workspace", link: "" },
    { icon: <DuplicateIcon />, label: "Duplicate Workspace", link: "" }
];

export default function WorkSpaceGridVIew({ title }: Props) {
    const { isVisible, setIsVisible, ref } = useVisible(false);
    const handleButtonClick = () => {
        setIsVisible(!isVisible);
    };
    return (
        <a className={`${isVisible ? styles.containerActive : styles.container}`}>
            <div className={styles.start}>
                <WorkSpaceGridViewIcon />
                <p className={styles.title}>{title}</p>
            </div>
            <div className={`${menu.container} ${isVisible ? styles.workSpaceActive : styles.workSpace}`} ref={ref}>
                <ButtonIconOnly
                    onClick={handleButtonClick}
                    icon={<ThreeDotsIcon />}
                    tooltipLabel="More Options"
                    tooltipVisible={!isVisible}
                />
                <PopupMenu items={items} direction="bottom" visible={isVisible} />
            </div>
        </a>
    );
}
