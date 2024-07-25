import Link from "next/link";
import StageMenu from "~/components/shared/PopupMenu/StageMenu";
import StageIconMenu from "~/components/shared/stage-icon-menu/StageIconMenu";
import { Tooltip } from "~/components/shared/Tooltip/Tooltip";
import AccountMenu from "./account-menu/page";
import s from "./styles.module.css";
import Sidebar from "~/components/shared/sidebar/Sidebar";
import GridView from "./grid-view/page";
import LabelMenu from "./label-menu/page";
import LayoutToggler from "./layout-toggler/page";
import SearchInput from "./search-input/page";
import KanbanView from "./kanban-view/page";

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
                <span className={s.title}>Stage menu</span>
                <StageIconMenu />
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
            <div className={s.item}>
                <span className={s.title}>Grid view</span>
                <GridView />
            </div>
            <div className={s.item} >
                <span className={s.title}>Label Menu</span>
                <div style={{paddingLeft: "400px"}}><LabelMenu /></div>
                <br /><br /><br /><br /><br />
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
                <span className={s.title}>Kanban View</span>
                <div style={{paddingLeft: "100px"}}><KanbanView /></div>
                
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
