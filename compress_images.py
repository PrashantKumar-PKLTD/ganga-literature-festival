from PIL import Image
import os

input_dir = r"public\Images\hero"

def compress_to_webp(filename):
    input_path = os.path.join(input_dir, filename)
    output_path = os.path.join(input_dir, filename.replace(".png", ".webp"))
    
    if os.path.exists(input_path):
        # Open and convert to RGB if it's RGBA but doesn't need transparency, 
        # but these hero images might have complex blending, so let's keep RGBA if present.
        # Webp handles RGBA fine.
        img = Image.open(input_path)
        img.save(output_path, "webp", quality=80, method=6)
        
        orig_size = os.path.getsize(input_path) / (1024 * 1024)
        new_size = os.path.getsize(output_path) / (1024 * 1024)
        
        print(f"Compressed {filename}: {orig_size:.2f} MB -> {new_size:.2f} MB")

if __name__ == "__main__":
    compress_to_webp("Hero-1.png")
    compress_to_webp("Hero-2.png")
