export interface Symptom {
  id: string;
  name: string;
  question: string;
}

export interface Disease {
  id: string;
  name: string;
  requiredSymptoms: string[];
  optionalSymptoms: string[];
  description: string;
  recommendations: {
    medicines: string[];
    tips: string[];
    avoidances: string[];
    seekDoctor: string;
    warnings: string[];
  };
}

export interface DiagnosisResult {
  disease: Disease;
  probability: number;
  matchedSymptoms: string[];
  explanation: string;
  timestamp: Date;
}

export interface SymptomAnswer {
  symptomId: string;
  value: boolean;
}
