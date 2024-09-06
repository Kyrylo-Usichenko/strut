"use client";

import HelpSupportPopup from "~/components/shared/help-support-popup/HelpSupportPopup";
import { testMessagesData, testCollectionsData } from "~/components/shared/help-support-popup/_test_data/testData";

export default function Page() {
    return <HelpSupportPopup messagesData={testMessagesData} collectionsData={testCollectionsData} />;
}
