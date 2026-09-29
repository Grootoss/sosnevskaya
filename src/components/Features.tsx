import { useEffect, useRef } from "react";
import { asset } from "../asset";

const stats = [
  {
    value: "14",
    unit: "Минут",
    caption: "Пешком до метро «Тульская»",
  },
  {
    value: "21",
    unit: "Минута",
    caption: "Пешком до метро «Тульская»",
  },
  {
    value: "100",
    unit: "Метров",
    caption: "До кремля",
  },
] as const;

const features = [
  {
    id: 1,
    title: "Индивидуальное отопление",
    image: asset("images/features-mobile-1.jpg"),
  },
  {
    id: 2,
    title: "Тёплые полы",
    image: asset("images/features-mobile-2.jpg"),
  },
  {
    id: 3,
    title: "Панорамное остекление лоджий",
    image: asset("images/features-mobile-3.jpg"),
  },
  {
    id: 4,
    title: "Закрытая территория",
    image: asset("images/features-mobile-4.jpg"),
  },
  {
    id: 5,
    title: "Видеонаблюдение придомовой территории и подъезда",
    image: asset("images/features-mobile-5.jpg"),
    large: true,
  },
  {
    id: 6,
    title: "Умный домофон",
    image: asset("images/features-mobile-6.jpg"),
  },
  {
    id: 7,
    title: "Корзины под кондиционер",
    image: asset("images/features-mobile-7.jpg"),
  },
  {
    id: 8,
    title: "Черновая отделка",
    image: asset("images/features-mobile-8.jpg"),
  },
  {
    id: 9,
    title: "Кладовые на этаже",
    image: asset("images/features-mobile-9.jpg"),
  },
  {
    id: 10,
    title: "Современные планировки",
    image: asset("images/features-mobile-10.jpg"),
    large: true,
  },
  {
    id: 11,
    title: "Погреб в квартирах первого этажа",
    image: asset("images/features-mobile-11.jpg"),
    large: true,
  },
] as const;

const columns = [
  [features[0], features[2]],
  [features[1], features[3]],
  [features[4]],
  [features[5], features[7]],
  [features[6], features[8]],
  [features[9]],
  [features[10]],
] as const;

function FeatureCard({
  id,
  title,
  image,
  large,
}: {
  id: number;
  title: string;
  image: string;
  large?: boolean;
}) {
  return (
    <article className={`features__card${large ? " features__card--large" : ""}`}>
      <img
        className="features__image"
        src={image}
        alt=""
        width={large ? 538 : 280}
        height={large ? 547 : 228}
      />
      <div className="features__meta">
        <span className="features__num">{String(id).padStart(2, "0")}</span>
        <p className="features__label">{title}</p>
      </div>
    </article>
  );
}

export function Features() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let pointerId: number | null = null;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse" || event.button !== 0) return;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = scroller.scrollLeft;
      moved = false;
      scroller.setPointerCapture(event.pointerId);
      scroller.classList.add("features__scroller--dragging");
    };

    const onPointerMove = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      const delta = event.clientX - startX;
      if (Math.abs(delta) > 3) moved = true;
      scroller.scrollLeft = startScroll - delta;
    };

    const onPointerUp = (event: PointerEvent) => {
      if (pointerId !== event.pointerId) return;
      pointerId = null;
      scroller.classList.remove("features__scroller--dragging");
      scroller.releasePointerCapture(event.pointerId);
    };

    const onClickCapture = (event: MouseEvent) => {
      if (!moved) return;
      event.preventDefault();
      event.stopPropagation();
      moved = false;
    };

    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", onPointerUp);
    scroller.addEventListener("pointercancel", onPointerUp);
    scroller.addEventListener("click", onClickCapture, true);

    return () => {
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", onPointerUp);
      scroller.removeEventListener("pointercancel", onPointerUp);
      scroller.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <section className="features" id="features" aria-labelledby="features-title">
      <ul className="features__stats">
        {stats.map((stat) => (
          <li className="features__stat" key={stat.value + stat.unit}>
            <p className="features__stat-value">
              <span className="features__stat-num">{stat.value}</span>
              <span className="features__stat-sep">/</span>
              <span className="features__stat-unit">{stat.unit}</span>
            </p>
            <p className="features__stat-caption">{stat.caption}</p>
          </li>
        ))}
      </ul>

      <h2 className="features__title" id="features-title">
        Преимущества
      </h2>

      <div
        className="features__scroller"
        ref={scrollerRef}
        tabIndex={0}
        role="region"
        aria-label="Преимущества, листайте вбок"
      >
        <div className="features__track">
          {columns.map((column, index) => (
            <div
              className={`features__col${column.length === 1 ? " features__col--large" : ""}`}
              key={index}
            >
              {column.map((item) => (
                <FeatureCard key={item.id} {...item} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
