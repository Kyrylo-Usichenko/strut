"use client";

import StageInput from "~/components/shared/stage-input/StageInput";

function ExampleUsage() {
    function handleCreateClick(color: string, icon: JSX.Element, text: string) {
        alert(`You can do anything with selected color (${color}), icon (${icon}) and text(${text})`);
        console.log(`You can do anything with selected color (${color}), icon (${icon}) and text(${text})`);
    }

    return <StageInput viewMode="list" isCreated={true} value={"Try me!"} onCreateClick={handleCreateClick} />;
}

export default function StageInputPage() {
    return (
        <div style={{ color: "white" }}>
            <h4>List/Grid View</h4>
            <StageInput viewMode="list" />
            <h4>Kanban View</h4>
            <StageInput viewMode="kanban" />
            <h4>List/Grid View (create mode)</h4>
            <StageInput viewMode="list" isCreated={true} />
            <h4>Kanban View (create mode)</h4>
            <StageInput viewMode="kanban" isCreated={true} />
            <h4 style={{ marginTop: "40px" }}>Example Usage (Choose any icon, color and text to use)</h4>
            <ExampleUsage />
        </div>
    );
}
