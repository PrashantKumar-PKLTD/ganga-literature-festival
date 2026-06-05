import CityCard from "./CityCard";

export default function CityMarkers({ cities }) {
  return (
    <svg
      className="ganga-city-layer"
      width="100%"
      height="100%"
      viewBox="0 0 1210 829"
      preserveAspectRatio="xMidYMid meet"
      aria-hidden="true"
    >
      {cities.map((city, index) => (
        <CityCard key={city.name} city={city} index={index} />
      ))}
    </svg>
  );
}
