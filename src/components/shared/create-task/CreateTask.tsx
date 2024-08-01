import styles from "./styles.module.css";
import ButtonIconOnly from "../buttonIconOnly/ButtonIconOnly";
import SmallCircleIcon from "~/components/icons/SmallCircleIcon";
import DoubleCircleIcon from "~/components/icons/DoubleCircleIcon";
import SmallCrossedCircleIcon from "~/components/icons/SmallCrossedCircleIcon";
import CrossIcon from "~/components/icons/CrossIcon";
import { TaskPopupWithButton } from "../TaskPopupMenu/TaskPopupWithButton";
import { useState } from "react";

const modes = {
    regular: { icon: <SmallCircleIcon />, tooltipLabel: "Zoom Mode" },
    zoom: { icon: <DoubleCircleIcon />, tooltipLabel: "Deep Focus Mode" },
    deepFocus: { icon: <SmallCrossedCircleIcon />, tooltipLabel: "Regular Mode" }
};

export default function CreateTask() {
    const [activeMode, setActiveMode] = useState<"regular" | "zoom" | "deepFocus">("regular");

    function toggleMode() {
        if (activeMode === "regular") {
            setActiveMode("zoom");
        } else if (activeMode === "zoom") {
            setActiveMode("deepFocus");
        } else {
            setActiveMode("regular");
        }
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <div className={styles.buttons}>
                    <ButtonIconOnly
                        icon={modes[activeMode]["icon"]}
                        tooltipLabel={modes[activeMode]["tooltipLabel"]}
                        tooltipKeys={["CTRL", "+"]}
                        onClick={() => toggleMode()}
                    />
                    <TaskPopupWithButton docInfo={{ words: 0, chars: 0, time: 0 }} />
                    <ButtonIconOnly icon={<CrossIcon />} tooltipLabel="Close" />
                </div>
                <h1>Create Task</h1>
            </div>
        </div>
    );
}
