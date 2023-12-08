import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* <div className="hero_section flex">
        <section className="hero_text_section">
          <h1 className="hero_text">Share your slice of Happiness</h1>
        </section>
        <section className="hero_image_section">
          <Image
            src="/images/hero.png"
            alt="Sharing Pizza"
            width={3000}
            height={100}
            className="hero_image"
          />
        </section>
      </div> */}
      <div className="hero_section flex">
        <section className="hero_text_section">
          <h1 className="hero_text">ENJOY TOGETHER!</h1>
          <Link className="hero_link" href="/">GET 30% OFF</Link>
        </section>
        <section className="hero_image_section">
          <Image
            src="/images/hero1.png"
            alt="Sharing Pizza"
            width={20000000}
            height={100}
            className="hero_image"
          />
        </section>
      </div>
      <div className="menu_section">
        <section className="menu_text_section">
          <h1 className="menu_header">Explore Our Menu</h1>
          <p className="menu_p">Embark on a journey through our extensive menu of handcrafted pizzas, each slice a masterpiece of taste.</p>
          <Link className="menu_link" href="/">View Menu</Link>
        </section>
        <section className="menu_image_section">
        <Image
            src="/images/menu.png"
            alt="Sharing Pizza"
            width={10000}
            height={100}
            className="menu_image"
          />
        </section>
      </div>
      <div className="account_section">
        <section className="account_image_section">
          <i className="fa-regular fa-user" style={{color: "#000000",}}></i>
        </section>
        <section className="account_text_section">
          <h1 className="account_header">Join Our Loyalty Program</h1>
          <p className="account_p">Sign up for our Loyalty Program and turn every bite into rewards – because the best pizzas should always come with extra perks!</p>
          <Link className="account_link" href="/">Join Now</Link>
        </section>

      </div>
    </main>
  )
}
