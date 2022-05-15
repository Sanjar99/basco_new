import React from "react";
import "..//main.scss";
import "./_platform.scss";
import img1 from "../../Assets/images/platformImg-1.png";
import img2 from "../../Assets/images/platformImg-2.png";
import img3 from "../../Assets/images/platformImg-3.png";
import play from "../../Assets/images/platformImg-4.png";
import star from "../../Assets/images/star (1).png";
import plus from "../../Assets/images/plus (1).png";
import sariq from "../../Assets/images/adviceImg-3.png";
import halqa from "../../Assets/images/adviceImg-1.png";
function Platform() {
  return (
    <section className="platform container">
      <div className="platform__left">
        <h2 className="platform__left--title">
          Tanishing! Basco ERP <br /> platformasi
        </h2>
        <p className="platform__left--parag--1">
          (Ehtiyot bo’ling! Bu platforma biznesingizni butunlayga o’zgartirib
          yuborishi mumkin!)
        </p>
        <p className="platform__left--parag--2">Ha, siz to’g’ri o’qidingiz…</p>
        <p className="platform__left--parag--3">
          Basco ERP platformasini kompaniyangizga joriy qilganingizda hech narsa
          avvalgidek bo’lmaydi. Samaradorlik oshadi, xarajatlar kamayadi va
          kompaniyangiz raqobat- chilaringizni hayron qoldirishni boshlaydi.
        </p>
        <p className="platform__left--parag--4">
          Basco ERP platformasi kompaniyangizdagi muhim fundamental jarayonlarni
          samarali boshqarish va avtomatlashtirish imkoniyatini beradi.
        </p>
        <div className="platform__left--more--button">
          <button>Davomini o`qish</button>
        </div>
        <img className="platform__left--img--1" src={star} alt="" />
        <img className="platform__left--img--2" src={plus} alt="" />
      </div>
      <div className="platform__right">
        <img className="platform__right--img--1" src={img1} alt="" />
        <img className="platform__right--img--2" src={img2} alt="" />
        <img className="platform__right--img--3" src={img3} alt="" />
        <img className="platform__right--img--4" src={star} alt="" />
        <img className="platform__right--img--5" src={plus} alt="" />
        <img className="platform__right--img--6" src={halqa} alt="" />
        <img className="platform__right--img--7" src={sariq} alt="" />
        <div className="platform__right--button">
          <p> Videoni ko’rish</p> <img src={play} alt="" />
        </div>
      </div>
    </section>
  );
}

export default Platform;
