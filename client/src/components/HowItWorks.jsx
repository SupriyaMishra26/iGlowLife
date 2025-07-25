export default function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: 'Choose Your Path',
      description: 'Select from Tech, Marketing, Design, or Business tracks based on your interests',
      bgColor: 'bg-blue-600'
    },
    {
      number: '2',
      title: 'Get Matched',
      description: 'We pair you with an expert mentor and real project that fits your goals',
      bgColor: 'bg-green-600'
    },
    {
      number: '3',
      title: 'Build & Learn',
      description: 'Work on real projects with hands-on guidance from industry professionals',
      bgColor: 'bg-yellow-500'
    },
    {
      number: '4',
      title: 'Launch Career',
      description: 'Graduate with a portfolio, certificate, and job placement assistance',
      bgColor: 'bg-purple-600'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-in">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto fade-in">
            Your journey from learning to landing your dream career in 4 simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center fade-in">
              <div className="relative mb-6">
                <div className={`w-20 h-20 ${step.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 -z-10"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
