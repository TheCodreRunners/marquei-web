import { useForm } from "react-hook-form";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Textarea } from "@/components/ui/textarea";


export default function PacientForm() {

    const formSchema = z.object({
        name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres." }),
        dataNascimento: z.string().min(10, { message: "Data de nascimento inválida." }),  // Formato dd/mm/yyyy
        sexo: z.enum(["Masculino", "Feminino"], { message: "Selecione o sexo." }),
        cpf: z.string().min(11, { message: "CPF deve ter 11 caracteres." }),
        celular: z.string().min(10, { message: "Número de celular inválido." }),
        email: z.string().email({ message: "E-mail inválido." }),
        observacao: z.string().min(5, { message: "Observacao deve ter pelo menos 5 caracteres." }),
    });

    type PacienteFormData = z.infer<typeof formSchema>;

    const form = useForm<PacienteFormData>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "Nome do Paciente",
            dataNascimento: "01/01/1990",
            sexo: "Masculino",
            cpf: "000.000.000-00",
            celular: "(00) 00000-0000",
            email: "paciente@exemplo.com",
            observacao: "Observacao do paciente.",
        },
    });


    const onSubmit = (data: PacienteFormData) => {
        console.log("Dados salvos:", data);
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4 ">

                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                            <Input placeholder="Nome Completo" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="dataNascimento" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Data de Nascimento</FormLabel>
                        <FormControl>
                            <Input type="date" placeholder="Data de Nascimento" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="sexo" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Sexo</FormLabel>
                        <FormControl>
                            <select {...field} className="w-full p-2 border rounded">
                                <option value="Masculino">Masculino</option>
                                <option value="Feminino">Feminino</option>
                            </select>
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="cpf" render={({ field }) => (
                    <FormItem>
                        <FormLabel>CPF</FormLabel>
                        <FormControl>
                            <Input placeholder="CPF" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="celular" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Celular</FormLabel>
                        <FormControl>
                            <Input placeholder="(00) 00000-0000" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="email" render={({ field }) => (
                    <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                            <Input placeholder="E-mail" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />


                <FormField control={form.control} name="observacao" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Observacao</FormLabel>
                        <FormControl>
                            <Textarea {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

            </form>
        </Form>
    )
}