import quadri from "../assets/images/quadri.jpg";

const AboutUs = () => {
  const services = [
    {
      title: "Instant Customization",
      description:
        "Modify packaging designs in real time with our easy-to-use editor.",
      icon: "🔹",
    },
    {
      title: "Dynamic Messaging",
      description:
        "Add unique customer interactions, seasonal themes, or hidden Easter eggs.",
      icon: "🔹",
    },
    {
      title: "Smart Design and Presentation",
      description:
        "Enhance packaging with QR codes, augmented reality, and interactive elements.",
      icon: "🔹",
    },
    {
      title: "Lightning-Fast Delivery",
      description:
        "Get premium-quality custom packaging, printed and shipped with speed.",
      icon: "🔹",
    },
    {
      title: "Scalable & Flexible",
      description:
        "Whether you need a single prototype or bulk orders, we've got you covered.",
      icon: "🔹",
    },
  ];

  const targetAudience = [
    {
      title: "Entrepreneurs & Small Businesses",
      description:
        "Quickly refresh packaging to match trends and engage customers.",
      icon: "✅",
    },
    {
      title: "Event & Party Planners",
      description:
        "Custom designs for weddings, birthdays, and corporate events—on demand.",
      icon: "✅",
    },
    {
      title: "Brand Managers & Marketers",
      description:
        "Create limited-edition packaging for promotions and campaigns.",
      icon: "✅",
    },
    {
      title: "Food Vendors",
      description:
        "Create limited-edition packaging for promotions and campaigns.",
      icon: "✅",
    },
    {
      title: "Friends & Creatives",
      description:
        "Bond over custom gifts, inside jokes, and one-of-a-kind birthday surprises.",
      icon: "✅",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="relative bg-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto text-blue-100">
            Pack it, Pack more 📦
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-16">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                <img
                  src={quadri}
                  alt="Team Member 1"
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Alarape Quadri. A
            </h3>
            <p className="text-lg text-blue-600 mb-4">Frontend Developer</p>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              As a technology enthusiast and problem solver, I focus on
              developing innovative solutions that help our clients succeed. My
              expertise in cutting-edge technologies ensures we stay ahead of
              the curve.
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="w-48 h-48 md:w-64 md:h-64 relative">
                <div className="absolute inset-0 bg-blue-100 rounded-full"></div>
                <img
                  src=""
                  alt="Team Member 2"
                  className="absolute inset-0 w-full h-full object-cover rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Ire Uthman
            </h3>
            <p className="text-lg text-blue-600 mb-4">Co-Founder</p>
            <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
              With over a decade of experience in the industry, I'm passionate
              about innovation and creating solutions that make a difference. I
              believe in building strong relationships with our clients and
              delivering exceptional results.
            </p>
          </div>
        </div>

        <div className="mt-24 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Pac-8 is the next-gen packaging customization platform built for
            entrepreneurs, brands, and event planners who need fast, reliable,
            and high-quality personalized packaging. Whether you're running a
            business, hosting an event, or launching a limited-edition product,
            our platform lets you create stunning, custom designs in minutes—no
            design skills required.
          </p>
        </div>

        <div className="mt-24 grid md:grid-cols-3 gap-8 mb-24">
          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We constantly push boundaries and explore to deliver the best for
              our clients.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Excellence</h3>
            <p className="text-gray-600">
              We maintain the highest standards in everything we do, from
              product quality to client communication.
            </p>
          </div>
          <div className="p-8 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Integrity</h3>
            <p className="text-gray-600">
              We build trust through transparency, honesty, and delivering on
              our promises.
            </p>
          </div>
        </div>
        <div className="mb-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Perfect For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetAudience.map((audience, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-2xl mb-4">{audience.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {audience.title}
                </h3>
                <p className="text-gray-600">{audience.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
