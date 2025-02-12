import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Main = () => {
  return (
    <div className="main">
      <div className="item-list">
        <div className="item-list__header">
          <h2>Artistas populares</h2>
          <a className="item-list__link" href="">
            Mostrar tudo
          </a>
        </div>
     
      <div className="item-list__container">
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab676161000051744dcd8a3bff84cd7703892cf4"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <p className="single-item__title">Henrique & Juliano</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab6761610000517499c26e8fb91634b00764bbb9"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <p className="single-item__title">MC Tuto</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab6761610000517477937baabc49dea13c17c706"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <p className="single-item__title">Jorge & Mateus</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616100005174b4c07f06044ca6f1a8548192"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <p className="single-item__title">NATTAN</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab676161000051747ffc3038ef5e67354ecdede1"
                alt="imagem do grupo menos é mais"
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <p className="single-item__title">Grupo Menos É Mais</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab676161000051747098ffe23a919f7742979c6e"
                alt="imagem do grupo menos é mais"
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <p className="single-item__title">Zé Neto & Cristiano</p>
            <p className="single-item__type">Artista</p>
          </div>
        </div>
      </div>
      </div>
      <div className="item-list">
        <div className="item-list__header">
          <h2>Músicas populares</h2>
          <a className="item-list__link" href="">
            Mostrar tudo
          </a>
        </div>
      

      <div className="item-list__container">
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
          <div className="single-item__2lines ">
            <p className="single-item__title">Última Saudade - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
            </div>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e02af41105c5cd91b28f2cf219d"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <div className="single-item__2lines ">
            <p className="single-item__title">Xonei</p>
            <p className="single-item__type">
              Jorge & Matheus, Henrique & Juliano
            </p>
            </div>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e02d8bfb4567b1b5e5bc4da915b"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
          <div className="single-item__2lines ">
            <p className="single-item__title">Oh Garota Eu Quero Você Só Pra Mim</p>
            <p className="single-item__type">Oruam, Zé Felipe, Dj Lc da Roça, MC K9, MC Rodrigo do CN, MC pl alves</p>
            </div>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
          <div className="single-item__2lines ">
            <p className="single-item__title">Amigo Da Minha Saudade - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
            </div>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                alt="imagem do grupo menos é mais"
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
          <div className="single-item__2lines ">
            <p className="single-item__title">Seja Ex - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
            </div>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
          <div className="single-item__2lines ">
            <p className="single-item__title">De Trás Pra Frente - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
            </div>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <p className="single-item__title">Aquela Pessoa - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e0299c540c0f78793fcea84a920"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
          <div className="single-item__2lines ">
            <p className="single-item__title">Meu Amor - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
            </div>  
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e025bb6668a856035550a66fc31"
                alt=""
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
          <div className="single-item__2lines ">
            <p className="single-item__title">Como É Que A Gente Fica - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
          </div>
          </div>
        </div>
        <div className="single-item">
          <div className="single-item__div-image-button">
            <div className="single-item__div-image">
              <img
                className="single-item__image "
                src="https://i.scdn.co/image/ab67616d00001e022774b00531d558bc19e12a24"
                alt="imagem do grupo menos é mais"
              />
            </div>
            <FontAwesomeIcon
              className="single-item__icon "
              icon={faCirclePlay}
            />
          </div>

          <div className="single-item__texts">
            <div className="single-item__2lines ">
            <p className="single-item__title">Romântico - Ao Vivo</p>
            <p className="single-item__type">Henrique & Juliano</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Main;
