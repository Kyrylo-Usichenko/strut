import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import WorkSpaceGridViewIcon from "~/components/icons/WorkSpaceGridViewIcon";
import { MenuItem, PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import { useVisible } from "~/components/shared/PopupMenu/utils/useVisible";
import ExportIcon from "~/components/icons/ExportIcon";
import EyeIcon from "~/components/icons/EyeIcon";
import DuplicateIcon from "~/components/icons/DuplicateIcon";
import TrashBinIcon from "~/components/icons/TrashBinIcon";
import ThreeDotsIcon from "~/components/icons/ThreeDotsIcon";
import styles from "./WorkSpaceGridVIew.module.css";
import menu from "~/components/shared/PopupMenu/menu.module.css";

type Props = {
    title: string;
};
const items: MenuItem[] = [
    { icon: <ExportIcon />, label: "Export to Markdown" },
    { icon: <EyeIcon />, label: "Hide from Sidebar" },
    { icon: <TrashBinIcon />, label: "Delete Workspace" },
    { icon: <DuplicateIcon />, label: "Duplicate Workspace" }
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
