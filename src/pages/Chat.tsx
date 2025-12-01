import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Home, Send, Bot, User } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const Chat = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Halo! Saya AI Assistant untuk kesehatan. Saya dapat membantu menjawab pertanyaan seputar gejala, penyakit ringan, dan rekomendasi kesehatan umum. Apa yang ingin Anda tanyakan?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // TODO: Integrate with Lovable AI when enabled
      // Placeholder response for now
      setTimeout(() => {
        const aiResponse: Message = {
          role: "assistant",
          content:
            "Terima kasih atas pertanyaan Anda. Untuk menggunakan fitur AI Assistant, Anda perlu mengaktifkan Lovable Cloud terlebih dahulu. Fitur ini akan memberikan respons AI yang cerdas dan membantu. Untuk saat ini, silakan gunakan fitur diagnosis untuk mendapatkan rekomendasi berdasarkan gejala Anda.",
        };
        setMessages((prev) => [...prev, aiResponse]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      toast.error("Gagal mengirim pesan. Silakan coba lagi.");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-wellness py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-6"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Bot className="w-5 h-5" />
            <span className="font-medium">AI Assistant</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Tanya AI Assistant</h1>
          <p className="text-muted-foreground">Ajukan pertanyaan seputar kesehatan Anda</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-4"
        >
          <Button onClick={() => navigate("/")} variant="outline" className="gap-2">
            <Home className="w-4 h-4" />
            Kembali
          </Button>
        </motion.div>

        {/* Chat Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="shadow-card overflow-hidden">
            <ScrollArea className="h-[500px] p-6">
              <div className="space-y-4">
                {messages.map((msg, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`flex gap-3 ${msg.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                        msg.role === "user" ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"
                      }`}
                    >
                      {msg.role === "user" ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                    </div>
                    <div
                      className={`flex-1 rounded-2xl p-4 ${
                        msg.role === "user"
                          ? "bg-primary text-primary-foreground ml-12"
                          : "bg-muted text-foreground mr-12"
                      }`}
                    >
                      <p className="text-sm leading-relaxed">{msg.content}</p>
                    </div>
                  </motion.div>
                ))}
                {isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex gap-3"
                  >
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div className="flex-1 rounded-2xl p-4 bg-muted text-foreground mr-12">
                      <div className="flex gap-1">
                        <span className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></span>
                        <span
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></span>
                        <span
                          className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"
                          style={{ animationDelay: "0.4s" }}
                        ></span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </ScrollArea>

            <div className="border-t border-border p-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Ketik pertanyaan Anda di sini..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  disabled={isLoading}
                  className="flex-1"
                />
                <Button onClick={handleSend} disabled={isLoading || !input.trim()} className="gap-2">
                  <Send className="w-4 h-4" />
                  Kirim
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                💡 Tip: Aktifkan Lovable Cloud untuk mendapatkan respons AI yang lebih cerdas
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Chat;
