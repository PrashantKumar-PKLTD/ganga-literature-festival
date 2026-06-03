from PIL import Image
import os
import glob

# Directory containing the images
img_dir = r"c:\Users\ASUS\OneDrive\Desktop\ganga-literature-festival\ganga-literature-festival\public\Images\speakers"

# Find all jpegs and pngs in the directory
image_paths = glob.glob(os.path.join(img_dir, "*.jpg")) + glob.glob(os.path.join(img_dir, "*.png"))

for path in image_paths:
    print(f"Processing {path}...")
    try:
        with Image.open(path) as img:
            # Convert to RGB if it's RGBA (for PNGs)
            if img.mode in ("RGBA", "P"):
                img = img.convert("RGB")
            
            # Calculate new size (max width/height 1200px while maintaining aspect ratio)
            max_size = (1200, 1200)
            img.thumbnail(max_size, Image.Resampling.LANCZOS)
            
            # Save as WebP
            base_name = os.path.splitext(os.path.basename(path))[0]
            webp_path = os.path.join(img_dir, f"{base_name}.webp")
            
            img.save(webp_path, "WEBP", quality=80, method=4)
            print(f"Saved optimized: {webp_path}")
            
    except Exception as e:
        print(f"Failed to process {path}: {e}")
