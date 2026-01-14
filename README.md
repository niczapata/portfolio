# Nicolas Zapata - Portfolio Website

A personal portfolio website built with Next.js showcasing skills, experience, projects, and blog posts.

## Features

- **Skills Showcase**: Interactive progress bars displaying proficiency levels
- **Experience Timeline**: Professional work history with descriptions
- **Projects Portfolio**: GitHub repositories with project details
- **Blog Section**: Technical articles and tutorials
- **Responsive Design**: Mobile-friendly interface using Bootswatch theme
- **Page Transitions**: Smooth navigation with nprogress loading indicator
- **Dark Mode Support**: Toggle between light and dark themes

## Tech Stack

- **Framework**: Next.js 15.0.3
- **UI Library**: React 18.2.0
- **Styling**: Bootswatch 5.3.1 (Cosmo theme)
- **Utilities**:
  - classnames 2.3.2
  - nprogress 0.2.0
- **Deployment**: Fly.io with Docker

## Project Structure

```
portfolio/
├── components/
│   ├── Layout.js       # Main layout component with navbar and footer
│   └── Navbar.js       # Navigation component
├── pages/
│   ├── _app.js         # Custom App component
│   ├── _document.js    # Custom Document component
│   ├── _error.js       # Error page
│   ├── 404.js          # Not Found page
│   ├── index.js        # Homepage (profile, skills, experience, projects)
│   ├── blog.js         # Blog listing page
│   ├── github.js       # GitHub integration page
│   ├── post.js         # Individual blog post page
│   └── resume.js       # Resume page
├── public/             # Static assets (images, icons)
├── profile.js          # Data file (skills, experiences, projects, posts)
├── global.css          # Global styles
├── Dockerfile          # Docker configuration
├── fly.toml            # Fly.io deployment config
└── package.json        # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/NicolasZapata/portfolio.git
cd portfolio

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The development server runs on `http://localhost:3000`.

## Deployment

### Fly.io

The project is configured for deployment on Fly.io:

```bash
# Install flyctl
curl -L https://fly.io/install.sh | sh

# Deploy
fly deploy
```

### Docker

Build and run with Docker:

```bash
# Build the image
docker build -t portfolio .

# Run the container
docker run -p 3000:3000 portfolio
```

## Customization

### Profile Data

Edit `profile.js` to update:

- **Skills**: Add or modify skills with proficiency percentages
- **Experience**: Update work history, job titles, and descriptions
- **Projects**: Add new projects with descriptions, images, and repository links
- **Posts**: Create blog posts with titles and content

### Styling

The project uses Bootswatch Cosmo theme. To change the theme:

1. Update the Bootswatch theme in `package.json`
2. Import the new theme in `_document.js`

## Author

**Nicolás Zapata Alzate**

- GitHub: [@niczapata](https://github.com/niczapata)
- LinkedIn: [Nicolás Zapata Alzate](https://www.linkedin.com/in/nicolas-zapata-alzate/)

## License

ISC License

## Acknowledgments

- [Next.js](https://nextjs.org/) - React Framework
- [Bootswatch](https://bootswatch.com/) - Free themes for Bootstrap
- [nprogress](http://ricostacruz.com/nprogress/) - Progress bar library
- [Fly.io](https://fly.io/) - Application Deployment Platform
