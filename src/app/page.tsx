import Link from "next/link";
import AccountPopup from "~/components/shared/account/account-popup/AccountPopup";
import AccountButton from "~/components/shared/account/AccountButton";
import Button from "~/components/shared/button/Button";

import Sidebar from "~/components/shared/sidebar/Sidebar";
import StageInput from "./stage-input/page";
import GridView from "./grid-view/page";
import LabelMenu from "./label-menu/page";
import LayoutToggler from "./layout-toggler/page";
import SearchInput from "./search-input/page";
import s from "./styles.module.css";
import { StageMenu } from "~/components/shared/PopupMenu/StageMenu";
import AccountMenu from "./account-menu/page";
import KanbanView from "./kanban-view/page";

export default function Home() {
    return (
        <main className={s.wrapper}>
            <div className={s.item}>
                <span className={s.title}>Sidebar</span>
                <Sidebar />
            </div>
            <div className={s.item}>
                <span className={s.title}>Account menu</span>
                <div style={{ position: "relative" }}>
                    <AccountMenu/>
                </div>
                <span className={s.title}>Usage</span>
                <AccountButton />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage menu</span>
                <StageMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage Input</span>
                <StageInput viewMode="kanban" />
                <StageInput viewMode="list" />
            </div>
            <div className={s.item}>
                <span className={s.title}>Tooltips</span>
                <Button text="Button with tooltip" tooltipLabel="tooltip" />
            </div>

            <div className={s.item}>
                <span className={s.title} style={{width: "900px", paddingLeft: "350px"}}>Grid view</span>
                <GridView />
            </div>
            <div className={s.item}>
                <span className={s.title} style={{width: "300px"}}>Label Menu</span>
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
            <div className={s.item} >
                <span className={s.title} style={{paddingLeft: "350px"}}>Kanban View</span>
                <KanbanView />
            </div>
            <Link href="/stage-icon-menu">Stage Icon Menu</Link>
            <Link href="/buttons">Brand Voice Buttons</Link>
            <Link href="/tooltip">Buttons with tooltips</Link>
            <Link href="/sidebar">Sidebar</Link>
            <Link href="/side-menu-popup">Side Menu Popup</Link>
        </main>
    );
}
