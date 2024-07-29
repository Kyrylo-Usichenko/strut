import Link from "next/link";
import StageMenu from "~/components/shared/PopupMenu/StageMenu";
import Sidebar from "~/components/shared/sidebar/Sidebar";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import AccountMenu from "./account-menu/page";
import StageInput from "./stage-input/page";
import s from "./styles.module.css";

export default function Home() {
    return (
        <main className={s.wrapper}>
            <div className={s.item}>
                <span className={s.title}>Account menu</span>
                <AccountMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage menu</span>
                <StageMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage menu (Kanban/List view)</span>
                <StageInput viewMode="kanban" />
                <StageInput viewMode="list" />
            </div>
            <div className={s.item}>
                <span className={s.title}>Tooltips</span>
                <div style={{ position: "relative", width: "100px", height: "20px" }}>
                    <Tooltip label="Some top text" direction="bottom" />
                </div>
            </div>
            <div className={s.item}>
                <span className={s.title}>Sidebar</span>
                <Sidebar />
            </div>
            <Link href="/stage-icon-menu">stage-icon-menu</Link>
            <Link href="/sidebar">Sidebar</Link>
            <Link href="/tooltip">Tooltip</Link>
            <Link href="/side-menu-popup">Side Menu Popup</Link>
            <Link href="/stage-menu">Stage Menu</Link>
            <Link href="/buttons">Brand Voice Button</Link>
            <Link href="/task-popup">Task Popup Menu</Link>
        </main>
    );
}
