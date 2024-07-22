import { FC } from "react";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import s from "./styles.module.css";

const TooltipPage: FC = () => {
    return (
        <div className={s.container}>
            <Tooltip label="Some top text" direction="top">
                <button className={s.button}>Top</button>
            </Tooltip>
            <Tooltip label="Some bottom text" direction="bottom">
                <button className={s.button}>Bottom</button>
            </Tooltip>
            <Tooltip label="Some text" direction="left" keys={["Ctrl", "`"]}>
                <button className={s.button}>Left</button>
            </Tooltip>
            <Tooltip label="Some text" direction="right" keys={["Alt", "Enter"]}>
                <button className={s.button}>Right</button>
            </Tooltip>
        </div>
    );
};

export default TooltipPage;
