import styles from "./HelpScreen.module.css";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";
import HelpSupportSearchIcon from "~/components/icons/HelpSupportSearchIcon";
import SmallArrowIcon from "~/components/icons/HelpSupportSmallArrowIcon";
import { useState } from "react";
import { Collection, HelpScreenProps } from "../../../types.module";

export default function HelpScreen({ collections, autoFocus }: HelpScreenProps) {
    const [activeCollection, setActiveCollection] = useState<Collection | null>(null);

    return (
        <div className={styles.wrapper}>
            <div className={styles.headerWithInput}>
                <div className={styles.header}>
                    {activeCollection ? (
                        <NavigationButton
                            styleMode="light"
                            icon="arrow"
                            position="left"
                            onClick={() => setActiveCollection(null)}
                        />
                    ) : null}
                    <span className={styles.headerSpan}>Help</span>
                    <NavigationButton styleMode="light" />
                </div>
                <div className={styles.inputWrapper}>
                    <textarea rows={1} placeholder="Search for help" className={styles.input} autoFocus={autoFocus} />
                    <div className={styles.searchIcon}>
                        <HelpSupportSearchIcon />
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {activeCollection ? (
                    <CollectionContent collection={activeCollection} />
                ) : (
                    <MainContent collections={collections} collectionClickHandler={setActiveCollection} />
                )}
            </div>
        </div>
    );
}

type MainContentProps = {
    collections: Collection[];
    collectionClickHandler: (collection: Collection) => void;
};

function MainContent({ collections, collectionClickHandler }: MainContentProps) {
    return (
        <>
            <div className={styles.contentHeader}>
                <h2 className={styles.h2}>4 collections</h2>
            </div>
            <div className={styles.collections}>
                {collections.map((collection) => (
                    <>
                        <div
                            key={collection.id}
                            className={styles.collectionPiece}
                            onClick={() => collectionClickHandler(collection)}
                        >
                            <div className={styles.collectionInfo}>
                                <p className={styles.collectionTitle}>{collection.title}</p>
                                <p className={styles.collectionDescription}>{collection.description}</p>
                                <p
                                    className={styles.collectionAmount}
                                >{`${collection.collectionAmount} article${collection.collectionAmount > 1 ? "s" : ""}`}</p>
                            </div>
                            <div className={styles.arrowIcon}>
                                <SmallArrowIcon style={{ minWidth: "8px", height: "8px", width: "auto" }} />
                            </div>
                        </div>
                        <div className={styles.separator} />
                    </>
                ))}
            </div>
        </>
    );
}

type CollectionContentProps = {
    collection: Collection;
};

function CollectionContent({ collection }: CollectionContentProps) {
    return (
        <>
            <div className={styles.contentHeader}>
                <p className={styles.title}>{collection.title}</p>
                <p className={styles.description}>{collection.description}</p>
                <p
                    className={styles.amount}
                >{`${collection.collectionAmount} article${collection.collectionAmount > 1 ? "s" : ""}`}</p>
            </div>
            <div className={styles.articles}>
                {collection.collectionArticles?.map((article) => (
                    <>
                        <div key={collection.id} className={styles.articlePiece}>
                            <div className={styles.collectionInfo}>
                                <p>{article}</p>
                            </div>
                            <div className={styles.arrowIcon}>
                                <SmallArrowIcon style={{ minWidth: "8px", height: "8px", width: "auto" }} />
                            </div>
                        </div>
                    </>
                ))}
            </div>
            <div className={styles.separator} />
        </>
    );
}
