import "../style/footer.scss";
import logoEmail from "../assets/email.svg";
import logoLocation from "../assets/location.svg";
import logoPhone from "../assets/phone.svg";
const Footer = () => {
  return (
    <>
      <footer>
        <h3 className="footer_title">Contact</h3>
        <div className="footer_containter">
          <div className="contact_footer">
            <img src={logoEmail} alt="" />
            <p>e-besson@laposte.net</p>
          </div>
          <div className="contact_footer">
            <img src={logoPhone} alt="" />
            <p>06 77 15 85 85</p>
          </div>
          <div className="contact_footer">
            <img src={logoLocation} alt="" />
            <p>Lyon | Villefranche | Beaujolais</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
