import { useNavigate } from "react-router-dom";

export default function CityCard({ city, index }) {
  const navigate = useNavigate();
  const hasImage = Boolean(city.image && city.imageBox);

  return (
    <g
      className="ganga-city cursor-pointer group hover:opacity-80 transition-opacity duration-300"
      data-city-index={index}
      onClick={() => navigate(`/city/${city.slug}`)}
    >
      {hasImage ? (
        <image
          className="ganga-city__image transition-all duration-300 group-hover:-translate-y-1 group-hover:drop-shadow-[0_0_12px_rgba(30,79,179,0.15)]"
          href={city.image}
          x={city.imageBox.x}
          y={city.imageBox.y}
          width={city.imageBox.width}
          height={city.imageBox.height}
          preserveAspectRatio="xMidYMid meet"
        />
      ) : null}

      <text
        className="ganga-city__name"
        x={city.label.x}
        y={city.label.y}
        textAnchor={city.label.anchor || "middle"}
      >
        {city.name}
      </text>
    </g>
  );
}
