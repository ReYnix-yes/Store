import Navbar from "../../components/Navbar";
import "./career.css"

function Career() {
  return (
    <>
      <Navbar />
      <div className="career">
        <h1 className="career__title">Карьера у нас</h1>
        <p className="career__text">
          Наши предприятия всегда привлекательны для соискателей. Мы даем
          возможность получать достойную заработную плату, расти и развиваться в
          профессиональном плане каждому сотруднику, создавая благоприятные
          условия труда и повышая корпоративный дух.
        </p>
        <p className="career__text">
          Если Вы хотите стать частью нашей команды, рассмотрите, имеющиеся в
          настоящее время, вакансии или направьте своё резюме на электронный
          адрес отдела кадров.
        </p>
        <p className="career__text">
          При наличии вакансии мы с Вами обязательно свяжемся.
        </p>
        <div className="career__address__wrapper">
          <h1 className="career__address__title">
            Отдел кадров АО "Завод Универсал"
          </h1>
          <p className="career__text">
            Адрес: Кемеровская обл., г. Новокузнецк, Кузнецкое шоссе, 20
          </p>
          <p className="career__text">E-mail: house.com119@gmail.com</p>
          <p className="career__text">Телефон: (951) 597-97-18</p>
        </div>
      </div>
    </>
  );
}

export default Career;
