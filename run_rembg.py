from rembg import remove
from PIL import Image

input_path = r"C:\Users\ASUS\.gemini\antigravity-ide\brain\000db146-8008-4fd1-bbef-d18e6936fcb7\media__1780405761742.jpg"
output_path = r"public\Images\decorations\hands-books-transparent.png"

input_img = Image.open(input_path)
output_img = remove(input_img)
output_img.save(output_path)
print("Saved to", output_path)
