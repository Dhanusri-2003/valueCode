import { Globe, Mail, Facebook, Instagram, Linkedin, MessageCircle, Youtube, DollarSign, Twitter, Building } from 'lucide-react';

/**
 * Account Setup Grid Component
 * Displays social media and platform status
 */
// export default function AccountSetupGrid({ data }) {
//   const platformItems = [
//     { icon: <Building size={18} />, label: 'Business Type', value: data.businessType || 'Not specified' }, // NEW
//     { icon: <Globe size={18} />, label: 'Website', value: data.hasWebsite ? 'Yes' : 'No' },
//     { icon: <Mail size={18} />, label: 'Gmail', value: data.hasGmail ? 'Yes' : 'No' },
//     { icon: <Facebook size={18} />, label: 'Facebook', value: data.hasFacebook ? 'Yes' : 'No' },
//     { icon: <Instagram size={18} />, label: 'Instagram', value: data.hasInstagram ? 'Yes' : 'No' },
//     { icon: <Linkedin size={18} />, label: 'LinkedIn', value: data.hasLinkedIn ? 'Yes' : 'No' },
//     { icon: <Twitter size={18} />, label: 'Twitter', value: data.hasTwitter ? 'Yes' : 'No' },
//     { icon: <MessageCircle size={18} />, label: 'WhatsApp', value: data.hasWhatsApp ? 'Yes' : 'No' },
//     { icon: <MessageCircle size={18} />, label: 'Pinterest', value: data.hasPinterest ? 'Yes' : 'No' },
//     { icon: <Youtube size={18} />, label: 'Youtube', value: data.hasYoutube ? 'Yes' : 'No' },
//     { icon: <DollarSign size={18} />, label: 'Monthly Ad Spend', value: data.monthlyAdSpend || 'Not specified' }
//   ];

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
//       {platformItems.map((item, idx) => (
//         <div key={idx} className="flex items-center justify-between p-4">
//           <div className="flex items-center gap-2 text-[var(--color-softwhite)] font-medium">
//             {item.icon} {item.label}
//           </div>
//           <span className={`font-semibold ${
//             item.value === 'Yes' ? 'text-green-400' : 
//             item.value === 'No' ? 'text-red-400' : 
//             'text-[var(--color-electric)]'
//           }`}>
//             {item.value}
//           </span>
//         </div>
//       ))}
//     </div>
//   );
// }
export default function AccountSetupGrid({ data }) {
  const businessSection = [
    { icon: <Building size={20} />, label: 'Business Type', value: data.businessType || 'Not specified' }
  ];

  const adSpendSection = [
    { icon: <DollarSign size={20} />, label: 'Monthly Ad Spend', value: data.monthlyAdSpend || 'Not specified' }
  ];

  const platformSection = [
    { icon: <Globe size={20} />, label: 'Website', value: data.hasWebsite ? 'Yes' : 'No' },
    { icon: <Mail size={20} />, label: 'Gmail', value: data.hasGmail ? 'Yes' : 'No' },
    { icon: <Facebook size={20} />, label: 'Facebook', value: data.hasFacebook ? 'Yes' : 'No' },
    { icon: <Instagram size={20} />, label: 'Instagram', value: data.hasInstagram ? 'Yes' : 'No' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: data.hasLinkedIn ? 'Yes' : 'No' },
    { icon: <Twitter size={20} />, label: 'Twitter', value: data.hasTwitter ? 'Yes' : 'No' },
    { icon: <MessageCircle size={20} />, label: 'WhatsApp', value: data.hasWhatsApp ? 'Yes' : 'No' },
    { icon: <MessageCircle size={20} />, label: 'Pinterest', value: data.hasPinterest ? 'Yes' : 'No' },
    { icon: <Youtube size={20} />, label: 'Youtube', value: data.hasYoutube ? 'Yes' : 'No' }
  ];

  // Calculate platform stats
  const connectedPlatforms = platformSection.filter(item => item.value === 'Yes').length;
  const totalPlatforms = platformSection.length;

  return (
    <div className="space-y-6 mb-10">
      {/* Stats Overview Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df] rounded-xl p-4 border border-[#8B7355]/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5D4037] text-sm">Business Type</p>
              <p className="text-[#3E2723] font-bold text-lg">{data.businessType || 'Not set'}</p>
            </div>
            <Building className="text-[#8B7355]" size={24} />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df] rounded-xl p-4 border border-[#8B7355]/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5D4037] text-sm">Connected Platforms</p>
              <p className="text-[#3E2723] font-bold text-lg">{connectedPlatforms}/{totalPlatforms}</p>
            </div>
            <Globe className="text-[#8B7355]" size={24} />
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-[#F5F0ED] to-[#f0e6df] rounded-xl p-4 border border-[#8B7355]/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[#5D4037] text-sm">Monthly Ad Spend</p>
              <p className="text-[#3E2723] font-bold text-lg">{data.monthlyAdSpend || 'Not set'}</p>
            </div>
            <DollarSign className="text-[#8B7355]" size={24} />
          </div>
        </div>
      </div>

      {/* Detailed Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Platforms Section */}
        <div className="bg-white rounded-xl p-6 border border-[#D7CCC8]">
          <h3 className="text-lg font-bold text-[#3E2723] mb-4 flex items-center gap-2">
            <Globe className="text-[#8B7355]" size={20} />
            Platform Accounts
            <span className="text-sm text-[#5D4037] ml-auto">
              {connectedPlatforms}/{totalPlatforms}
            </span>
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {platformSection.map((item, idx) => (
              <div key={idx} className={`flex items-center gap-3 p-3 rounded-lg border transition-all duration-200 ${
                item.value === 'Yes' 
                  ? 'bg-green-100 border-green-200' 
                  : 'bg-red-100 border-red-200'
              }`}>
                <div className={`p-2 rounded-lg ${
                  item.value === 'Yes' ? 'bg-green-500/20 text-green-600' : 'bg-red-500/20 text-red-600'
                }`}>
                  {item.icon}
                </div>
                <div className="flex-1">
                  <p className="text-[#3E2723] text-sm font-medium">{item.label}</p>
                  <p className={`text-xs font-bold ${
                    item.value === 'Yes' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Business & Budget Section */}
        <div className="space-y-6">
          {/* Business Info */}
          <div className="bg-white rounded-xl p-6 border border-[#D7CCC8]">
            <h3 className="text-lg font-bold text-[#3E2723] mb-4 flex items-center gap-2">
              <Building className="text-[#8B7355]" size={20} />
              Business Information
            </h3>
            {businessSection.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-[#F5F0ED] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#8B7355]/10 rounded-lg text-[#8B7355]">
                    {item.icon}
                  </div>
                  <span className="text-[#3E2723] font-medium">{item.label}</span>
                </div>
                <span className="text-[#8B7355] font-semibold">{item.value}</span>
              </div>
            ))}
          </div>

          {/* Ad Spend */}
          <div className="bg-white rounded-xl p-6 border border-[#D7CCC8]">
            <h3 className="text-lg font-bold text-[#3E2723] mb-4 flex items-center gap-2">
              <DollarSign className="text-[#8B7355]" size={20} />
              Advertising Budget
            </h3>
            {adSpendSection.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-[#F5F0ED] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#8B7355]/10 rounded-lg text-[#8B7355]">
                    {item.icon}
                  </div>
                  <span className="text-[#3E2723] font-medium">{item.label}</span>
                </div>
                <span className="text-[#8B7355] font-semibold">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}