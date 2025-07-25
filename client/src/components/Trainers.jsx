export default function Trainers() {
  const trainers = [
    {
      name: 'Alex Johnson',
      role: 'Senior Software Engineer',
      company: 'Google | 8+ years experience',
      avatar: 'AJ',
      skills: ['React', 'Node.js'],
      roleColor: 'text-blue-600',
      borderColor: 'border-blue-200',
      bgColor: 'bg-blue-100'
    },
    {
      name: 'Sarah Chen',
      role: 'UX Design Lead',
      company: 'Apple | 6+ years experience',
      avatar: 'SC',
      skills: ['Figma', 'Research'],
      roleColor: 'text-green-600',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Product Manager',
      company: 'Meta | 7+ years experience',
      avatar: 'MR',
      skills: ['Strategy', 'Analytics'],
      roleColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      bgColor: 'bg-yellow-100'
    },
    {
      name: 'Emma Thompson',
      role: 'Marketing Director',
      company: 'HubSpot | 9+ years experience',
      avatar: 'ET',
      skills: ['Digital', 'Growth'],
      roleColor: 'text-pink-600',
      borderColor: 'border-pink-200',
      bgColor: 'bg-pink-100'
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      company: 'Netflix | 5+ years experience',
      avatar: 'DK',
      skills: ['Python', 'ML'],
      roleColor: 'text-green-600',
      borderColor: 'border-green-200',
      bgColor: 'bg-green-100'
    },
    {
      name: 'Lisa Wang',
      role: 'Security Engineer',
      company: 'Microsoft | 6+ years experience',
      avatar: 'LW',
      skills: ['Security', 'Cloud'],
      roleColor: 'text-red-600',
      borderColor: 'border-red-200',
      bgColor: 'bg-red-100'
    },
    {
      name: 'Ryan Miller',
      role: 'Sales Director',
      company: 'Salesforce | 8+ years experience',
      avatar: 'RM',
      skills: ['B2B', 'Strategy'],
      roleColor: 'text-indigo-600',
      borderColor: 'border-indigo-200',
      bgColor: 'bg-indigo-100'
    },
    {
      name: 'Maya Patel',
      role: 'Financial Analyst',
      company: 'Goldman Sachs | 7+ years experience',
      avatar: 'MP',
      skills: ['Finance', 'Excel'],
      roleColor: 'text-yellow-600',
      borderColor: 'border-yellow-200',
      bgColor: 'bg-yellow-100'
    }
  ];

  return (
    <section id="trainers" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-in">
            Meet Your Mentors
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
            Learn from industry experts who are passionate about your growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div key={index} className="trainer-card bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
              <div className={`w-24 h-24 rounded-full mx-auto mb-4 border-4 ${trainer.borderColor} ${trainer.bgColor} flex items-center justify-center`}>
                <span className={`text-2xl font-bold ${trainer.roleColor}`}>
                  {trainer.avatar}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{trainer.name}</h3>
              <p className={`${trainer.roleColor} font-medium mb-2`}>{trainer.role}</p>
              <p className="text-sm text-gray-600 mb-4">{trainer.company}</p>
              <div className="flex justify-center gap-2 flex-wrap">
                {trainer.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
