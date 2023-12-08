import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.all}>
            <div className={styles.first}>
                    <p className={styles.title}>Golden Slice</p>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p className={styles.copy}>&copy; 2023 Golden Slice</p>
            </div>
            <div className={styles.comp}>
                    <p class={styles.bold}>Company</p>
                    <br/>
                    <p>About Us</p>
                    <p>Careers</p>
                    <br/>
                    <p>+1(555)-555-5555</p>
                    <p>support@goldenslice.com</p>
            </div>
            <div className={styles.custom}>
                    <p className={styles.bold}>Customer Service</p>
                    <br/>
                    <p>FAQs</p>
                    <p>Terms / Privacy Policy</p>
                </div>
                <div className={styles.acc}>
                    <p className={styles.bold}>My Account</p>
                    <br/>
                    <p>My Orders</p>
                    <p>My Account</p>
                    <p>Delivery Info</p>
                </div>
                <div className={styles.stay}>
                    <p className={styles.bold}>Stay Connected</p>
                    <div className={styles.fonts}>
                        <i className="fa-brands fa-facebook"></i>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-tiktok"></i>
                    </div>
                </div>
        </div>
        </div>
    );
};

export default Footer;