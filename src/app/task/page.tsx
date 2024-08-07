"use client";
import Task from "~/components/shared/task/Task";

export default function Page() {
    return (
        <div style={{ position: "relative", height: 800, width: 600, backgroundColor: "rgb(27, 28, 28)" }}>
            <Task
                content={[
                    { text: "Test doc", textType: "documentTitle" },
                    { text: "This is a task", textType: "p" },
                    { text: "This is a task 2", textType: "p", listType: "bulleted" },
                    { text: "This is a task 3", textType: "p", listType: "bulleted" },
                    { text: "This is a task 4", textType: "p" },
                    { text: "This is a task 5", textType: "p", listType: "numbered" },
                    { text: "This is a task 6", textType: "p", listType: "numbered" },
                    { text: "This is a task 8", textType: "p", listType: "toDoChecked" },
                    { text: "This is a task 9", textType: "p", listType: "toDoUnchecked" }
                ]}
            />
        </div>
    );
}
