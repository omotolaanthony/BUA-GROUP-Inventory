export const equipmentOptions = [
  { value: "Laptop", label: "Laptop" },
  { value: "Monitor", label: "Monitor" },
  { value: "CPU", label: "Owen CPU" },
  { value: "Printer", label: "Printer" },
  { value: "All-In-One", label: "All-In-One" },
  { value: "Desktop", label: "Desktop" },
];

export const equipmentMapping = {
  Laptop: "LAP",
  "All In One Desktop": "ALLDESK",
  Monitor: "MON",
  CPU: "CPU",
  Printer: "PRIN",
  Desktop: "DESK",
};

export const osOptions = [
  { value: "WINDOWS 11 PRO", label: "Windows 11 Pro" },
  { value: "WINDOWS 10 PRO", label: "Windows 10 Pro" },
  {
    value: "WINDOWS 11 PRO WORKSTATION",
    label: "Windows 11 Pro Workstation",
  },
  { value: "WINDOWS 10N PRO", label: "Windows 10N Pro" },
];

export const subsidiary = [
  "BUA International",
  "BUA Estate Abuja",
  "ASR Abuja",
  "BUA Port & Terminal",
  "BUA Transport Edo",
  "POP-PH",
  "BUA Refinery HQ",
  "Damas",
  "BUA Foods",
  "BUA Cement",
];

export const subsidiaryMapping = {
  "BUA International": "INT",
  "BUA Estate Abuja": "EST",
  "ASR Abuja": "ASR",
  "BUA Port & Terminal": "PORTER",
  "BUA Transport Edo": "TRANEDO",
  "POP-PH": "POPH",
  "BUA Refinery HQ": "REF",
  "BUA Refinery": "REF",
  Damas: "DAM",
  DAMAS: "DAM",
  "BUA Foods": "FOODS",
  "BUA Cement": "CEM",
  "KANO PROJECT": "KANOPR",
};

export const bua_foods = [
  "Lagos-Apapa",
  "Foods-HQ",
  "Sugar-FZE",
  "IRS Flour & Pasta",
  "Lafiaji",
  "Kano Rice",
  "BUA Oil",
  "BUA Beverages",
];
export const bua_cement = [
  "BUA Cement Sokoto",
  "BUA Cement Edo",
  "BUA Cement HQ",
];

export const departmentOptions = [
  { label: "Tax Office", value: "Tax Office" },
  { label: "Project Office", value: "Project Office" },
  { label: "Protocol", value: "Protocol" },
  { label: "Legal", value: "Legal" },
  { label: "Trade and Finance", value: "Trade and Finance" },
  { label: "ASR", value: "ASR" },
  { label: "Logistics", value: "Logistics" },
  { label: "BUA Foods", value: "BUA Foods" },
  { label: "Human Resources", value: "Human Resources" },
  { label: "Damas", value: "Damas" },
  { label: "Refinery", value: "Refinery" },
  { label: "Lasuco", value: "Lasuco" },
  { label: "IRS Pasta", value: "IRS Pasta" },
  { label: "CFO", value: "CFO" },
  { label: "BUA Foods Beverages", value: "BUA Foods Beverages" },
  { label: "Group Executive Director", value: "Group Executive Director" },
  { label: "Chairman Office", value: "Chairman Office" },
  { label: "Business development", value: "Business development" },
  { label: "Corporate Communication", value: "Corporate Communication" },
  { label: "GCOO", value: "GCOO" },
  { label: "MD BUA Foods", value: "MD BUA Foods" },
  { label: "AIRPORT", value: "AIRPORT" },
  { label: "BUA Foods Customer Service", value: "BUA Foods Customer Service" },
  { label: "General Manager, Cement", value: "General Manager, Cement" },
  { label: "Finance", value: "Finance" },
  { label: "Trade Finance", value: "Trade Finance" },
  { label: "Information Technology", value: "Information Technology" },
  { label: "Niger Republic", value: "Niger Republic" },
  { label: "Intensive Care Unit", value: "Intensive Care Unit" },
  { label: "Administration", value: "Administration" },
  { label: "Clearing and Forwarding", value: "Clearing and Forwarding" },
  { label: "Clearing and Logistics", value: "Clearing and Logistics" },
  { label: "Corporate Finance", value: "Corporate Finance" },
  { label: "Project", value: "Project" },
  { label: "Foods", value: "Foods" },
  { label: "Stakeholder Engagement", value: "Stakeholder Engagement" },
  { label: "Kano Project", value: "Kano Project" },
  { label: "Portfolio", value: "Portfolio" },
  { label: "Supply Chain", value: "Supply Chain" },
  { label: "GED Secretary", value: "GED Secretary" },
  { label: "BUA Estate", value: "BUA Estate" },
  { label: "Damas Petrochemicals", value: "Damas Petrochemicals" },
  { label: "CASHOFFICE", value: "CASHOFFICE" },
  { label: "Projects", value: "Projects" },
  { label: "Treasury", value: "Treasury" },
  { label: "Sales and Marketing", value: "Sales and Marketing" },
  { label: "Inventory", value: "Inventory" },
  { label: "Production", value: "Production" },
  { label: "Electrical", value: "Electrical" },
  { label: "Audit", value: "Audit" },
  { label: "Procurement", value: "Procurement" },
  { label: "Security", value: "Security" },
  { label: "Civil", value: "Civil" },
  { label: "Maintenance", value: "Maintenance" },
  { label: "Cash Office", value: "Cash Office" },
  { label: "Iron and Steel", value: "Iron and Steel" },
  { label: "Internal Audit", value: "Internal Audit" },
  { label: "Trade Services", value: "Trade Services" },
  { label: "Cement Expansion", value: "Cement Expansion" },
  { label: "GCOO Office", value: "GCOO Office" },
  { label: "GED Office", value: "GED Office" },
  { label: "Strategy", value: "Strategy" },
  { label: "Chairman's Office", value: "Chairman's Office" },
  { label: "Maintenace", value: "Maintenace" },
  { label: "Water Treatment", value: "Water Treatment" },
];

export const departmentMapping = {
  "Tax Office": "TAX",
  "Project Office": "PROJ",
  Protocol: "PROT",
  Legal: "LEG",
  "Trade and Finance": "TRFIN",
  "Coprate Comms": "CORCOM",
  "MD ASR": "MD-ASR",
  Logistics: "LOG",
  "BUA Foods": "FOODS",
  HR: "HR",
  Damas: "DAM",
  Refinery: "REFN",
  Lasuco: "LASC", // <--- First instance (Blue)
  "IRS Pasta": "IRSPAS",
  CFO: "CFO",
  "BUA Foods Beverages": "FOODBV",
  "Group Executive Director": "GED",
  "Chairman Office": "CHRMAN",
  "Business Development": "BUSDEV", // Corrected the spelling
  LASUCO: "LASC", // <--- Second instance (Red)
  "Corporate Communication": "CORCOM", // Removed duplicate
  GCOO: "GCOO",
  Audit: "AUD",
  DAMAS: "DAM", // Removed duplicate
  "MD BUA Foods": "MD-BF",
  AIRPORT: "AIRPT",
  Financial: "FIN",
  "BUA Foods Customer Service": "BF-CS",
  "General Manager, Cement": "GM-CM",
  Buafoods: "FOODS", // Removed duplicate
  "Trade Finance": "TRFIN", // Removed duplicate
  BUAFOODS: "FOODS", // Removed duplicate
  "Information Technology": "IT",
  "Niger Republic": "NIGREP",
  "Intensive Care Unit": "ICU",
  Administration: "ADMIN",
  "Clearing and Forwarding": "CLFWD",
  "Clearing and Logistics": "CLLOG",
  "Corporate Finance": "CORFIN",
  "Stakeholder Engagement": "STKENG",
  "Kano Project": "KANOPROJ",
  Portfolio: "PORFOL",
  "Supply Chain": "SUPCHN",
  Nan: "NA", // Corrected the spelling
  "GED Secretary": "GED-SEC",
  Nil: "NA", // Corrected the spelling
  "BUA Estate": "BUAEST",
  "Damas Petrochemicals": "DMPC",
  Text: "ID", // Corrected the spelling and used "ID" as the value
  CASHOFFICE: "CASH",
  "Human Resource": "HR", // Removed duplicate
  Projects: "PROJ", // Removed duplicate
  Taxoffice: "TAX", // Corrected the spelling
  Treasury: "TRS",
  Finance: "FIN", // Removed duplicate
  "Sales and Marketing": "SAL&MARK",
  Inventory: "INVT",
  Production: "PROD",
  Electrical: "ELECT",
  Procurement: "PROC",
  Security: "SECR",
  Civil: "CIVIL",
  Maintenance: "MAINT",
  "Iron and Steel": "IR&ST",
  "Internal Audit": "INTAUD",
  "Trade Services": "TRD&SER",
  "Cement Expansion": "CEMEXP",
  "GCOO Office": "GCOOOFF",
  Strategy: "STRG",
  "Chairman's Office": "CHRMOFF",
};
