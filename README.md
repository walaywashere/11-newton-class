# Class 11-Newton Showcase

A beautiful, interactive showcase website for Class 11-Newton, featuring student profiles, leadership information, and class achievements. Built with modern web technologies for an engaging user experience.

## ✨ Features

- **Interactive Student Showcase** - Browse through class members with detailed profiles
- **Leadership Section** - Meet the class adviser and student officers
- **Achievements Timeline** - Visual timeline of class milestones and accomplishments
- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Animations** - Powered by Framer Motion for delightful interactions
- **Modern UI** - Clean, professional design with Tailwind CSS

## 🚀 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for smooth interactions
- **Lucide React** - Beautiful, customizable icons

## 🛠️ Development

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd class-11-newton
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

### Code Quality

- **Linting**: `npm run lint`
- **ESLint Configuration**: Modern flat config with React support
- **Code Standards**: Consistent formatting and best practices

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── ErrorBoundary.jsx    # Error boundary wrapper
│   ├── Footer.jsx           # Footer component
│   ├── LoadingSpinner.jsx   # Loading spinner component
│   ├── PerfectDropdown.jsx  # Custom dropdown component
│   ├── achievements.jsx     # Achievements showcase
│   ├── homepage.jsx         # Landing page hero section
│   ├── leadership.jsx       # Leadership cards component
│   ├── navbar.jsx           # Navigation component
│   ├── preloader.jsx        # Loading animation
│   └── studentshowcase.jsx  # Student profiles display
├── pages/               # Page components
│   ├── AchievementsPage.jsx        # Achievements listing page
│   ├── HomePage.jsx                # Main landing page
│   ├── LeadershipPage.jsx          # Leadership showcase page
│   ├── PerfectAchievementsPage.jsx # Enhanced achievements page
│   ├── PerfectLeadershipPage.jsx   # Enhanced leadership page
│   ├── PerfectStudentsPage.jsx     # Enhanced students page
│   └── StudentsPage.jsx            # Students listing page
├── data/                # Data and configuration
│   ├── achievementsConfig.json     # Achievements configuration
│   ├── classData.jsx              # Student and class data
│   ├── footerConfig.json          # Footer configuration
│   ├── homepageConfig.json        # Homepage configuration
│   ├── leadershipConfig.json      # Leadership configuration
│   ├── siteConfig.json            # Site-wide configuration
│   ├── studentsConfig.json        # Students configuration
│   └── DYNAMIC_CONTENT_GUIDE.md   # Configuration guide
├── utils/               # Utility functions
│   ├── iconMapper.js              # Icon mapping utility
│   └── scrollToTop.js             # Scroll utility functions
├── assets/              # Static assets
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and animations
```

## 🎨 Customization

The project uses a comprehensive configuration system for easy customization:

### Configuration Files
- **`src/data/siteConfig.json`** - General site settings and metadata
- **`src/data/homepageConfig.json`** - Homepage content and hero section
- **`src/data/studentsConfig.json`** - Student showcase settings
- **`src/data/leadershipConfig.json`** - Leadership section configuration
- **`src/data/achievementsConfig.json`** - Achievements display settings
- **`src/data/footerConfig.json`** - Footer content and links

### Adding New Students
Edit `src/data/classData.jsx` and add student objects to the `students` array:

```javascript
{
  name: 'Student Name',
  photo: 'photo-url',
  role: 'Position (optional)',
  dreamJob: 'Future career goal',
  funFact: 'Interesting fact',
  socials: { instagram: 'username' },
  quote: "Personal quote"
}
```

### Adding Achievements
Add achievement objects to the `achievementsData` array in `src/pages/PerfectAchievementsPage.jsx`:

```javascript
{
  id: uniqueId,
  title: 'Achievement Title',
  category: 'academic|leadership|service|innovation|sports',
  description: 'Detailed description',
  date: 'YYYY-MM-DD',
  location: 'Event location',
  participants: ['Student names'],
  icon: IconComponent,
  color: 'theme-color',
  gradient: 'tailwind-gradient-class'
}
```

### Dynamic Content Guide
Refer to `src/data/DYNAMIC_CONTENT_GUIDE.md` for detailed instructions on customizing content through configuration files.

## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🚀 Deployment

The project can be deployed to any static hosting service:

- **Vercel**: Connect your repository for automatic deployments
- **Netlify**: Drag and drop the `dist` folder after building
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📄 License

This project is created for educational purposes. All rights reserved to Class 11-Newton.

---

Made with ❤️ by Class 11-Newton
