'use client';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
  email: z.string().email({ message: "E-mail inválido." }),
  cnpj: z.string().min(14, { message: "CNPJ deve ter pelo menos 14 caracteres." }),
  address: z.string().min(5, { message: "Endereço deve ter pelo menos 5 caracteres." }),
  phone: z.string().min(10, { message: "Telefone deve ter pelo menos 10 caracteres." }),
  crm: z.string().min(6, { message: "CRM deve ter pelo menos 6 caracteres." }),
});

type ClinicFormData = z.infer<typeof formSchema>;

export default function ClinicSettings() {
  const form = useForm<ClinicFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "Clínica Exemplo",
      email: "contato@clinica.com",
      cnpj: "00.000.000/0000-00",
      address: "Rua Exemplo, 123, Centro - Cidade/Estado",
      phone: "(00) 0000-0000",
      crm: "CRM-123456",
    },
  });

  const onSubmit = (data: ClinicFormData) => {
    console.log("Dados salvos:", data);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">Configurações da Clínica</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 bg-gray-100 p-6 rounded-lg w-full max-w-3xl">
          <h2 className="text-xl font-semibold mb-4">Informações Institucionais</h2>

          {/** Grid de 2 colunas (ajusta automaticamente para 1 coluna no mobile) **/}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700">Nome</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Nome da Clínica" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black" />
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
                  <FormLabel className="font-semibold text-gray-700">E-mail</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="E-mail" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="cnpj"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700">CNPJ</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="CNPJ" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700">Endereço</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Endereço" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black" />
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
                  <FormLabel className="font-semibold text-gray-700">Telefone</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Telefone" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="crm"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-gray-700">CRM</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="CRM" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-black focus:ring-black" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button type="submit" className="bg-black text-white p-3 rounded-full w-full font-semibold hover:bg-gray-800 transition">
            Salvar
          </Button>
        </form>
      </Form>
    </div>
  );
}
