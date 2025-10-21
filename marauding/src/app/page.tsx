import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div className={styles.content}>
          <h1> The marauders map</h1>
          <span className={styles.subtitle}> To help you find places around campus that you didnt know existed</span>
            <div className={styles.buttonGroup}>
              <Link href="/map">
                <Button variant="primary" size="lg">
                  I solemnly swear that I am up to no good
                </Button>
              </Link>
            </div>
        </div>
      </main>
      <footer className={styles.footer}>
      <a
          href="https://forms.gle/69DURVxw65qthZjm6"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Submit places
        </a>
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
