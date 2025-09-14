# UAP CSE Alumni Connect 

A modern React-based alumni networking platform for UAP CSE graduates, featuring an AI-powered chatbot and comprehensive community features.

## Features

### 🤖 AI Chatbot
- Intelligent assistant integrated into the homepage
- Context-aware responses about alumni directory, jobs, events, and more
- Modern chat interface with typing indicators
- Responsive design that works on all devices

### 🏠 Homepage
- Hero section with call-to-action buttons
- Feature grid showcasing all platform capabilities
- Statistics section showing community growth
- Recent activity feed
- Newsletter subscription

### 👥 Alumni Directory
- Search and filter alumni by name, skills, company, or batch
- Detailed alumni profiles with contact information
- Direct links to LinkedIn and GitHub profiles
- Skills-based filtering and search

### 💼 Job Opportunities
- Browse job postings from alumni and partner companies
- Advanced filtering by location, job type, and keywords
- Application tracking and job posting capabilities
- Salary information and remote work indicators

### 📅 Events
- Upcoming workshops, seminars, and networking events
- Event registration and capacity tracking
- Filter by event type (workshop, networking, seminar)
- Event creation and management

### 💬 Community Forum
- Discussion threads organized by categories
- Career advice, technology discussions, and general topics
- User engagement metrics (replies, views)
- Community-driven content

### 🤝 Mentorship Program
- Find mentors based on expertise and availability
- Become a mentor and help current students
- Rating system and mentorship tracking
- Skill-based mentor matching

### 📚 Resource Library
- Academic resources and study materials
- Industry reports and insights
- Career development tools
- File sharing and download tracking

### 🔐 User Authentication
- Login and registration system
- Profile management
- Secure authentication flow

## Technology Stack

- **Frontend**: React 19 with Vite
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Icons**: Font Awesome
- **Build Tool**: Vite
- **Development**: Hot Module Replacement (HMR)

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/mahiamOmO/UAP-Alumni-Connect.git
cd UAP-Alumni-Connect
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Navbar.jsx      # Navigation component
│   ├── Footer.jsx      # Footer component
│   └── Chatbot.jsx     # AI chatbot component
├── pages/              # Page components
│   ├── Home.jsx        # Homepage with chatbot
│   ├── AlumniDirectory.jsx
│   ├── JobOpportunities.jsx
│   ├── Events.jsx
│   ├── Community.jsx
│   ├── Mentorship.jsx
│   ├── Resources.jsx
│   └── Login.jsx
├── assets/             # Static assets
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## AI Chatbot Features

The integrated AI chatbot provides:

- **Contextual Responses**: Understands questions about alumni directory, jobs, events, mentorship, and resources
- **Smart Suggestions**: Provides relevant information based on user queries
- **Interactive Interface**: Modern chat UI with typing indicators and smooth animations
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Real-time Communication**: Instant responses with simulated AI processing

### Chatbot Capabilities

The chatbot can help users with:
- Finding alumni by batch, company, or skills
- Information about job opportunities and career advice
- Event details and registration
- Mentorship program guidance
- Resource library navigation
- General platform assistance

## Customization

### Styling
The application uses Tailwind CSS for styling. You can customize the design by:
- Modifying the color scheme in `src/index.css`
- Updating component styles in individual files
- Adding new Tailwind classes as needed

### Adding New Features
1. Create new components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `src/App.jsx`
4. Add navigation links in `src/components/Navbar.jsx`

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## Contact

For questions or support, please contact the development team or create an issue in the repository.

---

**UAP CSE Alumni Connect** - Building stronger connections, one graduate at a time.
