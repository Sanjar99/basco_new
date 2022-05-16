import img1 from "../../Assets/images/man-1.png";
import img2 from "../../Assets/images/man-2.png";
import img3 from "../../Assets/images/man-3.png";
import "./_footer.scss";
import "../main.scss";
const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="container">
          <div className="footer__box">
            <img src={img1} alt="img1" className="footer__img" />
            <img
              src={img2}
              alt="img2"
              className="footer__img footer__img--absolyut"
            />
            <img src={img3} alt="img3" className="footer__img" />
          </div>
          <div className="footer__wrapper">
            <h3 className="footer__subject">Hali ham savollaringiz bormi?</h3>
            <p className="footer__text">
              Savollaringizga javob topa olmasangiz biz bilan bog’laning
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
