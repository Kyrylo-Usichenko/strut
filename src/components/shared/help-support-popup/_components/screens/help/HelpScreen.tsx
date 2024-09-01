import styles from "./HelpScreen.module.css";
import NavigationButton from "../../buttons/navigation-button/NavigationButton";
import HelpSupportSearchIcon from "~/components/icons/HelpSupportSearchIcon";
import SmallArrowIcon from "~/components/icons/HelpSupportSmallArrowIcon";
import CrossIcon from "~/components/icons/CrossIconMedium";
import { Collection, HelpScreenProps } from "../../../types.module";
import SendMessageButton from "../../buttons/send-message-button/SendMessageButton";

export default function HelpScreen({
    collections,
    autoFocus = false,
    searchValue = "",
    setSearchValue = () => {},
    activeCollection = null,
    setActiveCollection = () => {},
    onSendMessageClick = () => {}
}: HelpScreenProps) {
    function searchCollections() {
        return collections.filter((collection) => {
            return collection.title.toLowerCase().includes(searchValue.toLowerCase());
        });
    }

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
                    <textarea
                        rows={1}
                        placeholder="Search for help"
                        className={styles.input}
                        autoFocus={autoFocus}
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />
                    <div className={styles.searchIcon}>
                        {searchValue === "" ? (
                            <HelpSupportSearchIcon />
                        ) : (
                            <button onClick={() => setSearchValue("")}>
                                <CrossIcon />
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <div className={styles.content}>
                {activeCollection ? (
                    <CollectionContent collection={activeCollection} />
                ) : searchValue === "" ? (
                    <MainContent collections={collections} collectionClickHandler={setActiveCollection} />
                ) : searchCollections().length === 0 ? (
                    <NoResultsContent searchString={searchValue} onClick={onSendMessageClick} />
                ) : (
                    <MainContent collections={searchCollections()} collectionClickHandler={setActiveCollection} />
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
                    <div key={collection.id}>
                        <div className={styles.collectionPiece} onClick={() => collectionClickHandler(collection)}>
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
                    </div>
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

function NoResultsContent({ searchString, onClick }: { searchString: string; onClick?: () => void }) {
    return (
        <div className={styles.noResultsDiv}>
            <p className={styles.tryAgain}>Try Again</p>
            <p className={styles.noResults}>
                No results for <b className={styles.bold}>&apos;{searchString}&apos;</b>
            </p>
            <SendMessageButton colorMode="light" onClick={onClick} />
        </div>
    );
}
