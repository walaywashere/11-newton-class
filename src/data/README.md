# Class 11-Newton Configuration System

Welcome to the Class 11-Newton website configuration system! This documentation explains how to customize and manage all aspects of the website through organized JSON configuration files.

## 📁 Configuration Files Overview

### Core Configuration Files

| File | Purpose | Key Features |
|------|---------|--------------|
| `app.config.json` | Main application settings | Branding, navigation, features, performance |
| `homepage.config.json` | Homepage content and layout | Hero section, stats, explore cards |
| `students.config.json` | Student page configuration | Display settings, skills, modal content |
| `leadership.config.json` | Leadership page settings | Adviser display, officer layout |
| `achievements.config.json` | Achievements page content | Achievement data, categories, display |
| `footer.config.json` | Footer content and links | Branding, stats, quick links, social |

## 🎯 Key Features

### 📊 Dynamic Statistics System
All statistics automatically update based on your actual data:

```json
{
  "value": "dynamic",
  "calculation": "totalStudents"
}
```

**Available Calculations:**
- `totalStudents` - Total number of students
- `totalOfficers` - Number of class officers  
- `totalAchievements` - Number of achievements
- `totalRecognitions` - Calculated recognition count
- `totalChampionships` - Sports/championship achievements
- `totalProjects` - Estimated project count

### 🎨 Individual Skills & Interests System
Each student has their own personalized skills displayed in their modal:

**Student Data (classData.jsx):**
```javascript
{
  name: 'Andrea Garcia',
  position: 'President',
  dreamJob: 'Corporate Lawyer',
  skills: ['Leadership', 'Public Speaking', 'Critical Thinking', 'Debate & Argumentation', 'Academic Excellence']
}
```

**Available Skills Library:**
```json
{
  "name": "Leadership",
  "category": "leadership", 
  "color": "purple"
}
```

**Available Categories:**
- `academic` - Academic-related skills (Mathematics, Science & Lab Work, Research)
- `leadership` - Leadership abilities (Leadership, Entrepreneurship)
- `social` - Social and teamwork skills (Teamwork, Community Service)
- `analytical` - Problem-solving skills (Problem Solving, Critical Thinking)
- `creative` - Creative abilities (Creativity, Music & Arts, Photography)
- `communication` - Speaking/presentation (Communication, Public Speaking, Foreign Languages)
- `technical` - Technology skills (Technology, Digital Media)
- `organizational` - Planning skills (Time Management, Event Planning)
- `physical` - Athletic abilities (Sports & Athletics)

**Available Colors:**
`green`, `purple`, `blue`, `indigo`, `emerald`, `pink`, `amber`, `violet`, `orange`, `cyan`, `teal`, `slate`, `red`

**Available Skills (24 Total):**
Academic Excellence, Leadership, Teamwork, Communication, Problem Solving, Creativity, Critical Thinking, Innovation, Public Speaking, Technology, Research, Time Management, Sports & Athletics, Music & Arts, Mathematics, Science & Lab Work, Writing & Literature, Photography, Entrepreneurship, Community Service, Event Planning, Digital Media, Foreign Languages, Debate & Argumentation

## 🔧 Configuration Guide

### App Settings (`app.config.json`)

```json
{
  "metadata": {
    "name": "Class 11-Newton",
    "tagline": "Excellence in Motion",
    "academicYear": "2025-2026"
  },
  "navigation": {
    "type": "island",
    "links": [...]
  },
  "features": {
    "animations": true,
    "customScrollbar": true,
    "performanceOptimized": true
  }
}
```

### Homepage Content (`homepage.config.json`)

```json
{
  "hero": {
    "title": {
      "primary": "Welcome to",
      "highlighted": "Class 11-Newton"
    },
    "stats": [
      {
        "icon": "Users",
        "label": "Brilliant Minds", 
        "value": "dynamic",
        "calculation": "totalStudents"
      }
    ]
  }
}
```

### Student Page (`students.config.json`)

```json
{
  "display": {
    "defaultView": "grid",
    "defaultSort": "name",
    "itemsPerPage": 12
  },
  "modal": {
    "skillsInterests": {
      "skills": [
        {
          "name": "Your Skill",
          "category": "academic",
          "color": "blue"
        }
      ],
             "display": {
         "maxSkills": 6,
         "randomize": true,
         "tagStyling": {
           "baseClasses": "px-3 py-1.5 rounded-lg text-sm font-medium shadow-sm",
           "colorClasses": "border-{color}-200 bg-{color}-50 text-{color}-700"
         }
       }
    }
  }
}
```

### Leadership Page (`leadership.config.json`)

```json
{
  "adviser": {
    "display": {
      "imageSize": "224px",
      "showQuote": true,
      "showContact": true
    }
  },
  "officers": {
    "display": {
      "showResponsibilities": true,
      "showPersonalInfo": true
    }
  }
}
```

### Achievements (`achievements.config.json`)

```json
{
  "achievements": [
    {
      "title": "Your Achievement",
      "category": "Academic",
      "date": "2024-06-15",
      "description": "Achievement description",
      "level": "National",
      "participants": ["Student Names"],
      "tags": ["Tag1", "Tag2"]
    }
  ]
}
```

## 🎨 Customization Examples

### Adding Skills to a Student

1. Open `src/data/classData.jsx`
2. Find the student in the `students` array
3. Add or modify their skills array:

```javascript
{
  name: 'Student Name',
  // ... other properties
  skills: ['Academic Excellence', 'Leadership', 'Technology', 'Communication', 'Problem Solving']
}
```

### Adding a New Skill to the Library

1. Open `src/data/classData.jsx`
2. Find the `availableSkills` array
3. Add your skill:

```javascript
{ name: 'Data Analysis', category: 'analytical', color: 'cyan' }
```

### Adding an Achievement

1. Open `achievements.config.json`
2. Add to the `achievements` array:

```json
{
  "id": 6,
  "title": "New Achievement",
  "category": "Academic",
  "date": "2024-07-01",
  "description": "Description of the achievement",
  "level": "Regional",
  "participants": ["Student Names"],
  "tags": ["Relevant", "Tags"]
}
```

### Changing Academic Year

Update in these files:
- `app.config.json` → `metadata.academicYear`
- `homepage.config.json` → `hero.badge.text`
- `footer.config.json` → `branding.academicYear`

### Customizing Colors and Branding

Edit `app.config.json`:

```json
{
  "branding": {
    "colors": {
      "primary": {
        "blue": "#3B82F6",
        "purple": "#8B5CF6"
      }
    }
  }
}
```

## 💡 Tips for Customization

### ✅ Best Practices
- Always backup before making changes
- Test changes in development first
- Keep consistent naming conventions
- Use descriptive labels and descriptions

### 🎯 Dynamic Statistics
- Add/remove students in `classData.jsx` - stats auto-update
- Add achievements in config - recognition counts increase
- All stats reflect real data automatically

### 🎨 Visual Customization
- Modify colors in the main app config
- Adjust layout settings per page
- Configure display options for each component

### 📱 Responsive Design
- All configurations include mobile considerations
- Layout adapts automatically to screen sizes
- Touch-friendly interface on mobile devices

## 🔄 Data Flow

1. **Student Data** (`classData.jsx`) → Dynamic stats calculation
2. **Configuration Files** → Component display settings
3. **Dynamic Stats Utility** → Real-time calculations
4. **Skills Manager** → Randomized skill selection
5. **Components** → Rendered with configuration data

## 🚀 Quick Start

1. **Modify Student Info**: Edit `src/data/classData.jsx`
2. **Add Student Skills**: Update individual student skills in `classData.jsx`
3. **Add New Skills to Library**: Update `availableSkills` in `classData.jsx`
4. **Add Achievements**: Update `achievements.config.json`
5. **Change Academic Year**: Update all config files
6. **Customize Appearance**: Modify `app.config.json`

## 📞 Support

The configuration system is designed to be:
- **User-friendly**: No coding knowledge required
- **Flexible**: Extensive customization options
- **Consistent**: Unified approach across all pages
- **Dynamic**: Automatic updates based on real data

All changes take effect immediately after saving the configuration files!

---

*Made with ❤️ by Class 11-Newton Development Team*