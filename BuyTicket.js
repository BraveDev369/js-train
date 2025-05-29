const provinces = [
  {
    province: "Tehran",
    cities: ["Tehran", "Rey", "Shemiranat", "Varamin"],
  },
  {
    province: "Gilan",
    cities: ["Rasht", "Lahijan", "Anzali", "Fuman"],
  },
  {
    province: "Isfahan",
    cities: ["Isfahan", "Kashan", "Najafabad", "Khomeini Shahr"],
  },
  {
    province: "Fars",
    cities: ["Shiraz", "Marvdasht", "Jahrom", "Lar"],
  },
  {
    province: "Khorasan Razavi",
    cities: ["Mashhad", "Neyshabur", "Sabzevar", "Torbat-e Heydarieh"],
  },
];

const provice = prompt("Enter provice name: ");
provinces.forEach((prov) => {
  if (prov.province.toLowerCase() === provice.toLowerCase()) {
    console.log(prov.cities.join("-"));
  }
});
