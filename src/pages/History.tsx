import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getDiagnosisHistory, clearDiagnosisHistory } from "@/lib/rules";
import { DiagnosisResult } from "@/types/diagnosis";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Trash2, Calendar, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const History = () => {
  const navigate = useNavigate();
  const [history, setHistory] = useState<DiagnosisResult[]>([]);

  useEffect(() => {
    setHistory(getDiagnosisHistory());
  }, []);

  const handleClear = () => {
    if (confirm("Apakah Anda yakin ingin menghapus semua riwayat diagnosis?")) {
      clearDiagnosisHistory();
      setHistory([]);
      toast.success("Riwayat diagnosis berhasil dihapus");
    }
  };

  const formatDate = (date: Date) => {
    return new Date(date).toLocaleDateString("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-wellness py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Activity className="w-5 h-5" />
            <span className="font-medium">Riwayat Diagnosis</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground mb-2">Riwayat Diagnosis Anda</h1>
          <p className="text-muted-foreground">Lihat kembali hasil diagnosis sebelumnya</p>
        </motion.div>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="flex justify-between items-center mb-6"
        >
          <Button onClick={() => navigate("/")} variant="outline" className="gap-2">
            <Home className="w-4 h-4" />
            Kembali
          </Button>
          {history.length > 0 && (
            <Button onClick={handleClear} variant="destructive" className="gap-2">
              <Trash2 className="w-4 h-4" />
              Hapus Semua
            </Button>
          )}
        </motion.div>

        {/* History List */}
        {history.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-12 text-center shadow-card">
              <Activity className="w-16 h-16 text-muted-foreground mx-auto mb-4 opacity-50" />
              <h2 className="text-2xl font-bold mb-2">Belum Ada Riwayat</h2>
              <p className="text-muted-foreground mb-6">
                Anda belum melakukan diagnosis. Mulai diagnosis untuk melihat riwayat.
              </p>
              <Button onClick={() => navigate("/diagnosis")} className="gap-2">
                Mulai Diagnosis
              </Button>
            </Card>
          </motion.div>
        ) : (
          <div className="space-y-4">
            {history.map((result, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + idx * 0.05 }}
              >
                <Card className="p-6 shadow-soft hover:shadow-card transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-foreground">{result.disease.name}</h3>
                        <Badge variant="secondary">{result.probability}%</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">{result.disease.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {result.matchedSymptoms.slice(0, 3).map((symptom, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                          >
                            {symptom}
                          </span>
                        ))}
                        {result.matchedSymptoms.length > 3 && (
                          <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full">
                            +{result.matchedSymptoms.length - 3} lainnya
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(result.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
