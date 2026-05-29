import { GALLERY_IMGS } from "../data/misc";

export default function Gallery() {
  return (
    <section id="gallery" className="glf-section glf-gallery">
      <div className="glf-container">
        <div className="glf-section-tag">Photo Gallery</div>
        <h2 className="glf-section-title">Moments from <span>Past Editions</span></h2>
        <div className="glf-gallery-grid">
          {GALLERY_IMGS.map((img, i) => (
            <div className="glf-gallery-item" key={i}>
              <img src={img.src} alt={img.alt} />
              <div className="glf-gallery-item-overlay">
                <span className="glf-gallery-item-label">{img.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
