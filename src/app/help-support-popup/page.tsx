"use client";

import HelpSupportPopup from "~/components/shared/help-support-popup/HelpSupportPopup";

export default function Page() {
    return (
        <HelpSupportPopup
            messages={[
                {
                    imagePath:
                        "https://static.intercomassets.com/avatars/6691399/square_128/kyle-thacker-1705882183.jpg",
                    name: "Alexander",
                    messagePreview: "Hey, how are you?",
                    timeAgo: "2h ago"
                },
                {
                    name: "Denis",
                    messagePreview: "Pummel Party go?",
                    timeAgo: "3w ago"
                }
            ]}
        />
    );
}
