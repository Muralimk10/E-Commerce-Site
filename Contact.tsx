import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-blue-600" />,
      title: 'Email',
      details: 'support@murali.com',
      link: 'mailto:support@muralihub.com'
    },
    {
      icon: <Phone className="w-6 h-6 text-blue-600" />,
      title: 'Phone',
      details: '+910123456789',
      link: 'tel:+910123456789'
    },
    {
      icon: <MapPin className="w-6 h-6 text-blue-600" />,
      title: 'Address',
      details: '123  Street,Murali City, CA 12345',
      link: null
    },
    {
      icon: <Clock className="w-6 h-6 text-blue-600" />,
      title: 'Business Hours',
      details: 'Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM',
      link: null
    }
  ];

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message and we'll
            respond as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow"
            >
              <div className="flex justify-center mb-3">{info.icon}</div>
              <h3 className="font-semibold text-gray-800 mb-2">{info.title}</h3>
              {info.link ? (
                <a
                  href={info.link}
                  className="text-gray-600 hover:text-blue-600 transition-colors"
                >
                  {info.details}
                </a>
              ) : (
                <p className="text-gray-600">{info.details}</p>
              )}
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            Send us a Message
          </h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="How can we help you?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
