// All static site content — swap for Sanity fetch when CMS is connected

export const SITE = {
  name: "Autoškola Jízda s.r.o.",
  shortName: "Autoškola Jízda",
  tagline: "Řidičský průkaz v Rakovníku. S lidským přístupem.",
  phone: "+420 728 492 692",
  phonePlain: "728492692",
  email: "autoskola.jizda@seznam.cz",
  address: "Husovo nám. 2347 (3. patro)",
  city: "Rakovník",
  zip: "269 01",
  ico: "N/A",
  googleRating: 5.0,
  reviewCount: 101,
  mapUrl: "https://maps.google.com/?q=Husovo+nám.+2347,+Rakovník",
  bankAccount: "2801649861/2010",
  bankName: "Fio Banka",
};

export const ADVANTAGES = [
  {
    id: "rating",
    icon: "Star",
    title: "101× hodnocení 5,0 ★",
    body: "Jediná autoškola v Rakovníku s dokonalým skóre na Google. Každé hodnocení si ověříte sami.",
  },
  {
    id: "individual",
    icon: "UserCheck",
    title: "Individuální přístup",
    body: "Nejsme franšíza. Každý žák dostává osobní péči, výcvik přizpůsobujeme tempu a potřebám jednotlivce.",
  },
  {
    id: "languages",
    icon: "Globe",
    title: "Výuka v cizích jazycích",
    body: "Specializujeme se na řidiče-cizince. Zajistíme překladatele z arabštiny, vietnamštiny, ruštiny, angličtiny nebo čínštiny.",
  },
  {
    id: "l17",
    icon: "BookOpen",
    title: "L17 mentoring",
    body: "Teoretická příprava a výcviková jízda pro mentory doprovázejících řidičů. Připravíme vás i vaše dítě.",
  },
  {
    id: "materials",
    icon: "Package",
    title: "Veškeré materiály zdarma",
    body: "Učební pomůcky v hodnotě cca 500 Kč jsou součástí každého kurzu. Nic dalšího kupovat nemusíte.",
  },
  {
    id: "psycholog",
    icon: "Brain",
    title: "Dopravní psycholog",
    body: "Externě zajišťujeme dopravně-psychologické vyšetření. Vše vyřídíme za vás na jednom místě.",
  },
];

export const PRICING_TIERS = [
  {
    id: "basic",
    name: "Basic",
    price: 17000,
    description: "Standardní kurz skupiny B pro uchazeče připravené na samostatnou přípravu.",
    features: [
      "Zákonný rozsah výuky a výcviku",
      "Klimatizované vozidlo",
      "Učební materiály v ceně",
      "Klidný a lidský přístup",
    ],
    highlighted: false,
    badge: null,
  },
  {
    id: "standard",
    name: "Standard",
    price: 21000,
    description: "Rozšířená péče s větším počtem jízdních hodin, ideální pro většinu žadatelů.",
    features: [
      "Vše z Basic kurzu",
      "Více jízdních hodin",
      "Individuální konzultace",
      "Příprava na zkoušku",
    ],
    highlighted: true,
    badge: "Nejoblíbenější",
  },
  {
    id: "exclusive",
    name: "Exclusive",
    price: 40000,
    description: "Kompletní servis včetně výuky v cizím jazyce a přednostního plánování.",
    features: [
      "Vše ze Standard kurzu",
      "Výuka v cizím jazyce",
      "Překladatel zajištěn",
      "Prioritní termíny",
      "Dopravní psycholog",
    ],
    highlighted: false,
    badge: "Pro cizince",
  },
  {
    id: "vip",
    name: "VIP",
    price: 50000,
    description: "Maximální komfort. Vše zařídíme, vy se soustředíte jen na řízení.",
    features: [
      "Vše z Exclusive kurzu",
      "Flexibilní rozvrh 24/7",
      "Osobní instruktor",
      "Garance složení zkoušky",
      "Dárková krabice",
    ],
    highlighted: false,
    badge: "VIP",
  },
];

export const CONDITIONAL_FEES = [
  {
    item: "Vrácení řidičského průkazu (ŘP)",
    price: "6 000 Kč",
    note: "Kurz zaměřený na uchazeče vracející se po odebrání ŘP.",
  },
];

export const KONDICE_FEES = [
  { duration: "45 minut", price: "800 Kč" },
  { duration: "60 minut", price: "1 000 Kč" },
  { duration: "90 minut", price: "1 500 Kč" },
];

export const MUNICIPALITY_FEES = [
  {
    item: "Přihlašovací poplatek (správní poplatek)",
    amount: "50 Kč",
    payer: "Žadatel přímo na MD",
  },
  {
    item: "Poplatek za zkoušku skupiny B",
    amount: "700 Kč",
    payer: "Žadatel přímo na MD",
  },
  {
    item: "Opakovaná zkouška (teorie)",
    amount: "100 Kč",
    payer: "Žadatel přímo na MD",
  },
  {
    item: "Opakovaná zkouška (jízda)",
    amount: "400 Kč",
    payer: "Žadatel přímo na MD",
  },
  {
    item: "Vydání řidičského průkazu",
    amount: "200 Kč",
    payer: "Žadatel přímo na MD",
  },
];

export const CANCELLATION_POLICY = [
  {
    condition: "Zrušení min. 24 hodin předem",
    consequence: "Bez poplatku",
    color: "green",
  },
  {
    condition: "Zrušení méně než 24 hodin předem",
    consequence: "Plná cena jízdy",
    color: "red",
  },
  {
    condition: "Nedostavení se bez omluvení",
    consequence: "Plná cena jízdy + 200 Kč",
    color: "red",
  },
  {
    condition: "Zrušení z důvodu počasí (rozhoduje instruktor)",
    consequence: "Bez poplatku",
    color: "green",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Klára M.",
    rating: 5,
    date: "2026-02",
    text: "Autoškola mě naučila výborně řídit, instruktor je klidný, vtipný a rozumný. Teorie byly pochopitelné, skutečně mi ty hodiny něco daly. Vřele tuto autoškolu doporučuji.",
    initials: "KM",
  },
  {
    id: 2,
    name: "Martin S.",
    rating: 5,
    date: "2025-05",
    text: "Autoškola nabízí moderní vozy, dobře organizované teoretické hodiny a příjemnou atmosféru. Díky jejich přístupu jsem zkoušky zvládnul napoprvé. Rozhodně doporučuji!",
    initials: "MS",
  },
  {
    id: 3,
    name: "Tereza B.",
    rating: 5,
    date: "2025-09",
    text: "Do autoškoly jsem šla s respektem, ale díky trpělivému přístupu instruktora mě to začalo bavit a na jízdy jsem se těšila. Vše se vysvětlovalo v klidu, často i s humorem, takže stres úplně odpadl.",
    initials: "TB",
  },
  {
    id: 4,
    name: "Serhiy V.",
    rating: 5,
    date: "2024-05",
    text: "Jsem rád, že jsem vybral autoškolu Jízda. Super přístup, super instruktor. Pro cizince, kteří neumí česky, zařídí překladatele. Moc děkuji.",
    initials: "SV",
  },
  {
    id: 5,
    name: "Jana H.",
    rating: 5,
    date: "2026-01",
    text: "Autoškolu mohu jen vřele doporučit. Instruktoři byli velmi milí a vstřícní, vše vždy trpělivě a srozumitelně vysvětlili. Komunikace byla skvělá.",
    initials: "JH",
  },
  {
    id: 6,
    name: "Lukáš D.",
    rating: 5,
    date: "2023-05",
    text: "Jízdu určitě doporučuji. Řidičák jsem odkládal kvůli stresu úplně zbytečně. Hodný a tolerantní instruktor, se kterým jsem se i dost nasmál. Teorie zábavná s příklady z praxe. 100% spokojenost.",
    initials: "LD",
  },
  {
    id: 7,
    name: "Barbora T.",
    rating: 5,
    date: "2023-05",
    text: "Moc děkuji za úspěšné zvládnutí zkoušek. Celý výcvik, teorie i samotné jízdy, jsem si velmi užila. Teoretické hodiny mě bavily, pěkné prezentace, kde na sebe vše hezky navazovalo.",
    initials: "BT",
  },
  {
    id: 8,
    name: "Olena K.",
    rating: 5,
    date: "2025-05",
    text: "Pokud nevíte, na jakou školu jít, tak byste sem určitě měli jít. Jsou zde tlumočníci do vietnamštiny, arabštiny, čínštiny i angličtiny. Moje osobní hodnocení je 11/10.",
    initials: "OK",
  },
  {
    id: 9,
    name: "Ondřej P.",
    rating: 5,
    date: "2025-05",
    text: "Instruktoři jsou trpěliví, srozumitelně vysvětlují teorii i praxi a vytvářejí klidné prostředí pro začínající řidiče. Kvalitní výcvik v moderních vozech pomáhá rychle nabýt jistotu za volantem.",
    initials: "OP",
  },
  {
    id: 10,
    name: "Veronika O.",
    rating: 5,
    date: "2023-05",
    text: "Řidičáku na auto jsem se silně vyhýbala. V autoškole mají super přístup, moc příjemní lidé. Všechno mi bylo pořádně vysvětleno klidně desetkrát, abych to pochopila. Autoškolu jsem úspěšně dokončila. Na 100% doporučuji!",
    initials: "VO",
  },
  {
    id: 11,
    name: "David Č.",
    rating: 5,
    date: "2021-05",
    text: "Jednoznačně doporučuji. Autoškoly jsem se velmi bál a bál jsem se, že se řídit nikdy nenaučím, ale tady mě to naučit dokázali. Vše se děje v klidu a nikdo na nikoho neřve.",
    initials: "DC",
  },
  {
    id: 12,
    name: "Petra J.",
    rating: 5,
    date: "2024-05",
    text: "Moc milé jednání a obrovská trpělivost i empatie na teorii i na praktické části kurzu. Žádný stres, na každou hodinu jízdy jsem chodila velmi ráda. Ještě jednou moc děkuji za předání znalostí a praxe!",
    initials: "PJ",
  },
  {
    id: 13,
    name: "Pavel K.",
    rating: 5,
    date: "2025-05",
    text: "Mohu jen doporučit, skvělé lidi, luxusní domluva a přístup. Dělal jsem kurz před 4 lety a teď jsem ho potřeboval znovu, neváhal jsem a šel jsem znovu k nim.",
    initials: "PK",
  },
  {
    id: 14,
    name: "Eliška N.",
    rating: 5,
    date: "2025-05",
    text: "Skvělá autoškola, díky které se řízení nebojím. Přátelský a ochotný přístup, uvolněná atmosféra, vřele doporučuji!",
    initials: "EN",
  },
  {
    id: 15,
    name: "Oksana R.",
    rating: 5,
    date: "2025-05",
    text: "Найкраща автошкола, лояльність, розуміння, допомога з усім, організовують перекладача, всім раджу.",
    initials: "OR",
  },
  {
    id: 16,
    name: "Tomáš H.",
    rating: 5,
    date: "2025-05",
    text: "Rozhodně autoškola, kde se člověk cítí vítán a v bezpečí. Nikdo na nikoho neřve a krásně všechno vysvětlí. Vyjdou vstříc, když se jízdy zrovna nehodí, najdou jiný termín úplně v pohodě.",
    initials: "TH",
  },
  {
    id: 17,
    name: "Simona L.",
    rating: 5,
    date: "2023-05",
    text: "Jsem velmi spokojená, učitelé jsou příjemní a mají profesionální přístup, nikdo na mě nekřičel a vždy mi bylo vše vysvětleno v klidu. Moc děkuji za příjemnou zkušenost.",
    initials: "SL",
  },
  {
    id: 18,
    name: "Filip Z.",
    rating: 5,
    date: "2024-05",
    text: "Naprosto skvělý přístup a jednání. Lepší autoškolu jsem si ani přát nemohl. Doporučuji všem!!",
    initials: "FZ",
  },
  {
    id: 19,
    name: "Aneta B.",
    rating: 5,
    date: "2023-05",
    text: "Výborná autoškola! Učitelé byli moc milí a skvěle mě připravili ke zkouškám. Jízdy i teorie mě moc bavily, byla na nich zábava, ale poskytli mi i konstruktivní kritiku. Všem moc doporučuji!",
    initials: "AB",
  },
  {
    id: 20,
    name: "Ahmad K.",
    rating: 5,
    date: "2023-05",
    text: "Zpočátku jsem se bál, protože neumím česky, ale učitelé jsou velmi milí a velmi ochotní. Moc děkuji.",
    initials: "AK",
  },
  {
    id: 21,
    name: "Jakub F.",
    rating: 5,
    date: "2023-05",
    text: "Všem chci moc doporučit tuhle autoškolu. Jízdy mě moc bavily a teorie byla přínosná a zábavná. Jestli váháte, kam do autoškoly, tak určitě sem!",
    initials: "JF",
  },
  {
    id: 22,
    name: "Kateřina M.",
    rating: 5,
    date: "2021-05",
    text: "Doporučuji všem. Jsem velmi spokojená, už jenom tím, že na vás nikdo neřve a nejste v žádném stresu. Domluva taky nejvíc do pohody a učitelé strašně hodní.",
    initials: "KM",
  },
  {
    id: 23,
    name: "Jan T.",
    rating: 5,
    date: "2024-05",
    text: "Chci všem vzkázat: až si budete vybírat autoškolu, neváhejte a vyberte si tuto. Nikdy jsem si nemyslel, že budu vůbec umět řídit, ale naučil jsem se to díky profesionálnímu instruktorovi.",
    initials: "JT",
  },
  {
    id: 24,
    name: "Natálie S.",
    rating: 5,
    date: "2023-05",
    text: "Velmi dobrá autoškola, doporučuji. Zkoušku jsem zvládla napoprvé. Přátelští a dobří učitelé, vysvětlují dobře a srozumitelně, bez nervů a stresu.",
    initials: "NS",
  },
  {
    id: 25,
    name: "Michal R.",
    rating: 5,
    date: "2025-05",
    text: "Autoškola je skvělá volba pro každého, kdo chce řidičský průkaz bez stresu. Instruktoři jsou trpěliví a profesionální, výuka probíhá v přátelské atmosféře.",
    initials: "MR",
  },
  {
    id: 26,
    name: "Monika B.",
    rating: 5,
    date: "2024-05",
    text: "Moc doporučuji, lepší autoškolu jsem si nemohla přát. O přístupu ani nemluvím, moc hodní a vždy vyhoví.",
    initials: "MB",
  },
  {
    id: 27,
    name: "Radek N.",
    rating: 5,
    date: "2021-05",
    text: "Super přístup, možnost se vždy nějak domluvit a individuální přístup. Nikdo na vás zbytečně neřve. Doporučuji všem.",
    initials: "RN",
  },
  {
    id: 28,
    name: "Ondřej H.",
    rating: 5,
    date: "2023-05",
    text: "Děkuji autoškole Jízda za všechny předané informace a za skvělou přípravu ke zkouškám. Velice jsem ocenil individuální přístup ke každému a kvalitní teorie. Všichni jsou tady příjemní a ochotní.",
    initials: "OH",
  },
  {
    id: 29,
    name: "Lucie F.",
    rating: 5,
    date: "2026-01",
    text: "Super autoškola, velmi doporučuji! Ochota, přístup i komunikace 10/10.",
    initials: "LF",
  },
  {
    id: 30,
    name: "Marek J.",
    rating: 5,
    date: "2022-05",
    text: "Skvělý přístup, když jsou nervy, tak instruktor je chápavý a tolerantní, se vším ochotný poradit. Mohu jen doporučit.",
    initials: "MJ",
  },
  {
    id: 31,
    name: "Dominika H.",
    rating: 5,
    date: "2023-05",
    text: "Mohu jen doporučit. Skvělý přístup, trpěliví a ochotní učitelé, propracované materiály, výcvik je přizpůsoben podle vašeho času.",
    initials: "DH",
  },
  {
    id: 32,
    name: "Ivan P.",
    rating: 5,
    date: "2025-05",
    text: "Tuto autoškolu doporučuji všem. Má velmi dobrý vztah ke studentům a pokud nemáte dobrou znalost českého jazyka, nebude pro vás těžké se učit.",
    initials: "IP",
  },
  {
    id: 33,
    name: "Pavel M.",
    rating: 5,
    date: "2025-06",
    text: "Úžasná autoškola, velmi lidský přístup, skvělá domluva, skutečně vás naučí řídit! Mohu jen a jen doporučit. Opravdu si zaslouží plný počet hvězd.",
    initials: "PM",
  },
  {
    id: 34,
    name: "Adam T.",
    rating: 5,
    date: "2023-05",
    text: "Nebudu to okecávat, prostě milej přístup, lidskej a děkuji.",
    initials: "AT",
  },
  {
    id: 35,
    name: "Karel J.",
    rating: 5,
    date: "2022-05",
    text: "Maximální snaha vyjít vstříc. Klidný přístup při jízdách a srozumitelný výklad. Doporučuji.",
    initials: "KJ",
  },
];

export const WHY_US = [
  {
    id: "fleet",
    icon: "Car",
    title: "Moderní klimatizovaná vozidla",
    body: "Výcvik probíhá výhradně na moderních, klimatizovaných vozidlech. Komfort a bezpečí jsou samozřejmostí.",
  },
  {
    id: "approach",
    icon: "HeartHandshake",
    title: "Klidný a lidský přístup",
    body: "Všichni naši instruktoři mají dlouholetou praxi. Výuka probíhá v klidu, bez zbytečného stresu a tlaku.",
  },
  {
    id: "materials",
    icon: "GraduationCap",
    title: "Materiály v ceně (500 Kč)",
    body: "Veškeré učební pomůcky v hodnotě cca 500 Kč jsou součástí každého kurzu. Nic dalšího kupovat nemusíte.",
  },
  {
    id: "psycholog",
    icon: "Brain",
    title: "Dopravní psycholog",
    body: "Externě spolupracujeme s dopravním psychologem. Zajistíme dopravně-psychologické vyšetření přímo za vás.",
  },
  {
    id: "success",
    icon: "Trophy",
    title: "Vysoká úspěšnost u zkoušek",
    body: "Naši žáci dosahují u zkoušek velmi dobrých výsledků. Pečlivá příprava se vyplatí.",
  },
  {
    id: "theory",
    icon: "BookOpenCheck",
    title: "Pravidelná teoretická výuka",
    body: "Teorie probíhá formou přednášek na učebně. Praktický výcvik probíhá od rána do večera dle vašich možností.",
  },
];

export const LANGUAGES = [
  { code: "ar", name: "Arabština", flag: "🇸🇦" },
  { code: "vi", name: "Vietnamština", flag: "🇻🇳" },
  { code: "ru", name: "Ruština", flag: "🇷🇺" },
  { code: "en", name: "Angličtina", flag: "🇬🇧" },
  { code: "zh", name: "Čínština", flag: "🇨🇳" },
];

export const RESOURCES_EXTERNAL = [
  {
    id: "etesty",
    label: "Testové otázky (etesty2.mdcr.cz)",
    description: "Oficiální testové otázky Ministerstva dopravy ČR",
    href: "https://etesty2.mdcr.cz/",
  },
  {
    id: "schroter",
    label: "Přehled autoškol (schroter.cz)",
    description: "Databáze autoškol Středočeského kraje a okolí",
    href: "http://www.schroter.cz/uvod17/prehled-as.htm#_stredocesky",
  },
  {
    id: "zakony",
    label: "Zákonyprolidi.cz",
    description: "Zákon č. 247/2000 Sb. a předpisy silničního provozu",
    href: "https://www.zakonyprolidi.cz/",
  },
  {
    id: "besip",
    label: "BESIP: bezpečnost silničního provozu",
    description: "Officiální portál Ministerstva dopravy o bezpečnosti",
    href: "https://besip.cz/",
  },
  {
    id: "bezpecne",
    label: "Bezpečné cesty",
    description: "Vzdělávání a osvěta v oblasti bezpečnosti dopravy",
    href: "https://www.bezpecnecesty.cz/",
  },
];

export const RESOURCES_DOWNLOADS = [
  {
    id: "zadost",
    label: "Žádost o přijetí k výuce a výcviku",
    description: "Formulář dle vyhlášky č. 284/2013 Sb.",
    href: "http://www.schroter.cz/samsou/zadost-dle-284-2013.pdf",
    filename: "zadost-284-2013.pdf",
  },
  {
    id: "lekarsky",
    label: "Lékařský posudek",
    description: "Formulář dle vyhlášky č. 271/2015 Sb.",
    href: "http://www.schroter.cz/samsou/posudek-dle-271-2015.pdf",
    filename: "posudek-271-2015.pdf",
  },
];

export const FAQ_ITEMS = [
  {
    id: "q1",
    question: "Jaké jsou platební podmínky?",
    answer:
      "Cenu kurzu lze hradit hotově, bankovním převodem (2801649861/2010, Fio Banka) nebo ve splátkách po dohodě. Záloha ve výši 3 000 Kč je splatná při podpisu smlouvy.",
  },
  {
    id: "q2",
    question: "Kolik je minimální věk pro kurz skupiny B?",
    answer:
      "Výcvik lze zahájit od 17 let v rámci programu L17 (s doprovodem mentora). Samostatné absolvování zkoušek je možné od 18 let.",
  },
  {
    id: "q3",
    question: "Co se stane, když neprojdu zkouškou napoprvé?",
    answer:
      "Opakované zkoušky jsou hrazeny přímo na magistrátu (teorie 100 Kč, jízda 400 Kč). V autoškole vám zajistíme potřebné přípravné hodiny za standardní cenu.",
  },
  {
    id: "q4",
    question: "Mohu absolvovat výcvik v jiném jazyce než češtině?",
    answer:
      "Ano, v kurzu Exclusive a VIP zajišťujeme tlumočení do arabštiny, vietnamštiny, ruštiny, angličtiny a čínštiny. Stačí nám to předem sdělit.",
  },
  {
    id: "q5",
    question: "Jak funguje program L17 (doprovod mentorem)?",
    answer:
      "Nabízíme teoretickou přípravu mentora (přehled pravidel provozu) i společnou výcvikovou jízdu se žákem, při níž instruktor vysvětlí na co se jako mentor zaměřit. Cena dle dohody.",
  },
  {
    id: "q6",
    question: "Jak mohu kurz darovat jako dárek?",
    answer:
      "Vydáváme dárkové poukazy na libovolnou částku nebo na konkrétní typ kurzu. Kontaktujte nás telefonicky nebo e-mailem a vše domluvíme.",
  },
  {
    id: "q7",
    question: "Kdy probíhá teoretická výuka?",
    answer:
      "Teoretická výuka probíhá pravidelně na učebně autoškoly ve formě přednášek. Přesný rozvrh vám sdělíme při zápisu, termíny se přizpůsobují aktuální skupině.",
  },
  {
    id: "q8",
    question: "Jaká vozidla se používají při výcviku?",
    answer:
      "Výcvik probíhá na moderních klimatizovaných vozidlech. Přesný model sdělíme při zahájení kurzu.",
  },
];
