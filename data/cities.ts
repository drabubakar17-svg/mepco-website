export type CityData = {
  readonly name: string;
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly keywords: readonly string[];
  readonly areas: readonly string[];
  readonly related: readonly string[];
};

export const cities: readonly CityData[] = [
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
  {
    name: "Kot Addu",
    slug: "kot-addu-bill-check",
    title: "MEPCO Kot Addu Bill Check Online",
    description: "Check your MEPCO Kot Addu electricity bill online.",
    keywords: ["MEPCO Kot Addu bill", "kot addu bill check online", "mepco online bill kot addu"],
    areas: ["Kot Addu", "Sananwan", "Daira Din Panah"],
    related: ["muzaffargarh-bill-check", "layyah-bill-check"],
  },
  {
    name: "Sadiqabad",
    slug: "sadiqabad-bill-check",
    title: "MEPCO Sadiqabad Bill Check Online",
    description: "Check your MEPCO Sadiqabad electricity bill online.",
    keywords: ["MEPCO Sadiqabad bill", "sadiqabad bill check online", "mepco online bill sadiqabad"],
    areas: ["Sadiqabad"],
    related: ["rahim-yar-khan-bill-check", "khanpur-bill-check"],
  },
  {
    name: "Khanpur",
    slug: "khanpur-bill-check",
    title: "MEPCO Khanpur Bill Check Online",
    description: "Check your MEPCO Khanpur electricity bill online.",
    keywords: ["MEPCO Khanpur bill", "khanpur bill check online", "mepco online bill khanpur"],
    areas: ["Khanpur"],
    related: ["rahim-yar-khan-bill-check", "sadiqabad-bill-check"],
  },
  {
    name: "Chishtian",
    slug: "chishtian-bill-check",
    title: "MEPCO Chishtian Bill Check Online",
    description: "Check your MEPCO Chishtian electricity bill online.",
    keywords: ["MEPCO Chishtian bill", "chishtian bill check online", "mepco online bill chishtian"],
    areas: ["Chishtian"],
    related: ["bahawalnagar-bill-check", "haroonabad-bill-check"],
  },
  {
    name: "Haroonabad",
    slug: "haroonabad-bill-check",
    title: "MEPCO Haroonabad Bill Check Online",
    description: "Check your MEPCO Haroonabad electricity bill online.",
    keywords: ["MEPCO Haroonabad bill", "haroonabad bill check online", "mepco online bill haroonabad"],
    areas: ["Haroonabad"],
    related: ["bahawalnagar-bill-check", "chishtian-bill-check"],
  },
{
    name: "Jampur",
    slug: "jampur-bill-check",
    title: "MEPCO Jampur Bill Check Online",
    description: "Check your MEPCO Jampur electricity bill online.",
    keywords: ["MEPCO Jampur bill", "jampur bill check online"],
    areas: ["Jampur"],
    related: ["rajanpur-bill-check", "rojhan-bill-check"],
  },
  {
    name: "Rojhan",
    slug: "rojhan-bill-check",
    title: "MEPCO Rojhan Bill Check Online",
    description: "Check your MEPCO Rojhan electricity bill online.",
    keywords: ["MEPCO Rojhan bill", "rojhan bill check online"],
    areas: ["Rojhan"],
    related: ["rajanpur-bill-check", "jampur-bill-check"],
  },
  {
    name: "Kot Chutta",
    slug: "kot-chutta-bill-check",
    title: "MEPCO Kot Chutta Bill Check Online",
    description: "Check your MEPCO Kot Chutta electricity bill online.",
    keywords: ["MEPCO Kot Chutta bill", "kot chutta bill check online"],
    areas: ["Kot Chutta"],
    related: ["dera-ghazi-khan-bill-check", "taunsa-bill-check"],
  },
  {
    name: "Alipur",
    slug: "alipur-bill-check",
    title: "MEPCO Alipur Bill Check Online",
    description: "Check your MEPCO Alipur electricity bill online.",
    keywords: ["MEPCO Alipur bill", "alipur bill check online"],
    areas: ["Alipur"],
    related: ["muzaffargarh-bill-check", "jatoi-bill-check"],
  },
  {
    name: "Jatoi",
    slug: "jatoi-bill-check",
    title: "MEPCO Jatoi Bill Check Online",
    description: "Check your MEPCO Jatoi electricity bill online.",
    keywords: ["MEPCO Jatoi bill", "jatoi bill check online"],
    areas: ["Jatoi"],
    related: ["muzaffargarh-bill-check", "alipur-bill-check"],
  },
  {
    name: "Liaquatpur",
    slug: "liaquatpur-bill-check",
    title: "MEPCO Liaquatpur Bill Check Online",
    description: "Check your MEPCO Liaquatpur electricity bill online.",
    keywords: ["MEPCO Liaquatpur bill", "liaquatpur bill check online"],
    areas: ["Liaquatpur"],
    related: ["rahim-yar-khan-bill-check", "khanpur-bill-check"],
  },
  {
    name: "Fort Abbas",
    slug: "fort-abbas-bill-check",
    title: "MEPCO Fort Abbas Bill Check Online",
    description: "Check your MEPCO Fort Abbas electricity bill online.",
    keywords: ["MEPCO Fort Abbas bill", "fort abbas bill check online"],
    areas: ["Fort Abbas"],
    related: ["bahawalnagar-bill-check", "haroonabad-bill-check"],
  },
  {
    name: "Minchinabad",
    slug: "minchinabad-bill-check",
    title: "MEPCO Minchinabad Bill Check Online",
    description: "Check your MEPCO Minchinabad electricity bill online.",
    keywords: ["MEPCO Minchinabad bill", "minchinabad bill check online"],
    areas: ["Minchinabad"],
    related: ["bahawalnagar-bill-check", "chishtian-bill-check"],
  },
  {
    name: "Hasilpur",
    slug: "hasilpur-bill-check",
    title: "MEPCO Hasilpur Bill Check Online",
    description: "Check your MEPCO Hasilpur electricity bill online.",
    keywords: ["MEPCO Hasilpur bill", "hasilpur bill check online"],
    areas: ["Hasilpur"],
    related: ["bahawalpur-bill-check", "ahmadpur-east-bill-check"],
  },
  {
    name: "Ahmadpur East",
    slug: "ahmadpur-east-bill-check",
    title: "MEPCO Ahmadpur East Bill Check Online",
    description: "Check your MEPCO Ahmadpur East electricity bill online.",
    keywords: ["MEPCO Ahmadpur East bill", "ahmadpur east bill check online"],
    areas: ["Ahmadpur East"],
    related: ["bahawalpur-bill-check", "hasilpur-bill-check"],
  },
  {
    name: "Yazman",
    slug: "yazman-bill-check",
    title: "MEPCO Yazman Bill Check Online",
    description: "Check your MEPCO Yazman electricity bill online.",
    keywords: ["MEPCO Yazman bill", "yazman bill check online"],
    areas: ["Yazman"],
    related: ["bahawalpur-bill-check", "hasilpur-bill-check"],
  },
  {
    name: "Kabirwala",
    slug: "kabirwala-bill-check",
    title: "MEPCO Kabirwala Bill Check Online",
    description: "Check your MEPCO Kabirwala electricity bill online.",
    keywords: ["MEPCO Kabirwala bill", "kabirwala bill check online"],
    areas: ["Kabirwala"],
    related: ["khanewal-bill-check", "mian-channu-bill-check"],
  },
] as const; // Freezes the array structure for maximum compilation efficiency

// Map initialization executes only once on load, giving an instant O(1) hash lookup
const cityLookupMap = new Map<string, CityData>(
  cities.map((city) => [city.slug, city])
);

/**
 * Highly optimized city lookups in O(1) time complexity.
 */
export function getCityBySlug(slug: string): CityData | undefined {
  return cityLookupMap.get(slug);
}

/**
 * Returns full CityData objects for a city's related slugs.
 * Safely filters out missing links.
 */
export function getRelatedCities(relatedSlugs: readonly string[]): CityData[] {
  const result: CityData[] = [];
  for (let i = 0; i < relatedSlugs.length; i++) {
    const match = cityLookupMap.get(relatedSlugs[i]);
    if (match) result.push(match);
  }
  return result;
}