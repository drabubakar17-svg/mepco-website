export type CityData = {
  name: string;
  slug: string;
  title: string;
  description: string;
  keywords: string[];
  areas: string[];
  related: string[];
};

export const cities: CityData[] = [
  {
    name: "Multan",
    slug: "multan-bill-check",
    title: "MEPCO Multan Bill Check Online",
    description: "Check your MEPCO Multan electricity bill online.",
    keywords: ["MEPCO Multan bill", "Multan bill check", "mepco online bill check multan", "wapda bill multan"],
    areas: ["Multan City", "Multan Cantt", "Shujabad", "Jalalpur Pirwala", "Shah Rukun-e-Alam", "Mumtazabad"],
    related: ["khanewal-bill-check", "lodhran-bill-check"],
  },
  {
    name: "Khanewal",
    slug: "khanewal-bill-check",
    title: "MEPCO Khanewal Bill Check Online",
    description: "Check your MEPCO Khanewal electricity bill online.",
    keywords: ["MEPCO Khanewal bill", "Khanewal bill check", "mepco online bill khanewal", "wapda bill khanewal"],
    areas: ["Khanewal", "Kabirwala", "Mian Channu", "Jahanian"],
    related: ["multan-bill-check", "vehari-bill-check"],
  },
  {
    name: "Bahawalpur",
    slug: "bahawalpur-bill-check",
    title: "MEPCO Bahawalpur Bill Check Online",
    description: "Check your MEPCO Bahawalpur electricity bill online.",
    keywords: ["MEPCO Bahawalpur bill", "Bahawalpur bill check", "mepco online bill bahawalpur", "wapda bill bahawalpur"],
    areas: ["Bahawalpur City", "Ahmadpur East", "Hasilpur", "Khairpur Tamewali", "Yazman"],
    related: ["bahawalnagar-bill-check", "rahim-yar-khan-bill-check"],
  },
  {
    name: "Vehari",
    slug: "vehari-bill-check",
    title: "MEPCO Vehari Bill Check Online",
    description: "Check your MEPCO Vehari electricity bill online.",
    keywords: ["MEPCO Vehari bill", "Vehari bill check", "mepco online bill vehari", "wapda bill vehari"],
    areas: ["Vehari", "Burewala", "Mailsi"],
    related: ["multan-bill-check", "khanewal-bill-check"],
  },
  {
    name: "Lodhran",
    slug: "lodhran-bill-check",
    title: "MEPCO Lodhran Bill Check Online",
    description: "Check your MEPCO Lodhran electricity bill online.",
    keywords: ["MEPCO Lodhran bill", "Lodhran bill check", "mepco online bill lodhran"],
    areas: ["Lodhran", "Duniyapur", "Kahror Pacca"],
    related: ["multan-bill-check", "bahawalpur-bill-check"],
  },
  {
    name: "Sahiwal",
    slug: "sahiwal-bill-check",
    title: "MEPCO Sahiwal Bill Check Online",
    description: "Check your MEPCO Sahiwal electricity bill online.",
    keywords: ["MEPCO Sahiwal bill", "Sahiwal bill check", "mepco online bill sahiwal", "wapda bill sahiwal"],
    areas: ["Sahiwal City", "Chichawatni", "Harappa"],
    related: ["khanewal-bill-check", "vehari-bill-check"],
  },
  {
    name: "Rahim Yar Khan",
    slug: "rahim-yar-khan-bill-check",
    title: "MEPCO Rahim Yar Khan Bill Check Online",
    description: "Check your MEPCO Rahim Yar Khan electricity bill online.",
    keywords: ["MEPCO Rahim Yar Khan bill", "ryk bill check online", "mepco online bill ryk", "wapda bill rahim yar khan"],
    areas: ["Rahim Yar Khan", "Khanpur", "Sadiqabad", "Liaquatpur"],
    related: ["bahawalpur-bill-check", "rajanpur-bill-check"],
  },
  {
    name: "Muzaffargarh",
    slug: "muzaffargarh-bill-check",
    title: "MEPCO Muzaffargarh Bill Check Online",
    description: "Check your MEPCO Muzaffargarh electricity bill online.",
    keywords: ["MEPCO Muzaffargarh bill", "muzaffargarh bill check online", "mepco online bill muzaffargarh"],
    areas: ["Muzaffargarh", "Alipur", "Jatoi", "Kot Addu"],
    related: ["layyah-bill-check", "dera-ghazi-khan-bill-check"],
  },
  {
    name: "Dera Ghazi Khan",
    slug: "dera-ghazi-khan-bill-check",
    title: "MEPCO Dera Ghazi Khan Bill Check Online",
    description: "Check your MEPCO Dera Ghazi Khan electricity bill online.",
    keywords: ["MEPCO DG Khan bill", "dg khan bill check online", "mepco online bill dera ghazi khan", "wapda bill dg khan"],
    areas: ["Dera Ghazi Khan", "Kot Chutta"],
    related: ["taunsa-bill-check", "rajanpur-bill-check"],
  },
  {
    name: "Bahawalnagar",
    slug: "bahawalnagar-bill-check",
    title: "MEPCO Bahawalnagar Bill Check Online",
    description: "Check your MEPCO Bahawalnagar electricity bill online.",
    keywords: ["MEPCO Bahawalnagar bill", "bahawalnagar bill check online", "mepco online bill bahawalnagar"],
    areas: ["Bahawalnagar", "Chishtian", "Fort Abbas", "Haroonabad", "Minchinabad"],
    related: ["bahawalpur-bill-check", "rahim-yar-khan-bill-check"],
  },
  {
    name: "Layyah",
    slug: "layyah-bill-check",
    title: "MEPCO Layyah Bill Check Online",
    description: "Check your MEPCO Layyah electricity bill online.",
    keywords: ["MEPCO Layyah bill", "layyah bill check online", "mepco online bill layyah"],
    areas: ["Layyah", "Choubari", "Karor Lal Esan"],
    related: ["muzaffargarh-bill-check", "rajanpur-bill-check"],
  },
  {
    name: "Rajanpur",
    slug: "rajanpur-bill-check",
    title: "MEPCO Rajanpur Bill Check Online",
    description: "Check your MEPCO Rajanpur electricity bill online.",
    keywords: ["MEPCO Rajanpur bill", "rajanpur bill check online", "mepco online bill rajanpur"],
    areas: ["Rajanpur", "Jampur", "Rojhan"],
    related: ["dera-ghazi-khan-bill-check", "layyah-bill-check"],
  },
  {
    name: "Taunsa",
    slug: "taunsa-bill-check",
    title: "MEPCO Taunsa Bill Check Online",
    description: "Check your MEPCO Taunsa electricity bill online.",
    keywords: ["MEPCO Taunsa bill", "taunsa bill check online", "mepco online bill taunsa", "taunsa sharif bill check"],
    areas: ["Taunsa Sharif", "Vehoa", "Retra"],
    related: ["dera-ghazi-khan-bill-check", "rajanpur-bill-check"],
  },
];

export function getCityBySlug(slug: string) {
  return cities.find((city) => city.slug === slug);
}