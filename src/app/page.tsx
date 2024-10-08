"use client";
import AccountButton from "~/components/shared/account/AccountButton";
import Button from "~/components/shared/button/Button";
import ButtonIconOnly from "~/components/shared/buttonIconOnly/ButtonIconOnly";
import CalendarIcon from "~/components/icons/CalendarIcon";
import Sidebar from "~/components/shared/sidebar/Sidebar";
import StageInput from "../components/shared/stage-input/StageInput";
import LabelMenu from "../components/shared/label-menu/LabelMenu";
import LayoutToggler from "./layout-toggler/page";
import { SearchInput } from "../components/shared/search-input/SearchInput";
import { stageItems, StageMenuWithButton } from "~/components/shared/stage-menu/StageMenuWithButton";
import { StageMenu } from "~/components/shared/stage-menu/StageMenu";
import { items, PopupMenuWithButton } from "~/components/shared/PopupMenu/PopupMenuWithButton";
import { PopupMenu } from "~/components/shared/PopupMenu/PopupMenu";
import { TaskPopup } from "~/components/shared/TaskPopupMenu/TaskPopup";
import { docInfo, taskItems, TaskPopupWithButton } from "~/components/shared/TaskPopupMenu/TaskPopupWithButton";
import AccountMenu from "./account-menu/page";
import BoardListView, { tags } from "../components/shared/board-list-view/page";
import KanbanView from "../components/shared/kanban-view/page";
import { StatusMenu } from "~/components/shared/status-menu/StatusMenu";
import { statusItems, StatusMenuWithButton } from "~/components/shared/status-menu/StatusMenuWithButton";
import { CreateVoiceModal } from "~/components/shared/CreateVoiceModal/CreateVoiceModal";
import { WorkspaceModal } from "../components/shared/workspace-modal/WorkspaceModal";
import StageIconMenuComponent from "~/components/shared/StageIconMenuComponent/StageIconMenuComponent";
import LabelMenuItem from "~/components/shared/LabelMenuItem/LabelMenuItem";
import GridView from "~/components/shared/GridView/GridView";
import BoardGridView from "../components/shared/board-grid-view/page";
import ShareModal from "../components/shared/share-modal/page";
import Task from "~/components/shared/task/Task";
import ShareButton from "~/components/shared/ShareButton/ShareButton";
import BrandVoices from "./brand-voices/page";
import s from "./styles.module.css";
import BrandVoiceMenu from "../components/shared/brand-voice-menu/page";
import BrandVoiceButton, { initialData } from "~/components/shared/brand-voice-button/BrandVoiceButton";
import HelpSupportPopup from "~/components/shared/help-support-popup/HelpSupportPopup";
import { testMessagesData, testCollectionsData } from "~/components/shared/help-support-popup/_test_data/testData";
import Link from "next/link";

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
            <div className={s.item}>
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
                <Button text="Button (130px max width)" tooltipLabel="Button (130px max width)" maxWidth={130} />
            </div>
            <div className={s.item} style={{ width: "400px" }}>
                <span className={s.title}>Stage Input</span>
                <StageInput viewMode="kanban" value={"kanban"} />
                <StageInput viewMode="list" value={"list/grid"} />
                <StageInput viewMode="kanban" value={"kanban (creating)"} isCreated={true} />
                <StageInput viewMode="list" value={"list/grid (creating)"} isCreated={true} />
            </div>
            <div className={s.item}>
                <span className={s.title}>Tooltips</span>
                <Button text="Button with tooltip" tooltipLabel="tooltip" />
            </div>
            <div className={s.item}>
                <span className={s.title} style={{ width: "200px" }}>
                    Label Menu
                </span>
                <LabelMenuItem isVisible={false} />
                <span className={s.title} style={{ marginTop: "10px", marginBottom: "0px" }}>
                    Usage
                </span>
                <div style={{ paddingLeft: "230px" }}>
                    <LabelMenu tags={tags} onTagChecked={() => {}} />
                </div>
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
            <div className={s.item} style={{ width: "900px" }}>
                <span className={s.title} style={{ paddingLeft: "350px", width: "800px" }}>
                    Board grid view
                </span>
                <BoardGridView />
            </div>
            <div className={s.item}>
                <span className={s.title} style={{ width: "400px" }}>
                    Share Modal
                </span>
                <ShareModal />
                <span className={s.title}>Usage</span>
                <ShareButton />
            </div>
            <div className={s.item} style={{ width: "600px" }}>
                <span className={s.title}>Create Brand Voice Modal</span>
                <CreateVoiceModal />
                <span className={s.title}>Usage</span>
                <div style={{ width: "" }}>
                    <BrandVoices />
                </div>
            </div>
            <div className={s.item}>
                <span className={s.title}>Brand voice modal</span>
                <BrandVoiceMenu onMenuClick={() => {}} initialData={initialData} />
                <span className={s.title}>Usage</span>
                <BrandVoiceButton />
            </div>
            <div className={s.item}>
                <span className={s.title}>Help Support Popup</span>
                <HelpSupportPopup messagesData={testMessagesData} collectionsData={testCollectionsData} />
            </div>

            <div className={s.item} style={{ padding: "0px 50px" }}>
                <Link className={s.title} href="/landing" style={{ textDecoration: "underline" }}>
                    Landing Page
                </Link>
            </div>
        </main>
    );
}
