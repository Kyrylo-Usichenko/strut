"use client";
import Link from "next/link";
import AccountPopup from "~/components/shared/account/account-popup/AccountPopup";
import AccountButton from "~/components/shared/account/AccountButton";
import Button from "~/components/shared/button/Button";
import Sidebar from "~/components/shared/sidebar/Sidebar";
import StageIconMenu from "~/components/shared/stage-icon-menu/StageIconMenu";
import GridView from "./grid-view/page";
import LabelMenu from "./label-menu/page";
import LayoutToggler from "./layout-toggler/page";
import SearchInput from "./search-input/page";
import { stageItems, StageMenuWithButton } from "~/components/shared/stage-menu/StageMenuWithButton";
import { StageMenu } from "~/components/shared/stage-menu/StageMenu";
import { items, PopupMenuWithButton } from "~/components/shared/PopupMenu/PopupMenuWithButton";
import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import { TaskPopup } from "~/components/shared/TaskPopupMenu/TaskPopup";
import { docInfo, taskItems, TaskPopupWithButton } from "~/components/shared/TaskPopupMenu/TaskPopupWithButton";
import s from "./styles.module.css";
import AccountMenu from "./account-menu/page";

export default function Home() {
    return (
        <main className={s.wrapper}>
            <div className={s.item}>
                <span className={s.title}>Sidebar</span>
                <Sidebar />
            </div>
            <div className={s.item}>
                <span className={s.title}>Account menu</span>
                <div style={{ position: "relative", height: 220 }}>
                    <AccountMenu/>
                </div>
                <span className={s.title}>Usage</span>
                <AccountButton />
            </div>
            <div className={s.item}>
                <span className={s.title}>Task menu</span>
                <div style={{ position: "relative", width: 175, height: 212 }}>
                    <TaskPopup items={taskItems} docInfo={docInfo} visible={true} />
                </div>
                <span className={s.title}>Usage</span>
                <div style={{ marginLeft: "145px" }}>
                    <TaskPopupWithButton />
                </div>
            </div>
            <div className={s.item}>
                <span className={s.title}>Side menu</span>
                <div style={{ position: "relative", width: 197, height: 186 }}>
                    <PopupMenu items={items} visible={true} />
                </div>
                <span className={s.title}>Usage</span>
                <PopupMenuWithButton />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage menu</span>
                <div style={{ position: "relative", width: 178, height: 150 }}>
                    <StageMenu items={stageItems} visible={true} />
                </div>
                <span className={s.title}>Usage</span>
                <div style={{ marginLeft: "150px" }}>
                    <StageMenuWithButton />
                </div>
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage Icon menu</span>
                <StageIconMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Tooltips</span>
                <Button text="Button with tooltip" tooltipLabel="tooltip" />
            </div>
            <div className={s.item}>
                <span className={s.title}>Label Menu</span>
                <LabelMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Layout Toggler</span>
                <LayoutToggler />
            </div>
            <div className={s.item}>
                <span className={s.title}>Search Input</span>
                <SearchInput />
            </div>
            <Link href="/buttons">Brand Voice Buttons</Link>
            <Link href="/tooltip">Buttons with tooltips</Link>
            <Link href="/sidebar">Sidebar</Link>
        </main>
    );
}
