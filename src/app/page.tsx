import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href="/sidebar">Sidebar</Link>
            <Link href="/tooltip">Tooltip</Link>
            <Link href="/side-menu-popup">Side Menu Popup</Link>
        </main>
    );
}
