const amenities = [
  { id: "park", label: "Парк", icon: "/images/park.svg" },
  { id: "sport", label: "Спорт", icon: "/images/sport.svg" },
  { id: "shop", label: "Магазин", icon: "/images/shop.svg" },
  { id: "restaurant", label: "Ресторан", icon: "/images/restaurant.svg" },
  { id: "river", label: "Водоем", icon: "/images/river.svg" },
] as const;

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
] as const;

const pins = [
  { type: "park", x: 30, y: 16 },
  { type: "sport", x: 58, y: 20 },
  { type: "shop", x: 78, y: 32 },
  { type: "park", x: 18, y: 44 },
  { type: "restaurant", x: 50, y: 56 },
  { type: "shop", x: 70, y: 50 },
  { type: "park", x: 26, y: 64 },
  { type: "sport", x: 48, y: 72 },
  { type: "park", x: 66, y: 76 },
  { type: "river", x: 38, y: 84 },
] as const;

const iconByType = Object.fromEntries(
  amenities.map((item) => [item.id, item.icon]),
) as Record<(typeof amenities)[number]["id"], string>;

export function Location() {
  return (
    <section className="location" aria-labelledby="location-title">
      <div className="location__top">
        <div className="location__intro">
          <h2 className="location__title" id="location-title">
            Локация
          </h2>
          <p className="location__text">
            Удобное расположение. Поблизости парки, торговые центры, кинотеатры
            и другие места для отдыха
          </p>

          <ul className="location__amenities">
            {amenities.map((item) => (
              <li className="location__amenity" key={item.id}>
                <span className="location__icon" aria-hidden="true">
                  <img src={item.icon} alt="" width={24} height={24} />
                </span>
                <span className="location__label">{item.label}</span>
              </li>
            ))}
          </ul>
        </div>

        <ul className="location__stats">
          {stats.map((stat) => (
            <li className="location__stat" key={stat.value + stat.unit}>
              <p className="location__stat-value">
                <span className="location__stat-num">{stat.value}</span>
                <span className="location__stat-sep">/</span>
                <span className="location__stat-unit">{stat.unit}</span>
              </p>
              <p className="location__stat-caption">{stat.caption}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="location__map-wrap">
        <div className="location__map">
          <picture>
            <source
              media="(min-width: 834px)"
              srcSet="/images/map-tablet-circle.png"
            />
            <img
              className="location__map-image"
              src="/images/map-mobile-circle.png"
              alt="Карта расположения"
              width={375}
              height={375}
            />
          </picture>
          <span
            className="location__pin location__pin--main"
            aria-label="Объект"
          />
          {pins.map((pin, index) => (
            <span
              className="location__pin"
              style={{ left: `${pin.x}%`, top: `${pin.y}%` }}
              key={`${pin.type}-${index}`}
              aria-hidden="true"
            >
              <img src={iconByType[pin.type]} alt="" width={18} height={18} />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
