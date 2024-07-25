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
import s from "./styles.module.css";
import { StageMenu } from "~/components/shared/PopupMenu/StageMenu";

export default function Home() {
    return (
        <main className={s.wrapper}>
            <div className={s.item}>
                <span className={s.title}>Sidebar</span>
                <Sidebar />
            </div>
            <div className={s.item}>
                <span className={s.title}>Account menu</span>
                <div style={{ position: "relative", width: 232, height: 220 }}>
                    <AccountPopup isOpened={true} />
                </div>
                <span className={s.title}>Usage</span>
                <AccountButton />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage menu</span>
                <StageMenu />
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
                <span className={s.title}>Grid view</span>
                <GridView />
            </div>
            <div className={s.item}>
                <span className={s.title}>Label Menu</span>
                <LabelMenu />
                <br />
                <br />
                <br />
                <br />
                <br />
            </div>
            <div className={s.item}>
                <span className={s.title}>Layout Toggler</span>
                <LayoutToggler />
            </div>
            <div className={s.item}>
                <span className={s.title}>Search Input</span>
                <SearchInput />
            </div>
            <Link href="/stage-icon-menu">Stage Icon Menu</Link>
            <Link href="/buttons">Brand Voice Buttons</Link>
            <Link href="/tooltip">Buttons with tooltips</Link>
            <Link href="/sidebar">Sidebar</Link>
            <Link href="/side-menu-popup">Side Menu Popup</Link>
        </main>
    );
}
