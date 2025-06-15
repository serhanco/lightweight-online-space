
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "./LanguageProvider";

const translations = {
  en: {
    header: "Get In Touch",
    subtitle: "Let's discuss how I can help transform your business through strategic marketing and technology",
    name: "Your Name",
    email: "Your Email",
    message: "Your Message",
    send: "Send Message",
    sent: "Message Sent!",
    thanks: "Thank you for your message. I'll get back to you soon."
  },
  tr: {
    header: "İletişime Geçin",
    subtitle: "Stratejik pazarlama ve teknoloji ile işinizi nasıl dönüştürebileceğimizi konuşalım",
    name: "Adınız",
    email: "E-posta Adresiniz",
    message: "Mesajınız",
    send: "Mesajı Gönder",
    sent: "Mesajınız Gönderildi!",
    thanks: "Mesajınız için teşekkürler. En kısa sürede size geri döneceğim."
  },
  fr: {
    header: "Contactez-moi",
    subtitle: "Voyons ensemble comment transformer votre entreprise grâce au marketing et à la technologie",
    name: "Votre Nom",
    email: "Votre Email",
    message: "Votre Message",
    send: "Envoyer le Message",
    sent: "Message envoyé !",
    thanks: "Merci pour votre message. Je vous répondrai bientôt."
  },
  it: {
    header: "Contattami",
    subtitle: "Parliamo di come posso aiutarti a trasformare la tua azienda con marketing e tecnologia",
    name: "Il Tuo Nome",
    email: "La Tua Email",
    message: "Il Tuo Messaggio",
    send: "Invia Messaggio",
    sent: "Messaggio Inviato!",
    thanks: "Grazie per il messaggio. Ti ricontatterò presto."
  },
  nl: {
    header: "Neem Contact Op",
    subtitle: "Laten we bespreken hoe ik met strategie en technologie jouw bedrijf kan transformeren",
    name: "Uw Naam",
    email: "Uw E-mail",
    message: "Uw Bericht",
    send: "Bericht Versturen",
    sent: "Bericht Verzonden!",
    thanks: "Bedankt voor je bericht. Ik neem spoedig contact op."
  }
};

export const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language] || translations.en;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t.sent,
      description: t.thanks,
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Secure contact methods
  const handleEmailClick = () => {
    const user = 'hello';
    const domain = 'serhandemirel.com';
    window.location.href = `mailto:${user}@${domain}`;
  };

  const handleTelegramClick = () => {
    window.open('https://t.me/serhandemirel', '_blank', 'noopener,noreferrer');
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/905555555555', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contact" className="py-20 px-4 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t.header.split(" ")[0]} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.header.split(" ").slice(1).join(" ")}</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <button 
              onClick={handleEmailClick}
              className="flex items-center space-x-4 w-full text-left hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-purple-500 p-3 rounded-full">
                <Mail className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-gray-300">Click to send email</p>
              </div>
            </button>
            <button 
              onClick={handleTelegramClick}
              className="flex items-center space-x-4 w-full text-left hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-blue-500 p-3 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Telegram</h3>
                <p className="text-gray-300">Quick messaging</p>
              </div>
            </button>
            <button 
              onClick={handleWhatsAppClick}
              className="flex items-center space-x-4 w-full text-left hover:transform hover:scale-105 transition-all duration-200"
            >
              <div className="bg-green-500 p-3 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">WhatsApp</h3>
                <p className="text-gray-300">Direct messaging</p>
              </div>
            </button>
            <div className="flex items-center space-x-4">
              <div className="bg-yellow-500 p-3 rounded-full">
                <MapPin className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-gray-300">Available Worldwide</p>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                placeholder={t.name}
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder={t.email}
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200"
              />
            </div>
            <div>
              <textarea
                name="message"
                placeholder={t.message}
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-colors duration-200 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2"
            >
              <Send size={20} />
              <span>{t.send}</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
