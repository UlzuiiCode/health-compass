import { useLocation, useNavigate } from "react-router-dom";
import { DiagnosisResult } from "@/types/diagnosis";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  AlertCircle,
  CheckCircle2,
  Home,
  Pill,
  Heart,
  XCircle,
  AlertTriangle,
  Activity,
  MessageCircle,
} from "lucide-react";
import { motion } from "framer-motion";

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const results = (location.state?.results || []) as DiagnosisResult[];

  if (results.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-wellness flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center"
        >
          <Card className="p-8 max-w-md shadow-card">
            <AlertCircle className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Tidak Ada Diagnosis</h2>
            <p className="text-muted-foreground mb-6">
              Gejala yang Anda pilih tidak cocok dengan penyakit dalam database kami. Silakan coba lagi atau
              konsultasi dengan dokter.
            </p>
            <Button onClick={() => navigate("/")} className="gap-2">
              <Home className="w-4 h-4" />
              Kembali ke Beranda
            </Button>
          </Card>
        </motion.div>
      </div>
    );
  }

  const topResult = results[0];

  return (
    <div className="min-h-screen bg-gradient-wellness py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-4">
            <CheckCircle2 className="w-5 h-5" />
            <span className="font-medium">Diagnosis Selesai</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Hasil Diagnosis</h1>
          <p className="text-muted-foreground">Berikut adalah hasil analisis gejala Anda</p>
        </motion.div>

        {/* Main Diagnosis Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Card className="p-8 mb-6 shadow-card border-primary/20">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-2">{topResult.disease.name}</h2>
                <p className="text-muted-foreground">{topResult.disease.description}</p>
              </div>
              <Badge className="text-lg px-4 py-2">{topResult.probability}% Match</Badge>
            </div>

            <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 mb-6">
              <div className="flex gap-2 mb-2">
                <Activity className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Penjelasan Sistem</h3>
                  <p className="text-sm text-muted-foreground">{topResult.explanation}</p>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-secondary" />
                Gejala yang Cocok
              </h3>
              <div className="flex flex-wrap gap-2">
                {topResult.matchedSymptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 bg-secondary/10 text-secondary px-3 py-1 rounded-full text-sm"
                  >
                    <CheckCircle2 className="w-3 h-3" />
                    {symptom}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        </motion.div>

        {/* DSS Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid md:grid-cols-2 gap-6 mb-6"
        >
          {/* Medicines */}
          <Card className="p-6 shadow-soft">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Pill className="w-5 h-5 text-primary" />
              Rekomendasi Obat
            </h3>
            <ul className="space-y-2">
              {topResult.disease.recommendations.medicines.map((med, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{med}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Tips */}
          <Card className="p-6 shadow-soft">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Heart className="w-5 h-5 text-secondary" />
              Tips Perawatan
            </h3>
            <ul className="space-y-2">
              {topResult.disease.recommendations.tips.map((tip, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Avoidances */}
          <Card className="p-6 shadow-soft">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5 text-destructive" />
              Yang Harus Dihindari
            </h3>
            <ul className="space-y-2">
              {topResult.disease.recommendations.avoidances.map((avoid, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <XCircle className="w-4 h-4 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{avoid}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Warnings */}
          <Card className="p-6 shadow-soft">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-accent" />
              Peringatan Penting
            </h3>
            <ul className="space-y-2">
              {topResult.disease.recommendations.warnings.map((warn, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm">
                  <AlertTriangle className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                  <span>{warn}</span>
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>

        {/* Doctor Alert */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Card className="p-6 bg-destructive/5 border-destructive/20 mb-6">
            <div className="flex gap-3">
              <AlertCircle className="w-6 h-6 text-destructive flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-destructive mb-2">Kapan Harus ke Dokter?</h3>
                <p className="text-sm text-foreground">{topResult.disease.recommendations.seekDoctor}</p>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button onClick={() => navigate("/")} variant="outline" className="gap-2">
            <Home className="w-4 h-4" />
            Kembali ke Beranda
          </Button>
          <Button onClick={() => navigate("/riwayat")} variant="outline" className="gap-2">
            <Activity className="w-4 h-4" />
            Lihat Riwayat
          </Button>
          <Button onClick={() => navigate("/chat")} className="gap-2">
            <MessageCircle className="w-4 h-4" />
            Tanya AI Assistant
          </Button>
        </motion.div>

        {/* Disclaimer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-muted-foreground italic">
            ⚠️ Ini hanya diagnosis awal berbasis sistem pakar. Bukan pengganti konsultasi dokter profesional.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Results;
