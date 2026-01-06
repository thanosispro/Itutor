// components/Contact.jsx
import { Mail, Phone, Facebook, Linkedin, Instagram, MapPin } from "lucide-react";
import Image from "next/image";
// optional: your floating WhatsApp form

export default function Contact() {
  const socialLinks = [
    { Icon: Facebook, label: "Facebook", href: "https://www.facebook.com/profile.php?id=61585764614541" },
    { Icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/company/110929226/admin/dashboard/" },
    { Icon: Instagram, label: "Instagram", href: "https://www.instagram.com/innovativelearn?igsh=Y3FsOHplMWxha2Vj" },
  ];

  const benefits = [
    { title: "Empower Your Future", desc: "Gain skills that open doors to endless opportunities." },
    { title: "Knowledge Beyond Boundaries", desc: "Access world-class education from anywhere." },
    { title: "Innovate, Learn, Grow", desc: "Transform ideas into reality through continuous learning." },
    { title: "Personalized Learning Paths", desc: "Tailored courses designed for your unique goals." },
  ];

  return (
    <div className="min-h-screen pt-48 pb-16 bg-gradient-to-b from-gray-50 via-white to-blue-50 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-20">
          <div className="inline-block p-2 bg-gradient-to-br from-indigo-500 via-blue-500 to-purple-600 rounded-full shadow-2xl mb-8">
            <div className="p-4 bg-white rounded-full shadow-inner">
              <Image
                src="/logo.png"
                alt="Innovative Learn Logo"
                width={220}
                height={220}
                className="rounded-full object-contain drop-shadow-md"
                priority
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-indigo-700 font-medium">
            Learning Without Limits
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Left: Contact Info */}
          <div className="space-y-8 lg:space-y-12">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                Get in Touch
              </h2>

              {/* Email */}
              <a
                href="mailto:innovativelearn.uk@gmail.com"
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 py-6 border-b border-gray-200 last:border-0 hover:bg-indigo-50/50 rounded-xl px-4 -mx-4 transition-colors"
              >
                <div className="p-4 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Email</p>
                  <p className="text-lg sm:text-xl font-medium text-gray-900 mt-1 break-all">
                    innovativelearn.uk@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+9779803178238"
                className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 py-6 border-b border-gray-200 last:border-0 hover:bg-green-50/50 rounded-xl px-4 -mx-4 transition-colors"
              >
                <div className="p-4 bg-gradient-to-br from-green-600 to-emerald-700 rounded-2xl flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Phone</p>
                  <p className="text-lg sm:text-xl font-medium text-gray-900 mt-1">
                   +977-9705459146
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 py-6 hover:bg-indigo-50/50 rounded-xl px-4 -mx-4 transition-colors">
                <div className="p-4 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex-shrink-0">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div>
                  <p className="text-sm text-gray-600 uppercase tracking-wider">Address</p>
                  <p className="text-lg sm:text-xl font-medium text-gray-900 mt-1">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-3xl shadow-lg p-8 sm:p-10 border border-gray-100">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-8">
                Follow Us
              </h2>
              <div className="flex justify-center gap-6 sm:gap-8">
                {socialLinks.map(({ Icon, label, href }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 sm:p-5 bg-gray-100 rounded-2xl hover:bg-gray-200 transition-colors"
                    aria-label={`Follow us on ${label}`}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-gray-800" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Benefits + Form */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900">
              Why Learn With Us?
            </h2>

            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-2xl p-6 sm:p-8 border border-indigo-100"
              >
                <h3 className="text-xl sm:text-2xl font-bold text-indigo-900 mb-3">{item.title}</h3>
                <p className="text-base sm:text-lg text-gray-700">{item.desc}</p>
              </div>
            ))}

            {/* Optional Form */}
            
          </div>
        </div>

        {/* Footer CTA */}
        <div className="text-center mt-16 lg:mt-20 px-4">
          <p className="text-lg sm:text-xl text-gray-700">
            Ready to take the next step in your learning journey?
          </p>
          <p className="text-base sm:text-lg text-gray-600 mt-4">
            We are here to help you every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
}
