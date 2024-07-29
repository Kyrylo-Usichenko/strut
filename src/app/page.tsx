"use client";

import Link from "next/link";
import AccountPopup from "~/components/shared/account/account-popup/AccountPopup";
import AccountButton from "~/components/shared/account/AccountButton";
import Button from "~/components/shared/button/Button";
import CalendarIcon from "~/components/icons/CalendarIcon";

import Sidebar from "~/components/shared/sidebar/Sidebar";
import StageInput from "./stage-input/page";
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
            <div>
                <span className={s.title}>Buttons</span>
                <Button
                    icon={<CalendarIcon />}
                    text="Default Button"
                    tooltipLabel="With tooltip"
                    onClick={() => console.log("Brand Voice button clicked")}
                />
                <Button
                    icon={<CalendarIcon />}
                    text="Button (no tooltip)"
                    // tooltipLabel="Brand Voice"
                    onClick={() => console.log("Brand Voice button clicked")}
                />
                <Button
                    // icon={<SvgIcon />}
                    text="Button (no icon)"
                    tooltipLabel="Brand Voice"
                    onClick={() => console.log("Brand Voice button clicked")}
                />
                <Button
                    // icon={<SvgIcon />}
                    text="Button (no background)"
                    tooltipLabel="Share Workspace"
                    withoutBackground={true}
                    onClick={() => console.log("Share button clicked")}
                />
                    <Button
                        text="Button (disabled)"
                        tooltipLabel="Disabled one"
                        onClick={() => console.log("Brand Voice button clicked")}
                        disabled={true}
                    />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage menu</span>
                <StageMenu />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage Input</span>
                <StageInput viewMode="kanban" />
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
