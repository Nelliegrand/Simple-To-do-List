import Image from "next/image"
import Navigation from "@/src/components/Navigation";
import styles from "@/src/components/Home.module.css";

const LandingPage = () => {
  return (
    <>
    <Navigation />
    <div className={styles.homecontainer}>
      <h1 className={styles.hometitle}>Att göra-lista</h1>
      <Image src="/images/notepad.jpeg" alt="Att göra lista"  fill objectFit="cover" priority className={styles.image} />
    <a href="/todo" className={styles.todolink}>Gå till Att göra-listan</a>
    </div>
    </>
  )
}

export default LandingPage;
