import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href="/sidebar">Sidebar</Link>
            <Link href="/tooltip">Tooltip</Link>
            <Link href="/side-menu-popup">Side Popup Menu</Link>
            <Link href="/stage-menu">Stage Popup Menu</Link>
            <Link href="/task-popup">Task Popup Menu</Link>
        </main>
    );
}
