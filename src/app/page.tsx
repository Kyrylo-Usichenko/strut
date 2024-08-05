"use client";
import AccountButton from "~/components/shared/account/AccountButton";
import Button from "~/components/shared/button/Button";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import CalendarIcon from "~/components/icons/CalendarIcon";
import Sidebar from "~/components/shared/sidebar/Sidebar";
import StageInput from "../components/shared/stage-input/StageInput";
import LabelMenu from "./label-menu/page";
import LayoutToggler from "./layout-toggler/page";
import { SearchInput } from "../components/shared/search-input/SearchInput";
import { stageItems, StageMenuWithButton } from "~/components/shared/stage-menu/StageMenuWithButton";
import { StageMenu } from "~/components/shared/stage-menu/StageMenu";
import { items, PopupMenuWithButton } from "~/components/shared/PopupMenu/PopupMenuWithButton";
import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import { TaskPopup } from "~/components/shared/TaskPopupMenu/TaskPopup";
import { docInfo, taskItems, TaskPopupWithButton } from "~/components/shared/TaskPopupMenu/TaskPopupWithButton";
import AccountMenu from "./account-menu/page";
import BoardListView from "./board-list-view/page";
import KanbanView from "./kanban-view/page";
import { StatusMenu } from "~/components/shared/status-menu/StatusMenu";
import { statusItems, StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";
import WorkspaceModal from "./workspace-modal/page";
import StageIconMenuComponent from "~/shared/components/StageIconMenuComponent/StageIconMenuComponent";
import LabelMenuItem from "~/shared/components/LabelMenuItem/LabelMenuItem";
import GridView from "~/shared/components/GridView/GridView";
import s from "./styles.module.css";

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
                    <AccountMenu />
                </div>
                <span className={s.title}>Usage</span>
                <AccountButton />
            </div>
            <div className={s.item}>
                <span className={s.title}>Task menu</span>
                <div style={{ position: "relative", width: 175, height: 178 }}>
                    <TaskPopup items={taskItems} docInfo={docInfo} visible={true} />
                </div>
                <span className={s.title}>Usage</span>
                <div style={{ marginLeft: "145px" }}>
                    <TaskPopupWithButton />
                </div>
            </div>
            <div className={s.item}>
                <span className={s.title}>Side menu</span>
                <div style={{ position: "relative", width: 197, height: 152 }}>
                    <PopupMenu items={items} visible={true} />
                </div>
                <span className={s.title}>Usage</span>
                <PopupMenuWithButton />
            </div>
            <div className={s.item}>
                <span className={s.title}>Stage menu</span>
                <div style={{ position: "relative", width: 178, height: 116 }}>
                    <StageMenu items={stageItems} visible={true} />
                </div>
                <span className={s.title}>Usage</span>
                <div style={{ marginLeft: "150px" }}>
                    <StageMenuWithButton />
                </div>
            </div>
            <div className={s.item}>
                <span className={s.title}>Status menu</span>
                <div style={{ position: "relative", width: 216, height: 171 }}>
                    <StatusMenu items={statusItems} onItemClick={() => {}} visible={true} />
                </div>
                <span className={s.title}>Usage</span>
                <div style={{ marginLeft: "188px" }}>
                    <StatusMenuWithButton />
                </div>
            </div>
            <div>
                <span className={s.title}>Buttons</span>
                <Button icon={<CalendarIcon />} text="Default Button" tooltipLabel="With tooltip below" />
                <Button text="Button (no icon)" onClick={() => console.log("Brand Voice button clicked")} />
                <ButtonIconOnly
                    icon={<CalendarIcon />}
                    tooltipLabel="Button (no text)"
                    onClick={() => console.log("Brand Voice button clicked")}
                />
                <Button text="Button (no background)" withoutBackground={true} />
                <Button
                    text="Button (active)"
                    tooltipLabel="Active one"
                    onClick={() => console.log("Brand Voice button clicked")}
                    state="active"
                />
                <Button text="Button (disabled)" tooltipLabel="Disabled one" state="disabled" />
                <Button
                    text="Button (hovered)"
                    tooltipLabel="Hovered one"
                    onClick={() => console.log("Brand Voice button clicked")}
                    state="hovered"
                />
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
                <span className={s.title} style={{ width: "200px" }}>
                    Label Menu
                </span>
                <LabelMenuItem />
                <span className={s.title}>Usage</span>
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
            <div className={s.item}>
                <span className={s.title} style={{ width: "900px", paddingLeft: "350px" }}>
                    Grid view
                </span>
                <GridView />
            </div>
            <div className={s.item}>
                <span className={s.title} style={{ width: "700px", paddingLeft: "250px" }}>
                    Board list view
                </span>
                <BoardListView />
            </div>

            <div className={s.item}>
                <span className={s.title}>Stage icon menu</span>
                <StageIconMenuComponent />
                <span className={s.title} style={{ marginTop: "10px" }}>
                    Usage
                </span>
                <StageInput viewMode="list" />
            </div>
            <div className={s.item}>
                <span className={s.title} style={{ paddingLeft: "350px" }}>
                    Kanban View
                </span>
                <KanbanView />
            </div>
            <div className={s.item} style={{ height: "100px" }}>
                <span className={s.title} style={{ paddingLeft: "312px" }}>
                    Workspace modal
                </span>
                <WorkspaceModal />
            </div>
        </main>
    );
}
