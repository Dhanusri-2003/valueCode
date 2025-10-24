import { Globe, Mail, Facebook, Instagram, Linkedin, MessageCircle, Youtube, DollarSign } from 'lucide-react';

/**
 * Account Setup Grid Component
 * Displays social media and platform status
 */
export default function AccountSetupGrid({ data }) {
  const platformItems = [
    { icon: <Globe size={18} />, label: 'Website', value: data.hasWebsite ? 'Yes' : 'No' },
    { icon: <Mail size={18} />, label: 'Gmail', value: data.hasGmail ? 'Yes' : 'No' },
    { icon: <Facebook size={18} />, label: 'Facebook', value: data.hasFacebook ? 'Yes' : 'No' },
    { icon: <Instagram size={18} />, label: 'Instagram', value: data.hasInstagram ? 'Yes' : 'No' },
    { icon: <Linkedin size={18} />, label: 'LinkedIn', value: data.hasLinkedIn ? 'Yes' : 'No' },
    { icon: <MessageCircle size={18} />, label: 'Pinterest', value: data.hasPinterest ? 'Yes' : 'No' },
    { icon: <Youtube size={18} />, label: 'Youtube', value: data.hasYoutube ? 'Yes' : 'No' },
    { icon: <DollarSign size={18} />, label: 'Monthly Ad Spend', value: data.monthlyAdSpend || 'Not specified' }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
      {platformItems.map((item, idx) => (
        <div key={idx} className="flex items-center justify-between p-4">
          <div className="flex items-center gap-2 text-[var(--color-softwhite)] font-medium">
            {item.icon} {item.label}
          </div>
          <span className={`font-semibold ${
            item.value === 'Yes' ? 'text-green-400' : 
            item.value === 'No' ? 'text-red-400' : 
            'text-[var(--color-electric)]'
          }`}>
            {item.value}
          </span>
        </div>
      ))}
    </div>
  );
}