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
import { Card } from "@/components/ui/card";

const formSchema = z.object({
  patientName: z.string().min(2, { message: "Nome do paciente deve ter pelo menos 2 caracteres." }),
  examType: z.string().min(3, { message: "Tipo de exame deve ter pelo menos 3 caracteres." }),
  date: z.string().min(10, { message: "Data deve estar no formato correto." }),
  result: z.string().min(5, { message: "Resultado deve ter pelo menos 5 caracteres." }),
});

type ExamFormData = z.infer<typeof formSchema>;

export default function ExamRegistration() {
  const form = useForm<ExamFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName: "",
      examType: "",
      date: "",
      result: "",
    },
  });

  const onSubmit = (data: ExamFormData) => {
    console.log("Dados do exame salvos:", data);
  };

  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">Cadastro de Exames</h1>
      <Card className="p-6 rounded-lg w-full max-w-3xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="patientName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome do Paciente</FormLabel>
                  <FormControl>
                    <Input placeholder="Nome do Paciente" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="examType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tipo de Exame</FormLabel>
                  <FormControl>
                    <Input placeholder="Tipo de Exame" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Data do Exame</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="result"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resultado</FormLabel>
                  <FormControl>
                    <Input placeholder="Resultado" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="bg-primary text-white p-3 rounded-full w-full font-semibold hover:bg-primary-foreground transition hover:text-paragraph-primary">
              Salvar Exame
            </Button>
          </form>
        </Form>
      </Card>
    </div>
  );
}
