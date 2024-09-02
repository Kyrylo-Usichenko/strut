import StageInput from "~/components/shared/stage-input/StageInput";

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
        </div>
    );
}
