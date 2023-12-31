import Navbar from "../../components/Navbar";
import Parther from "./img/partner.png";
import "./cooperation.css";

function Cooperation() {
  return (
    <>
      <Navbar />
      <div className="cooperation">
        <h1 className="cooperation__title">Сотрудничество</h1>
        <div className="cooperation__wrapper">
          <div className="cooperation__image__wrapper">
            <img src={Parther} />
          </div>
          <div>
            <p className="cooperation__text">
              Благодаря опыту, профессионализму, европейскому качеству и
              широкому ассортименту санитарно-технических изделий наша компания
              заслужила доверие покупателей и партнеров. В достижении
              положительной репутации как надежного партнера, несомненно, важную
              роль играет многолетняя слаженная работа филиалов и оптовых
              компаний, действующих в различных регионах России. Мы всегда
              стремимся расширять деловые возможности, и открыты к
              сотрудничеству с торговыми, строительными, проектными и монтажными
              организациями.
            </p>
            <p className="cooperation__text">
              Поставки нашего товара осуществляются по предварительным заявкам
              клиентов на условиях согласно типового договора купли-продажи.
              Дополнительные условия, не предусмотренные типовой формой договора
              поставки, в том числе по доставке товара, по предоставлению
              скидок, отсрочки платежа или товарного кредита, согласовываются с
              соответствующим менеджером отдела продаж или с руководителем
              регионального направления отдела продаж центрального офиса или
              филиала.
            </p>
            <p className="cooperation__text">
              Для получения более подробной информации, отправьте на наш адрес
              письмо с реквизитами Вашей компании и кратким описанием рода ее
              деятельности.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cooperation;
