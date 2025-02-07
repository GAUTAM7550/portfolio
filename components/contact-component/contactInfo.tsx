import { ReactElement } from "react";

interface ContactInfoProps {
  title: string;
  emails: string[];
  icon: ReactElement;
}

const ContactInfo = ({ title, emails, icon }: ContactInfoProps) => {
  return (
    <div data-aos="zoom-in" className="rounded-xl p-6 w-full bg-gradient-to-r from-[#202020] via-[#1c1c1cc9] to-[#171717ef]">
      <div className="flex items-start gap-4">
        {/* Text Content */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-3 text-gray-200">{title}</h3>
          <div className="space-y-2">
            {emails.map((email, index) => (
              <a
                key={index}
                href={`mailto:${email}`}
                className="block text-gray-400 hover:text-white transition-colors"
              >
                {email}
              </a>
            ))}
          </div>
        </div>

        {/* Icon Container */}
        <div className="bg-[#232323] p-3 rounded-lg shadow-[0_4px_0_0_#1a1a1a]">
          {icon}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;