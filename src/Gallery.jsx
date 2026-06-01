import { GALLERY_IMGS } from "./data/misc";

export default function Gallery() {
  return (
    <section id="gallery" className="c-section c-gallery">
      <div className="c-container">
        <div className="c-tag">Gallery</div>
        <h2 className="c-title">Moments from <span>Past Editions</span></h2>
        <div className="c-gallery-grid">
          {GALLERY_IMGS.map((img, i) => (
            <div className="c-gallery-item" key={i}>
              <img src={img.src} alt={img.alt} />
              <div className="c-gallery-overlay">
                <span className="c-gallery-label">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
