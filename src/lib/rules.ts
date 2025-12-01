import { Symptom, Disease, DiagnosisResult, SymptomAnswer } from "@/types/diagnosis";

export const symptoms: Symptom[] = [
  { id: "demam", name: "Demam", question: "Apakah Anda mengalami demam (suhu badan tinggi)?" },
  { id: "batuk", name: "Batuk", question: "Apakah Anda mengalami batuk?" },
  { id: "pilek", name: "Pilek", question: "Apakah Anda mengalami pilek atau hidung tersumbat?" },
  { id: "sakit_kepala", name: "Sakit Kepala", question: "Apakah Anda mengalami sakit kepala?" },
  { id: "mual", name: "Mual", question: "Apakah Anda merasa mual?" },
  { id: "muntah", name: "Muntah", question: "Apakah Anda muntah?" },
  { id: "diare", name: "Diare", question: "Apakah Anda mengalami diare?" },
  { id: "lemas", name: "Lemas", question: "Apakah Anda merasa lemas atau tidak bertenaga?" },
  { id: "nyeri_otot", name: "Nyeri Otot", question: "Apakah Anda merasakan nyeri pada otot?" },
  { id: "sakit_tenggorokan", name: "Sakit Tenggorokan", question: "Apakah tenggorokan Anda terasa sakit?" },
  { id: "perut_kembung", name: "Perut Kembung", question: "Apakah perut Anda terasa kembung?" },
  { id: "sensitif_cahaya", name: "Sensitif Cahaya", question: "Apakah mata Anda sensitif terhadap cahaya?" },
  { id: "bersin", name: "Bersin", question: "Apakah Anda sering bersin?" },
  { id: "kehilangan_nafsu", name: "Kehilangan Nafsu Makan", question: "Apakah nafsu makan Anda berkurang?" },
];

export const diseases: Disease[] = [
  {
    id: "flu",
    name: "Flu (Influenza)",
    requiredSymptoms: ["demam", "batuk"],
    optionalSymptoms: ["pilek", "sakit_kepala", "nyeri_otot", "lemas", "sakit_tenggorokan"],
    description: "Flu adalah infeksi virus pada saluran pernapasan yang menyebabkan demam, batuk, dan gejala lainnya.",
    recommendations: {
      medicines: ["Paracetamol 500mg (3x sehari)", "Vitamin C 1000mg (1x sehari)", "Obat batuk sesuai jenis (kering/berdahak)"],
      tips: [
        "Istirahat yang cukup (minimal 8 jam tidur)",
        "Minum air putih hangat 8-10 gelas per hari",
        "Konsumsi makanan bergizi tinggi protein",
        "Gunakan masker saat berinteraksi dengan orang lain",
      ],
      avoidances: ["Hindari makanan dingin dan es", "Jangan keluar rumah saat hujan", "Hindari tempat ber-AC terlalu dingin"],
      seekDoctor: "Segera ke dokter jika demam >39°C selama >3 hari, sesak napas, atau batuk darah",
      warnings: ["Flu bisa menular, jaga jarak dengan orang lain", "Jika tidak membaik dalam 5-7 hari, konsultasi dokter"],
    },
  },
  {
    id: "migrain",
    name: "Migrain",
    requiredSymptoms: ["sakit_kepala"],
    optionalSymptoms: ["mual", "muntah", "sensitif_cahaya"],
    description: "Migrain adalah sakit kepala hebat yang biasanya berdenyut di satu sisi kepala, sering disertai mual dan sensitif cahaya.",
    recommendations: {
      medicines: ["Paracetamol 500mg atau Ibuprofen 400mg", "Obat anti-mual (jika diperlukan)", "Hindari obat tanpa resep berlebihan"],
      tips: [
        "Istirahat di ruangan gelap dan tenang",
        "Kompres dingin di dahi atau belakang leher",
        "Atur pola tidur yang teratur",
        "Kelola stres dengan meditasi atau yoga",
      ],
      avoidances: ["Hindari makanan pemicu (cokelat, keju, kafein berlebih)", "Jangan menatap layar terlalu lama", "Hindari cahaya terang"],
      seekDoctor: "Konsultasi dokter jika sakit kepala sangat parah, tiba-tiba, atau disertai demam tinggi dan leher kaku",
      warnings: ["Migrain berulang perlu evaluasi dokter", "Catat pemicu migrain untuk dihindari"],
    },
  },
  {
    id: "masuk_angin",
    name: "Masuk Angin",
    requiredSymptoms: ["lemas", "perut_kembung"],
    optionalSymptoms: ["sakit_kepala", "mual", "nyeri_otot"],
    description: "Masuk angin adalah kondisi umum dengan gejala lemas, perut kembung, dan tidak nyaman pada tubuh.",
    recommendations: {
      medicines: ["Minyak kayu putih", "Balsem atau koyo hangat", "Tolak angin atau wedang jahe"],
      tips: [
        "Kerokan atau pijat ringan",
        "Minum minuman hangat (jahe, teh)",
        "Istirahat dan hindari kelelahan",
        "Mandi air hangat",
      ],
      avoidances: ["Hindari angin dan AC langsung", "Jangan minum air dingin", "Hindari makanan berminyak berlebihan"],
      seekDoctor: "Jika gejala berlanjut lebih dari 3 hari atau disertai demam tinggi",
      warnings: ["Masuk angin bisa menjadi gejala penyakit lain jika berkepanjangan"],
    },
  },
  {
    id: "gangguan_pencernaan",
    name: "Gangguan Pencernaan",
    requiredSymptoms: ["mual"],
    optionalSymptoms: ["muntah", "diare", "perut_kembung", "kehilangan_nafsu"],
    description: "Gangguan pencernaan meliputi masalah pada lambung dan usus yang menyebabkan mual, muntah, atau diare.",
    recommendations: {
      medicines: ["Oralit untuk mencegah dehidrasi", "Obat maag (jika perlu)", "Probiotik untuk menjaga flora usus"],
      tips: [
        "Makan dalam porsi kecil tapi sering",
        "Hindari makanan pedas, asam, dan berlemak",
        "Minum air putih yang cukup",
        "Istirahat dan jangan stres",
      ],
      avoidances: ["Hindari kopi dan alkohol", "Jangan langsung berbaring setelah makan", "Hindari makanan berminyak"],
      seekDoctor: "Segera ke dokter jika muntah/diare parah, BAB berdarah, atau dehidrasi berat",
      warnings: ["Dehidrasi akibat diare/muntah bisa berbahaya", "Jika gejala >2 hari tanpa perbaikan, periksa ke dokter"],
    },
  },
  {
    id: "batuk_pilek",
    name: "Batuk Pilek Biasa",
    requiredSymptoms: ["batuk", "pilek"],
    optionalSymptoms: ["bersin", "sakit_tenggorokan", "lemas"],
    description: "Batuk pilek adalah infeksi ringan pada saluran pernapasan atas, biasanya disebabkan virus.",
    recommendations: {
      medicines: ["Obat batuk sesuai jenis", "Dekongestan untuk hidung tersumbat", "Vitamin C untuk daya tahan tubuh"],
      tips: [
        "Istirahat cukup",
        "Minum air hangat dan sup",
        "Uap air panas untuk melegakan pernapasan",
        "Jaga kebersihan tangan",
      ],
      avoidances: ["Hindari makanan dingin", "Jangan berbagi peralatan makan", "Hindari asap rokok"],
      seekDoctor: "Jika batuk berlangsung >2 minggu, sesak napas, atau dahak berwarna kehijauan/berdarah",
      warnings: ["Batuk pilek umumnya sembuh dalam 7-10 hari", "Gunakan masker agar tidak menular"],
    },
  },
];

// Forward Chaining Inference Engine
export function diagnose(answers: SymptomAnswer[]): DiagnosisResult[] {
  const selectedSymptoms = answers.filter((a) => a.value).map((a) => a.symptomId);
  const results: DiagnosisResult[] = [];

  for (const disease of diseases) {
    const matchedRequired = disease.requiredSymptoms.filter((s) => selectedSymptoms.includes(s));
    const matchedOptional = disease.optionalSymptoms.filter((s) => selectedSymptoms.includes(s));
    const totalMatched = matchedRequired.length + matchedOptional.length;

    // Rule: All required symptoms must be present
    if (matchedRequired.length === disease.requiredSymptoms.length) {
      const totalPossible = disease.requiredSymptoms.length + disease.optionalSymptoms.length;
      const probability = Math.round((totalMatched / totalPossible) * 100);

      const matchedSymptomNames = [...matchedRequired, ...matchedOptional].map(
        (id) => symptoms.find((s) => s.id === id)?.name || id
      );

      const explanation = `Diagnosis menunjukkan ${disease.name} karena gejala utama (${disease.requiredSymptoms
        .map((s) => symptoms.find((sym) => sym.id === s)?.name)
        .join(", ")}) sesuai. Gejala tambahan yang cocok: ${
        matchedOptional.length > 0
          ? matchedOptional.map((s) => symptoms.find((sym) => sym.id === s)?.name).join(", ")
          : "tidak ada"
      }.`;

      results.push({
        disease,
        probability,
        matchedSymptoms: matchedSymptomNames,
        explanation,
        timestamp: new Date(),
      });
    }
  }

  // Sort by probability
  results.sort((a, b) => b.probability - a.probability);

  return results;
}

// Save diagnosis to localStorage
export function saveDiagnosis(result: DiagnosisResult) {
  const history = getDiagnosisHistory();
  history.unshift(result);
  localStorage.setItem("diagnosis_history", JSON.stringify(history.slice(0, 20))); // Keep last 20
}

// Get diagnosis history
export function getDiagnosisHistory(): DiagnosisResult[] {
  const stored = localStorage.getItem("diagnosis_history");
  if (!stored) return [];
  try {
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

// Clear diagnosis history
export function clearDiagnosisHistory() {
  localStorage.removeItem("diagnosis_history");
}
