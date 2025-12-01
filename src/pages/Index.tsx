import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Activity,
  Brain,
  MessageCircle,
  Clock,
  Shield,
  Sparkles,
  ArrowRight,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Brain,
      title: "Rule-Based AI",
      description: "Sistem pakar dengan forward chaining untuk diagnosis akurat",
    },
    {
      icon: Activity,
      title: "Analisis Gejala",
      description: "Pertanyaan interaktif untuk mengidentifikasi kondisi Anda",
    },
    {
      icon: Stethoscope,
      title: "Rekomendasi DSS",
      description: "Decision Support System memberikan panduan tindakan",
    },
    {
      icon: MessageCircle,
      title: "AI Assistant",
      description: "Chat dengan AI untuk pertanyaan kesehatan lebih lanjut",
    },
    {
      icon: Clock,
      title: "Riwayat Diagnosis",
      description: "Simpan dan lacak hasil diagnosis Anda",
    },
    {
      icon: Shield,
      title: "Data Aman",
      description: "Informasi Anda tersimpan lokal dan terjaga keamanannya",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="font-medium">Sistem Pakar Kesehatan Berbasis AI</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Diagnosis Penyakit Ringan
              <br />
              <span className="text-white/90">Cepat & Akurat</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Dapatkan diagnosis awal berbasis kecerdasan buatan dan rule-based decision system.
              Sistem kami menggunakan forward chaining untuk memberikan hasil yang akurat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => navigate("/diagnosis")}
                className="text-lg h-14 px-8 gap-2 shadow-glow hover:shadow-glow hover:scale-105 transition-all bg-white text-primary hover:bg-white/90"
              >
                <Activity className="w-5 h-5" />
                Mulai Diagnosis
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate("/chat")}
                className="text-lg h-14 px-8 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                <MessageCircle className="w-5 h-5" />
                Tanya AI Assistant
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Fitur Unggulan</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Sistem kami dilengkapi dengan teknologi canggih untuk memberikan diagnosis terbaik
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.5 }}
              >
                <Card className="p-6 h-full shadow-soft hover:shadow-card transition-all hover:-translate-y-1 bg-gradient-card">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Cara Kerja</h2>
            <p className="text-lg text-muted-foreground">Proses diagnosis yang mudah dan cepat</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Jawab Pertanyaan",
                description: "Sistem akan menanyakan gejala yang Anda alami secara interaktif",
              },
              {
                step: "2",
                title: "Analisis AI",
                description: "Forward chaining AI menganalisis gejala dan mencocokkan dengan database",
              },
              {
                step: "3",
                title: "Dapatkan Hasil",
                description: "Terima diagnosis lengkap dengan rekomendasi dan panduan tindakan",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4 shadow-glow">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-hero">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Siap Untuk Memulai Diagnosis?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Dapatkan diagnosis awal dan rekomendasi kesehatan dalam hitungan menit
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              onClick={() => navigate("/diagnosis")}
              className="text-lg h-14 px-8 gap-2 bg-white text-primary hover:bg-white/90 shadow-glow"
            >
              <Activity className="w-5 h-5" />
              Mulai Diagnosis Sekarang
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/riwayat")}
              className="text-lg h-14 px-8 gap-2 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Clock className="w-5 h-5" />
              Lihat Riwayat
            </Button>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-background border-t border-border">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            ⚠️ <strong>Disclaimer:</strong> Ini hanya diagnosis awal berbasis sistem pakar. Bukan pengganti
            konsultasi dokter profesional. Untuk diagnosis akurat, konsultasi dengan tenaga medis.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
