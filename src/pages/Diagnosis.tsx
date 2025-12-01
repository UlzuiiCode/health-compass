import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { symptoms, diagnose, saveDiagnosis } from "@/lib/rules";
import { SymptomAnswer } from "@/types/diagnosis";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, Circle, ArrowLeft, ArrowRight, Activity } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Diagnosis = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<SymptomAnswer[]>(
    symptoms.map((s) => ({ symptomId: s.id, value: false }))
  );

  const progress = ((currentStep + 1) / symptoms.length) * 100;
  const currentSymptom = symptoms[currentStep];

  const handleAnswer = (value: boolean) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = { symptomId: currentSymptom.id, value };
    setAnswers(newAnswers);

    if (currentStep < symptoms.length - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 300);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    const results = diagnose(answers);
    if (results.length > 0) {
      saveDiagnosis(results[0]);
      navigate("/hasil", { state: { results } });
    } else {
      navigate("/hasil", { state: { results: [] } });
    }
  };

  const isLastStep = currentStep === symptoms.length - 1;

  return (
    <div className="min-h-screen bg-gradient-wellness py-12 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Activity className="w-5 h-5" />
            <span className="font-medium">Diagnosis Berlangsung</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Pemeriksaan Gejala</h1>
          <p className="text-muted-foreground">
            Pertanyaan {currentStep + 1} dari {symptoms.length}
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mb-8"
        >
          <Progress value={progress} className="h-3" />
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-8 shadow-card bg-card">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {currentSymptom.question}
                </h2>
                <p className="text-muted-foreground">Pilih jawaban yang sesuai dengan kondisi Anda</p>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleAnswer(true)}
                  className="h-24 text-lg font-medium bg-white border-0 hover:bg-[#F58220] hover:text-white"
                >
                  <CheckCircle2 className="w-6 h-6 mr-2" />
                  Ya
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => handleAnswer(false)}
                  className="h-24 text-lg font-medium bg-white border-0 hover:bg-[#00AFC1] hover:text-white"
                >
                  <Circle className="w-6 h-6 mr-2" />
                  Tidak
                </Button>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 0}
                  className="gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Kembali
                </Button>

                {isLastStep && (
                  <Button onClick={handleSubmit} className="gap-2">
                    Lihat Hasil
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        </AnimatePresence>

        {/* Symptom Tracker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8"
        >
          <Card className="p-6 bg-card/50">
            <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
              Gejala yang Dipilih
            </h3>
            <div className="flex flex-wrap gap-2">
              {answers
                .filter((a) => a.value)
                .map((a) => {
                  const symptom = symptoms.find((s) => s.id === a.symptomId);
                  return (
                    <span
                      key={a.symptomId}
                      className="inline-flex items-center gap-1 bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      <CheckCircle2 className="w-3 h-3" />
                      {symptom?.name}
                    </span>
                  );
                })}
              {answers.filter((a) => a.value).length === 0 && (
                <span className="text-muted-foreground text-sm">Belum ada gejala yang dipilih</span>
              )}
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Diagnosis;
