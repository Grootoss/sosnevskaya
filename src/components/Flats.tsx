import { useEffect, useRef, useState } from "react";
import { asset } from "../asset";

const carouselSlides = [0, 1, 2] as const;
const floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export function Flats() {
  const [floor, setFloor] = useState(4);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let pointerId: number | null = null;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = carousel.scrollLeft;
      moved = false;
      carousel.setPointerCapture(event.pointerId);
      carousel.classList.add("flats__carousel--dragging");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 3) moved = true;
      carousel.scrollLeft = startScroll - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      pointerId = null;
      carousel.classList.remove("flats__carousel--dragging");
      carousel.releasePointerCapture(event.pointerId);
    };

    const onClickCapture = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };

    carousel.addEventListener("pointerdown", onPointerDown);
    carousel.addEventListener("pointermove", onPointerMove);
    carousel.addEventListener("pointerup", onPointerUp);
    carousel.addEventListener("pointercancel", onPointerUp);
    carousel.addEventListener("click", onClickCapture, true);

    return () => {
      carousel.removeEventListener("pointerdown", onPointerDown);
      carousel.removeEventListener("pointermove", onPointerMove);
      carousel.removeEventListener("pointerup", onPointerUp);
      carousel.removeEventListener("pointercancel", onPointerUp);
      carousel.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <section className="flats" id="apartments" aria-labelledby="flats-title">
      <div
        className="flats__carousel"
        ref={carouselRef}
        tabIndex={0}
        role="region"
        aria-label="Фото комплекса"
      >
        {carouselSlides.map((index) => (
          <div className="flats__slide" key={index}>
            <picture>
              <source
                media="(min-width: 1440px)"
                srcSet={asset("images/flat-desktop.jpg")}
              />
              <source
                media="(min-width: 834px)"
                srcSet={asset("images/flat-tablet.jpg")}
              />
              <img
                className="flats__slide-image"
                src={asset("images/flat-mobile.jpg")}
                alt=""
                width={340}
                height={281}
                draggable={false}
              />
            </picture>
          </div>
        ))}
      </div>

      <div className="flats__content">
        <div className="flats__main">
          <h2 className="flats__title" id="flats-title">
            Квартиры
          </h2>

          <div className="flats__step">
            <span className="flats__step-text">Шаг 1 из 3</span>
            <div
              className="flats__progress"
              role="progressbar"
              aria-valuemin={1}
              aria-valuemax={3}
              aria-valuenow={1}
              aria-label="Шаг 1 из 3"
            >
              <span className="flats__progress-fill" />
            </div>
          </div>

          <p className="flats__subtitle">Выберите этаж</p>

          <label className="flats__select">
            <span className="visually-hidden">Этаж</span>
            <select
              value={floor}
              onChange={(event) => setFloor(Number(event.target.value))}
            >
              {floors.map((value) => (
                <option value={value} key={value}>
                  {value} этаж
                </option>
              ))}
            </select>
          </label>

          <ul className="flats__stats">
            <li className="flats__stat">
              <span className="flats__stat-num">4</span>
              <span className="flats__stat-text">
                Квартиры доступно
                <br />
                на этаже
              </span>
            </li>
            <li className="flats__stat">
              <span className="flats__stat-num">2</span>
              <span className="flats__stat-text">
                Квартиры
                <br />
                уже продано
              </span>
            </li>
          </ul>

          <button className="flats__cta" type="button">
            Продолжить
          </button>
        </div>

        <div className="flats__choose">
          <picture>
            <source
              media="(min-width: 1440px)"
              srcSet={asset("images/flat-choose-desktop.png")}
            />
            <source
              media="(min-width: 834px)"
              srcSet={asset("images/flat-choose-tablet.png")}
            />
            <img
              className="flats__choose-image"
              src={asset("images/flat-choose-mobile.png")}
              alt="Фасад дома"
              width={187}
              height={500}
            />
          </picture>
        </div>
      </div>
    </section>
  );
}
