# My Portfolio Site

Welcome to my portfolio website! This project showcases my work and skills as a developer. Below are the details regarding the structure, setup, and usage of the project.

## Project Structure

```
my-portfolio-site
├── src
│   ├── index.html               # Main HTML file for the portfolio website
│   ├── components               # Contains reusable HTML components
│   │   ├── nav.html             # Navigation bar
│   │   ├── welcome.html         # Welcome section
│   │   ├── projects.html        # Projects section
│   │   └── footer.html          # Footer section
│   ├── styles                   # Contains CSS files
│   │   ├── main.css             # Main styles
│   │   ├── themes.css           # Light and dark themes
│   │   └── animations.css       # Animation styles
│   ├── scripts                  # Contains JavaScript files
│   │   ├── main.js              # Main JavaScript functionality
│   │   ├── theme-toggle.js      # Theme switching functionality
│   │   └── contact.js           # Contact form functionality
│   ├── content                  # Contains JSON files for content management
│   │   ├── content.json         # General content
│   │   └── projects.json        # Project-specific data
│   └── assets                   # Contains assets like fonts and SVGs
│       ├── fonts                # Font files
│       └── svg                  # SVG files
├── docs                         # Documentation files
│   └── index.html               # Overview and instructions
├── .github                      # GitHub configuration
│   └── workflows
│       └── deploy.yml           # GitHub Actions for deployment
├── .gitignore                   # Files to ignore in Git
├── CNAME                        # Custom domain configuration
├── package.json                 # npm configuration
├── README.md                    # Project documentation
└── LICENSE                      # Licensing information
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone https://github.com/yourusername/my-portfolio-site.git
   ```

2. **Navigate to the project directory:**
   ```
   cd my-portfolio-site
   ```

3. **Install dependencies (if any):**
   ```
   npm install
   ```

4. **Open `src/index.html` in your browser to view the portfolio.**

## Usage

- The website features a responsive design that adapts to different screen sizes.
- Users can switch between light and dark themes.
- The projects section dynamically displays project cards based on the data in `src/content/projects.json`.
- A contact form is included for users to reach out, with validation handled in `src/scripts/contact.js`.

## Deployment

This project is configured for deployment on GitHub Pages. The workflow file located at `.github/workflows/deploy.yml` automates the deployment process.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

Feel free to explore and customize the project as needed!