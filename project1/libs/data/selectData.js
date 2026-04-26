const selectData = [
    {
        "name": "Afghanistan",
        "value": "AF",
        "iso_a3": "AFG"
    },
    {
        "name": "Albania",
        "value": "AL",
        "iso_a3": "ALB"
    },
    {
        "name": "Algeria",
        "value": "DZ",
        "iso_a3": "DZA"
    },
    {
        "name": "Angola",
        "value": "AO",
        "iso_a3": "AGO"
    },
    {
        "name": "Argentina",
        "value": "AR",
        "iso_a3": "ARG"
    },
    {
        "name": "Armenia",
        "value": "AM",
        "iso_a3": "ARM"
    },
    {
        "name": "Australia",
        "value": "AU",
        "iso_a3": "AUS"
    },
    {
        "name": "Austria",
        "value": "AT",
        "iso_a3": "AUT"
    },
    {
        "name": "Azerbaijan",
        "value": "AZ",
        "iso_a3": "AZE"
    },
    {
        "name": "Bahamas",
        "value": "BS",
        "iso_a3": "BHS"
    },
    {
        "name": "Bangladesh",
        "value": "BD",
        "iso_a3": "BGD"
    },
    {
        "name": "Belarus",
        "value": "BY",
        "iso_a3": "BLR"
    },
    {
        "name": "Belgium",
        "value": "BE",
        "iso_a3": "BEL"
    },
    {
        "name": "Belize",
        "value": "BZ",
        "iso_a3": "BLZ"
    },
    {
        "name": "Benin",
        "value": "BJ",
        "iso_a3": "BEN"
    },
    {
        "name": "Bhutan",
        "value": "BT",
        "iso_a3": "BTN"
    },
    {
        "name": "Bolivia",
        "value": "BO",
        "iso_a3": "BOL"
    },
    {
        "name": "Bosnia and Herzegovina",
        "value": "BA",
        "iso_a3": "BIH"
    },
    {
        "name": "Botswana",
        "value": "BW",
        "iso_a3": "BWA"
    },
    {
        "name": "Brazil",
        "value": "BR",
        "iso_a3": "BRA"
    },
    {
        "name": "Brunei",
        "value": "BN",
        "iso_a3": "BRN"
    },
    {
        "name": "Bulgaria",
        "value": "BG",
        "iso_a3": "BGR"
    },
    {
        "name": "Burkina Faso",
        "value": "BF",
        "iso_a3": "BFA"
    },
    {
        "name": "Burundi",
        "value": "BI",
        "iso_a3": "BDI"
    },
    {
        "name": "Cambodia",
        "value": "KH",
        "iso_a3": "KHM"
    },
    {
        "name": "Cameroon",
        "value": "CM",
        "iso_a3": "CMR"
    },
    {
        "name": "Canada",
        "value": "CA",
        "iso_a3": "CAN"
    },
    {
        "name": "Central African Republic",
        "value": "CF",
        "iso_a3": "CAF"
    },
    {
        "name": "Chad",
        "value": "TD",
        "iso_a3": "TCD"
    },
    {
        "name": "Chile",
        "value": "CL",
        "iso_a3": "CHL"
    },
    {
        "name": "China",
        "value": "CN",
        "iso_a3": "CHN"
    },
    {
        "name": "Colombia",
        "value": "CO",
        "iso_a3": "COL"
    },
    {
        "name": "Congo",
        "value": "CG",
        "iso_a3": "COG"
    },
    {
        "name": "Costa Rica",
        "value": "CR",
        "iso_a3": "CRI"
    },
    {
        "name": "Côte d'Ivoire",
        "value": "CI",
        "iso_a3": "CIV"
    },
    {
        "name": "Croatia",
        "value": "HR",
        "iso_a3": "HRV"
    },
    {
        "name": "Cuba",
        "value": "CU",
        "iso_a3": "CUB"
    },
    {
        "name": "Cyprus",
        "value": "CY",
        "iso_a3": "CYP"
    },
    {
        "name": "Czech Republic",
        "value": "CZ",
        "iso_a3": "CZE"
    },
    {
        "name": "Democratic People's Republic of Korea",
        "value": "KP",
        "iso_a3": "PRK"
    },
    {
        "name": "Democratic Republic of the Congo",
        "value": "CD",
        "iso_a3": "COD"
    },
    {
        "name": "Denmark",
        "value": "DK",
        "iso_a3": "DNK"
    },
    {
        "name": "Djibouti",
        "value": "DJ",
        "iso_a3": "DJI"
    },
    {
        "name": "Dominican Republic",
        "value": "DO",
        "iso_a3": "DOM"
    },
    {
        "name": "Ecuador",
        "value": "EC",
        "iso_a3": "ECU"
    },
    {
        "name": "Egypt",
        "value": "EG",
        "iso_a3": "EGY"
    },
    {
        "name": "El Salvador",
        "value": "SV",
        "iso_a3": "SLV"
    },
    {
        "name": "Equatorial Guinea",
        "value": "GQ",
        "iso_a3": "GNQ"
    },
    {
        "name": "Eritrea",
        "value": "ER",
        "iso_a3": "ERI"
    },
    {
        "name": "Estonia",
        "value": "EE",
        "iso_a3": "EST"
    },
    {
        "name": "Ethiopia",
        "value": "ET",
        "iso_a3": "ETH"
    },
    {
        "name": "Falkland Islands",
        "value": "FK",
        "iso_a3": "FLK"
    },
    {
        "name": "Fiji",
        "value": "FJ",
        "iso_a3": "FJI"
    },
    {
        "name": "Finland",
        "value": "FI",
        "iso_a3": "FIN"
    },
    {
        "name": "France",
        "value": "FR",
        "iso_a3": "FRA"
    },
    {
        "name": "Gabon",
        "value": "GA",
        "iso_a3": "GAB"
    },
    {
        "name": "Gambia",
        "value": "GM",
        "iso_a3": "GMB"
    },
    {
        "name": "Georgia",
        "value": "GE",
        "iso_a3": "GEO"
    },
    {
        "name": "Germany",
        "value": "DE",
        "iso_a3": "DEU"
    },
    {
        "name": "Ghana",
        "value": "GH",
        "iso_a3": "GHA"
    },
    {
        "name": "Greece",
        "value": "GR",
        "iso_a3": "GRC"
    },
    {
        "name": "Greenland",
        "value": "GL",
        "iso_a3": "GRL"
    },
    {
        "name": "Guatemala",
        "value": "GT",
        "iso_a3": "GTM"
    },
    {
        "name": "Guinea",
        "value": "GN",
        "iso_a3": "GIN"
    },
    {
        "name": "Guinea-Bissau",
        "value": "GW",
        "iso_a3": "GNB"
    },
    {
        "name": "Guyana",
        "value": "GY",
        "iso_a3": "GUY"
    },
    {
        "name": "Haiti",
        "value": "HT",
        "iso_a3": "HTI"
    },
    {
        "name": "Honduras",
        "value": "HN",
        "iso_a3": "HND"
    },
    {
        "name": "Hungary",
        "value": "HU",
        "iso_a3": "HUN"
    },
    {
        "name": "Iceland",
        "value": "IS",
        "iso_a3": "ISL"
    },
    {
        "name": "India",
        "value": "IN",
        "iso_a3": "IND"
    },
    {
        "name": "Indonesia",
        "value": "ID",
        "iso_a3": "IDN"
    },
    {
        "name": "Iran",
        "value": "IR",
        "iso_a3": "IRN"
    },
    {
        "name": "Iraq",
        "value": "IQ",
        "iso_a3": "IRQ"
    },
    {
        "name": "Ireland",
        "value": "IE",
        "iso_a3": "IRL"
    },
    {
        "name": "Israel",
        "value": "IL",
        "iso_a3": "ISR"
    },
    {
        "name": "Italy",
        "value": "IT",
        "iso_a3": "ITA"
    },
    {
        "name": "Jamaica",
        "value": "JM",
        "iso_a3": "JAM"
    },
    {
        "name": "Japan",
        "value": "JP",
        "iso_a3": "JPN"
    },
    {
        "name": "Jordan",
        "value": "JO",
        "iso_a3": "JOR"
    },
    {
        "name": "Kazakhstan",
        "value": "KZ",
        "iso_a3": "KAZ"
    },
    {
        "name": "Kenya",
        "value": "KE",
        "iso_a3": "KEN"
    },
    {
        "name": "Korea",
        "value": "KR",
        "iso_a3": "KOR"
    },
    {
        "name": "Kosovo",
        "value": "-99",
        "iso_a3": "-99"
    },
    {
        "name": "Kuwait",
        "value": "KW",
        "iso_a3": "KWT"
    },
    {
        "name": "Kyrgyzstan",
        "value": "KG",
        "iso_a3": "KGZ"
    },
    {
        "name": "Lao PDR",
        "value": "LA",
        "iso_a3": "LAO"
    },
    {
        "name": "Latvia",
        "value": "LV",
        "iso_a3": "LVA"
    },
    {
        "name": "Lebanon",
        "value": "LB",
        "iso_a3": "LBN"
    },
    {
        "name": "Lesotho",
        "value": "LS",
        "iso_a3": "LSO"
    },
    {
        "name": "Liberia",
        "value": "LR",
        "iso_a3": "LBR"
    },
    {
        "name": "Libya",
        "value": "LY",
        "iso_a3": "LBY"
    },
    {
        "name": "Lithuania",
        "value": "LT",
        "iso_a3": "LTU"
    },
    {
        "name": "Luxembourg",
        "value": "LU",
        "iso_a3": "LUX"
    },
    {
        "name": "Macedonia",
        "value": "MK",
        "iso_a3": "MKD"
    },
    {
        "name": "Madagascar",
        "value": "MG",
        "iso_a3": "MDG"
    },
    {
        "name": "Malawi",
        "value": "MW",
        "iso_a3": "MWI"
    },
    {
        "name": "Malaysia",
        "value": "MY",
        "iso_a3": "MYS"
    },
    {
        "name": "Mali",
        "value": "ML",
        "iso_a3": "MLI"
    },
    {
        "name": "Mauritania",
        "value": "MR",
        "iso_a3": "MRT"
    },
    {
        "name": "Mexico",
        "value": "MX",
        "iso_a3": "MEX"
    },
    {
        "name": "Moldova",
        "value": "MD",
        "iso_a3": "MDA"
    },
    {
        "name": "Mongolia",
        "value": "MN",
        "iso_a3": "MNG"
    },
    {
        "name": "Montenegro",
        "value": "ME",
        "iso_a3": "MNE"
    },
    {
        "name": "Morocco",
        "value": "MA",
        "iso_a3": "MAR"
    },
    {
        "name": "Mozambique",
        "value": "MZ",
        "iso_a3": "MOZ"
    },
    {
        "name": "Myanmar",
        "value": "MM",
        "iso_a3": "MMR"
    },
    {
        "name": "Namibia",
        "value": "NA",
        "iso_a3": "NAM"
    },
    {
        "name": "Nepal",
        "value": "NP",
        "iso_a3": "NPL"
    },
    {
        "name": "Netherlands",
        "value": "NL",
        "iso_a3": "NLD"
    },
    {
        "name": "New Caledonia",
        "value": "NC",
        "iso_a3": "NCL"
    },
    {
        "name": "New Zealand",
        "value": "NZ",
        "iso_a3": "NZL"
    },
    {
        "name": "Nicaragua",
        "value": "NI",
        "iso_a3": "NIC"
    },
    {
        "name": "Niger",
        "value": "NE",
        "iso_a3": "NER"
    },
    {
        "name": "Nigeria",
        "value": "NG",
        "iso_a3": "NGA"
    },
    {
        "name": "Norway",
        "value": "NO",
        "iso_a3": "NOR"
    },
    {
        "name": "Oman",
        "value": "OM",
        "iso_a3": "OMN"
    },
    {
        "name": "Pakistan",
        "value": "PK",
        "iso_a3": "PAK"
    },
    {
        "name": "Palestine",
        "value": "PS",
        "iso_a3": "PSE"
    },
    {
        "name": "Panama",
        "value": "PA",
        "iso_a3": "PAN"
    },
    {
        "name": "Papua New Guinea",
        "value": "PG",
        "iso_a3": "PNG"
    },
    {
        "name": "Paraguay",
        "value": "PY",
        "iso_a3": "PRY"
    },
    {
        "name": "Peru",
        "value": "PE",
        "iso_a3": "PER"
    },
    {
        "name": "Philippines",
        "value": "PH",
        "iso_a3": "PHL"
    },
    {
        "name": "Poland",
        "value": "PL",
        "iso_a3": "POL"
    },
    {
        "name": "Portugal",
        "value": "PT",
        "iso_a3": "PRT"
    },
    {
        "name": "Puerto Rico",
        "value": "PR",
        "iso_a3": "PRI"
    },
    {
        "name": "Qatar",
        "value": "QA",
        "iso_a3": "QAT"
    },
    {
        "name": "Romania",
        "value": "RO",
        "iso_a3": "ROU"
    },
    {
        "name": "Russia",
        "value": "RU",
        "iso_a3": "RUS"
    },
    {
        "name": "Rwanda",
        "value": "RW",
        "iso_a3": "RWA"
    },
    {
        "name": "Saudi Arabia",
        "value": "SA",
        "iso_a3": "SAU"
    },
    {
        "name": "Senegal",
        "value": "SN",
        "iso_a3": "SEN"
    },
    {
        "name": "Serbia",
        "value": "RS",
        "iso_a3": "SRB"
    },
    {
        "name": "Sierra Leone",
        "value": "SL",
        "iso_a3": "SLE"
    },
    {
        "name": "Slovakia",
        "value": "SK",
        "iso_a3": "SVK"
    },
    {
        "name": "Slovenia",
        "value": "SI",
        "iso_a3": "SVN"
    },
    {
        "name": "Solomon Islands",
        "value": "SB",
        "iso_a3": "SLB"
    },
    {
        "name": "Somalia",
        "value": "SO",
        "iso_a3": "SOM"
    },
    {
        "name": "South Africa",
        "value": "ZA",
        "iso_a3": "ZAF"
    },
    {
        "name": "South Sudan",
        "value": "SS",
        "iso_a3": "SSD"
    },
    {
        "name": "Spain",
        "value": "ES",
        "iso_a3": "ESP"
    },
    {
        "name": "Sri Lanka",
        "value": "LK",
        "iso_a3": "LKA"
    },
    {
        "name": "Sudan",
        "value": "SD",
        "iso_a3": "SDN"
    },
    {
        "name": "Suriname",
        "value": "SR",
        "iso_a3": "SUR"
    },
    {
        "name": "Swaziland",
        "value": "SZ",
        "iso_a3": "SWZ"
    },
    {
        "name": "Sweden",
        "value": "SE",
        "iso_a3": "SWE"
    },
    {
        "name": "Switzerland",
        "value": "CH",
        "iso_a3": "CHE"
    },
    {
        "name": "Syria",
        "value": "SY",
        "iso_a3": "SYR"
    },
    {
        "name": "Taiwan",
        "value": "TW",
        "iso_a3": "TWN"
    },
    {
        "name": "Tajikistan",
        "value": "TJ",
        "iso_a3": "TJK"
    },
    {
        "name": "Tanzania",
        "value": "TZ",
        "iso_a3": "TZA"
    },
    {
        "name": "Thailand",
        "value": "TH",
        "iso_a3": "THA"
    },
    {
        "name": "Timor-Leste",
        "value": "TL",
        "iso_a3": "TLS"
    },
    {
        "name": "Togo",
        "value": "TG",
        "iso_a3": "TGO"
    },
    {
        "name": "Trinidad and Tobago",
        "value": "TT",
        "iso_a3": "TTO"
    },
    {
        "name": "Tunisia",
        "value": "TN",
        "iso_a3": "TUN"
    },
    {
        "name": "Turkey",
        "value": "TR",
        "iso_a3": "TUR"
    },
    {
        "name": "Turkmenistan",
        "value": "TM",
        "iso_a3": "TKM"
    },
    {
        "name": "Uganda",
        "value": "UG",
        "iso_a3": "UGA"
    },
    {
        "name": "Ukraine",
        "value": "UA",
        "iso_a3": "UKR"
    },
    {
        "name": "United Arab Emirates",
        "value": "AE",
        "iso_a3": "ARE"
    },
    {
        "name": "United Kingdom",
        "value": "GB",
        "iso_a3": "GBR"
    },
    {
        "name": "United States",
        "value": "US",
        "iso_a3": "USA"
    },
    {
        "name": "Uruguay",
        "value": "UY",
        "iso_a3": "URY"
    },
    {
        "name": "Uzbekistan",
        "value": "UZ",
        "iso_a3": "UZB"
    },
    {
        "name": "Vanuatu",
        "value": "VU",
        "iso_a3": "VUT"
    },
    {
        "name": "Venezuela",
        "value": "VE",
        "iso_a3": "VEN"
    },
    {
        "name": "Vietnam",
        "value": "VN",
        "iso_a3": "VNM"
    },
    {
        "name": "Western Sahara",
        "value": "EH",
        "iso_a3": "ESH"
    },
    {
        "name": "Yemen",
        "value": "YE",
        "iso_a3": "YEM"
    },
    {
        "name": "Zambia",
        "value": "ZM",
        "iso_a3": "ZMB"
    },
    {
        "name": "Zimbabwe",
        "value": "ZW",
        "iso_a3": "ZWE"
    }
]