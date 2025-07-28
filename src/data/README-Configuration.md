# Dynamic Configuration System

This document explains how to customize various aspects of the Class 11-Newton website through JSON configuration files.

## Skills & Interests Configuration

### Location
`src/data/studentsConfig.json` → `modal.skillsInterests`

### Customization Options

#### Adding/Removing Skills
Edit the `skills` array to add or remove skills:

```json
{
  "name": "Your New Skill",
  "category": "technical",
  "color": "blue"
}
```

#### Available Categories
- `academic` - Academic-related skills
- `leadership` - Leadership and management skills  
- `social` - Social and teamwork skills
- `analytical` - Problem-solving and thinking skills
- `creative` - Creative and artistic skills
- `communication` - Speaking and presentation skills
- `technical` - Technology and technical skills
- `organizational` - Planning and organization skills

#### Available Colors
- `green`, `purple`, `blue`, `indigo`, `emerald`, `pink`
- `amber`, `violet`, `orange`, `cyan`, `teal`, `slate`

#### Display Settings
```json
"displaySettings": {
  "maxSkillsToShow": 6,        // How many skills to display
  "randomizeSelection": true,   // Randomize which skills show
  "showByCategory": false      // Group by category (future feature)
}
```

#### Styling Customization
```json
"tagStyling": {
  "baseClasses": "px-3 py-1.5 rounded-lg text-sm font-medium border shadow-sm",
  "backgroundClasses": "bg-white",
  "textClasses": "text-gray-700", 
  "borderClasses": "border-green-200"
}
```

### Section Appearance
```json
"title": "Interests & Skills",
"icon": "Star",
"backgroundColor": "bg-green-50",
"borderColor": "border-green-100",
"iconColor": "text-green-600",
"iconBackground": "bg-green-100"
```

## Dynamic Statistics

### How It Works
The system automatically calculates statistics from your actual data:

- **Total Students**: Counts entries in `classData.jsx` → `students` array
- **Total Officers**: Counts entries in `classData.jsx` → `classOfficers` array
- **Total Achievements**: Counts achievements in `achievementsConfig.json`
- **Projects**: Estimated from achievements and student count

### Academic Year
Update in all config files:
- `siteConfig.json` → `site.academicYear`
- `homepageConfig.json` → `heroSection.topBadge.text`
- `footerConfig.json` → `branding.academicYear`

### Making Values Dynamic
In any config file, replace static values with:
```json
{
  "value": "dynamic",
  "calculation": "totalStudents"
}
```

Available calculations:
- `totalStudents`
- `totalOfficers` 
- `totalAchievements`
- `totalRecognitions`
- `totalChampionships`
- `totalProjects`

## File Locations

- **Site-wide settings**: `src/data/siteConfig.json`
- **Homepage content**: `src/data/homepageConfig.json`
- **Student page settings**: `src/data/studentsConfig.json`
- **Leadership page settings**: `src/data/leadershipConfig.json`
- **Achievements settings**: `src/data/achievementsConfig.json`
- **Footer content**: `src/data/footerConfig.json`

## Benefits

✅ **No Code Changes Needed** - Modify JSON files only
✅ **Automatic Updates** - Stats reflect real data changes
✅ **Consistent Styling** - Centralized appearance settings
✅ **Easy Maintenance** - Single source of truth
✅ **Flexible Display** - Randomized and categorized options

## Example: Adding a New Skill

1. Open `src/data/studentsConfig.json`
2. Find `modal.skillsInterests.skills`
3. Add your skill:
```json
{
  "name": "Data Analysis",
  "category": "analytical", 
  "color": "cyan"
}
```
4. Save the file - changes appear immediately!

The system will automatically include your new skill in the randomized selection for student modals.