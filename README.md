# Birthday Website for My Bestie 🎂

A beautiful, interactive birthday website created with HTML, CSS, and JavaScript.

## Features

- 🎂 **Home Page** - Beautiful animated birthday card
- 💝 **Wishes Page** - Unique wish cards with beautiful designs
- 🕯️ **Cake Page** - Interactive cake with blowable candles
- 🎁 **Gift Page** - Virtual gift box with special surprises
- 💖 **Message Page** - Heartfelt apology and message

## Deployment on Vercel

### Option 1: Using Vercel CLI

1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```

2. Navigate to the project directory:
   ```bash
   cd Birthday
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts to complete deployment.

### Option 2: Using GitHub

1. Create a new repository on GitHub
2. Push all files to the repository
3. Go to [vercel.com](https://vercel.com)
4. Sign in with your GitHub account
5. Click "New Project"
6. Import your repository
7. Vercel will automatically detect it's a static site and deploy it

### Option 3: Drag and Drop

1. Go to [vercel.com](https://vercel.com)
2. Sign in or create an account
3. Drag and drop the entire project folder
4. Vercel will deploy it automatically

## Customization

- Edit the HTML files to change messages and content
- Modify CSS variables in `styles.css` to change colors
- Add your own images by replacing placeholder divs with `<img>` tags

## File Structure

```
Birthday/
├── index.html          # Home page
├── wishes.html         # Wishes page
├── cake.html          # Cake page
├── gift.html          # Gift page
├── sorry.html         # Message page
├── styles.css         # Main styles
├── wishes.css         # Wishes page styles
├── cake.css           # Cake page styles
├── cake.js            # Cake interactions
├── gift.css           # Gift page styles
├── gift.js            # Gift interactions
├── sorry.css          # Message page styles
├── sorry.js           # Message page scripts
├── script.js          # Main scripts
├── wishes.js          # Wishes page scripts
├── vercel.json        # Vercel configuration
└── README.md          # This file
```

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).

Enjoy! 🎉
