import Link from "next/link";

export default function Home() {
    return (
        <main>
            <Link href="/sidebar">Sidebar</Link>
            <Link href="/tooltip">Tooltip</Link>
        </main>
    );
}
