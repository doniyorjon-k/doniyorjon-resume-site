import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-2">Doniyorjon Kuchkarov</h1>
            <p className="text-xl mb-4">Software Engineer</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Tashkent, Uzbekistan
              </span>
              <span className="flex items-center">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                doniyorjon.k@gmail.com
              </span>
              <a href="https://doniyorjon.uz" className="flex items-center hover:underline">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                doniyorjon.uz
              </a>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-8">
          {/* About Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">About</h2>
            <p className="text-gray-600 leading-relaxed">
              IUT Class of 22' 🇺🇿🇰🇷💻 - Software Engineer 👨🏻‍💻 - Lifelong learner - Muslim ☪️
              <br />
              Passionate software engineer with a strong foundation in computer science and a commitment to continuous learning. 
              Dedicated to building innovative solutions and contributing to the tech community. #alhamdulillah
            </p>
          </section>

          {/* Experience Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Experience</h2>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Software Engineer</h3>
                <span className="text-sm text-gray-500">Present</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">Inha University in Tashkent</p>
              <p className="text-gray-600">
                Developing and maintaining software solutions, contributing to academic and research projects,
                and applying cutting-edge technologies to solve real-world problems.
              </p>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Education</h2>
            <div className="mb-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-800">Computer Science</h3>
                <span className="text-sm text-gray-500">Class of 2022</span>
              </div>
              <p className="text-blue-600 font-medium mb-2">Inha University in Tashkent (IUT)</p>
              <p className="text-gray-600">
                Bachelor's degree in Computer Science with focus on software engineering,
                algorithms, and modern development practices.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'React', 'Node.js', 'Python', 'Java', 'Git', 'SQL', 'MongoDB'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {['Uzbek (Native)', 'English (Fluent)', 'Korean (Intermediate)', 'Russian (Intermediate)'].map((lang) => (
                    <span key={lang} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a 
                href="https://github.com/doniyorjon-k" 
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-3 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
                <div>
                  <p className="font-medium text-gray-800">GitHub</p>
                  <p className="text-sm text-gray-600">@doniyorjon-k</p>
                </div>
              </a>
              <a 
                href="https://doniyorjon.uz" 
                className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 mr-3 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.559-.499-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.559.499.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.497-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="font-medium text-gray-800">Website</p>
                  <p className="text-sm text-gray-600">doniyorjon.uz</p>
                </div>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default App
