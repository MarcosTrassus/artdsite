import { Mail, Phone, Contact, MapPin } from "lucide-react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Map from "../components/Map";

// Form validation schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" }),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactPage = () => {
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Formulário de contato enviado:", data);
    // TODO: Implement actual form submission logic
  };

  return (
    <div className="bg-gradient-to-tr from-blue-100 via-purple-100 to-white min-h-screen font-poppins">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-blue-800 mb-6">Entre em Contato</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-blue-600" />
                  <span>contato@trassusdigital.com.br</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-blue-600" />
                  <a href="https://wa.me/5521985694910" className="hover:text-blue-600 transition-colors">
                    (21) 98569-4910
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Contact className="text-blue-600" />
                  <span>Segunda a Sexta: 8:30 - 18h</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-blue-600" />
                  <span>Rua Carolina Machado, 560 - Madureira - RJ</span>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Redes Sociais</h3>
              <div className="space-y-3">
                <a 
                  href="https://wa.me/5521985694910" 
                  className="flex items-center space-x-3 hover:text-blue-600 transition-colors"
                >
                  <span>WhatsApp: (21) 98569-4910</span>
                </a>
                <a 
                  href="https://instagram.com/digitaltrassus" 
                  className="flex items-center space-x-3 hover:text-blue-600 transition-colors"
                >
                  <span>Instagram: @digitaltrassus</span>
                </a>
                <a 
                  href="https://facebook.com/digitaltrassus" 
                  className="flex items-center space-x-3 hover:text-blue-600 transition-colors"
                >
                  <span>Facebook: @digitaltrassus</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Localização</h3>
              <Map className="w-full" />
            </div>
          </div>

          {/* Contact Form */}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Telefone (Opcional)</FormLabel>
                    <FormControl>
                      <Input placeholder="(11) 99999-9999" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensagem</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Escreva sua mensagem" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">
                Enviar Mensagem
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
