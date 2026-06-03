from PIL import Image, ImageDraw

def remove_bg(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    
    # Floodfill from all 4 corners to ensure all connected background is removed
    w, h = img.size
    corners = [(0, 0), (w-1, 0), (0, h-1), (w-1, h-1)]
    
    # Background color seems to be around #F5F1EB
    # A generous threshold of 50-70 should capture the faint geometric lines
    for corner in corners:
        ImageDraw.floodfill(img, xy=corner, value=(0, 0, 0, 0), thresh=75)
        
    img.save(output_path, "PNG")
    print(f"Saved transparent image to {output_path}")

if __name__ == "__main__":
    remove_bg(
        "public/Images/decorations/lotus-image.png", 
        "public/Images/decorations/lotus-transparent.png"
    )
