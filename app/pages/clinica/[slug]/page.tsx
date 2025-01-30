'use client';
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import TabsForm from "@/components/custom/TabForm/TabForm";
import ClinicForm from "@/components/features/ClinicForm/ClinicForm";

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
    <div className="w-full flex flex-col items-center gap-8 py-5">


      <h1 className="scroll-m-20 text-3xl font-bold tracking-tight">Configurações da Clínica</h1>


      <TabsForm tabs={[
        { name: "Geral", content: ClinicForm()},
        { name: "Usuários", content: ClinicForm() },
        { name: "Configurações", content: ClinicForm()},
      ]} />


     

    </div>
  );
}

