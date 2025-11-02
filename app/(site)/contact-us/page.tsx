"use client";
import Image from "next/image";
import ScrollAnimation from "../components/ScrollAnimation";

const ContactUs: React.FC = () => {
  const handleCall = () => {
    window.open('tel:+923221380511');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/+923221380511');
  };

  const handleEmail = () => {
    window.open('mailto:syed@itsgreensolution.com');
  };

  return (
    <div className="">
      {/* Hero Section */}
      <ScrollAnimation>
        <div className="relative overflow-hidden min-h-screen flex items-center bg-center bg-cover">
          <div className="absolute inset-0">
             <Image
             width={600}
             height={400}
              className="object-cover w-full h-full"
              src="/contact-bg2.jpg"
              alt="contact-background"
              loading="eager"
            />
            <div className="absolute inset-0 bg-[#000000] opacity-80"></div>
          </div>

          <div className="relative z-10 container mx-auto px-6 lg:px-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Let&apos;s Build
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-green-400">
                  Together
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Ready to transform your business? Get in touch directly - no forms, no waiting.
              </p>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Direct Contact Section */}
      <ScrollAnimation>
        <div className="py-20 lg:py-32 bg-gradient-to-br from-[#10b981] via-white to-white overflow-hidden">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl lg:text-6xl font-bold text-black mb-6 leading-tight">
                Direct Contact
                <span className="text-[#10b981]"> Channels</span>
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Choose your preferred way to connect with us. We&apos;re always available to discuss your project requirements.
              </p>

              {/* Contact Options */}
              <div className="grid md:grid-cols-2 gap-8 mb-16">
               
                {/* WhatsApp */}
                <div 
                  onClick={handleWhatsApp}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-[#10b981] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893-.001-3.189-1.262-6.209-3.553-8.485"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">WhatsApp</h3>
                  <p className="text-gray-600 mb-4">Quick chat & file sharing</p>
                  <div className="text-[#10b981] font-semibold text-lg">+923221380511</div>
                  <p className="text-sm text-gray-500 mt-2">Tap to message on WhatsApp</p>
                </div>

                {/* Email */}
                <div 
                  onClick={handleEmail}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:border-[#10b981] hover:shadow-xl transition-all duration-300 cursor-pointer group"
                >
                  <div className="w-20 h-20 bg-[#10b981] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-black mb-4">Email</h3>
                  <p className="text-gray-600 mb-4">Send detailed project requirements</p>
                  <div className="text-[#10b981] font-semibold text-lg">syed@itsgreensolution.com</div>
                  <p className="text-sm text-gray-500 mt-2">Tap to compose email</p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gray-50 rounded-3xl p-8 max-w-2xl mx-auto">
                <h4 className="text-2xl font-bold text-black mb-4">Why Direct Contact Works Better?</h4>
                <div className="grid md:grid-cols-2 gap-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black">Instant Response</h5>
                      <p className="text-sm text-gray-600">Get immediate answers to your questions</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black">Clear Communication</h5>
                      <p className="text-sm text-gray-600">Discuss complex requirements directly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black">Quick Quotes</h5>
                      <p className="text-sm text-gray-600">Get project estimates in real-time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#10b981] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h5 className="font-semibold text-black">No Delays</h5>
                      <p className="text-sm text-gray-600">Skip form filling and waiting for responses</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>

      {/* Business Hours & Response Time */}
      <ScrollAnimation>
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 lg:px-20">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-3xl lg:text-4xl font-bold text-black mb-8">
                Quick Response <span className="text-[#10b981]">Guaranteed</span>
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Response Time
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                      WhatsApp: Within 15 minutes
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                      Phone Calls: Immediate
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                      Email: Within 2 hours
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h4 className="text-xl font-bold text-black mb-4 flex items-center gap-2">
                    <svg className="w-6 h-6 text-[#10b981]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    Business Hours
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                      Monday - Friday: 9AM - 7PM
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                      Saturday: 10AM - 5PM
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                      Sunday: Emergency support only
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default ContactUs;