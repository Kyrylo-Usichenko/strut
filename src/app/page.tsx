import Link from "next/link";
import { StageMenu } from "~/components/shared/PopupMenu/StageMenu";
import { TaskPopup } from "~/components/shared/TaskPopupMenu/TaskPopup";
import StageIconMenu from "~/components/shared/stage-icon-menu/StageIconMenu";
import AccountMenu from "./account-menu/page";
import Sidebar from "~/components/shared/sidebar/Sidebar";
import Button from "~/components/shared/button/Button";
import s from "./styles.module.css";

export default function Home() {
    return (
        <main className={s.wrapper}>
            <div className={s.item}>
                <span className={s.title}>Account menu</span>
                <AccountMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Task Popup menu</span>
                <TaskPopup />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage Popup menu</span>
                <StageMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage Icon menu</span>
                <StageIconMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Tooltips</span>
                <Button text="Button with tooltip" tooltipLabel="tooltip"/>
            </div>
            <div className={s.item}>
                <span className={s.title}>Sidebar</span>
                <Sidebar />
            </div>
            <Link href="/stage-icon-menu">Stage Icon Menu</Link>
            <Link href="/buttons">Brand Voice Buttons</Link>
            <Link href="/tooltip">Buttons with tooltips</Link>
            <Link href="/buttons">Brand Voice Button</Link>
            <Link href="/sidebar">Sidebar</Link>
            <Link href="/side-menu-popup">Side Menu Popup</Link>
        </main>
    );
}
