import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1> The marauders map </h1>
            <div className={styles.buttonGroup}>
              <Link href="/map">
                <Button variant="primary" size="lg">
                  I solemnly swear that I am up to no good.
                </Button>
              </Link>
            </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://dettki.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to dettki.net →
        </a>
      </footer>
    </div>
  );
}
