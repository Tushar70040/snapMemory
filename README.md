🖼️ Memory Game

A simple memory card game built with React and the Picsum Photos API.
Click each image only once — if you click the same one twice, the game resets!

🚀 Features

Fetches random images from the Picsum Photos API.

Shuffles images after every click.

Score system:

+1 for every correct (unique) click.

Reset to 0 if you click the same image twice.

Tracks your best score.

🛠️ Tech Stack

React (Functional Components + Hooks)

JavaScript (ES6+)

Picsum Photos API
 for random images

 📸 How It Works

On load, 8–12 random images are displayed.

When you click an image:

If it's new → score increases.

If it's already clicked → game resets (score = 0).

After each click, the images are shuffled to make the game challenging.