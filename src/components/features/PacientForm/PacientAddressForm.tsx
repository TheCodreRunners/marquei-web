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
import { useCallback, useEffect } from "react";

const formSchema = z.object({
    cep: z.string().min(8, { message: "CEP deve ter 8 caracteres." }),
    endereco: z.string().min(3, { message: "Endereço inválido." }),
    numero: z.string().min(1, { message: "Número obrigatório." }),
    complemento: z.string().optional(),
    estado: z.string().min(2, { message: "Estado obrigatório." }),
    cidade: z.string().min(2, { message: "Cidade obrigatória." }),
    bairro: z.string().min(2, { message: "Bairro obrigatório." }),
});

export default function PacienteAddressForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            cep: "",
            endereco: "",
            numero: "",
            complemento: "",
            estado: "",
            cidade: "",
            bairro: "",
        },
    });

    const buscarEnderecoPorCEP = useCallback(async (cep: string) => {
        if (cep.length === 8) {
            try {
                const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
                const data = await response.json();
                if (!data.erro) {
                    form.setValue("endereco", data.logradouro);
                    form.setValue("bairro", data.bairro);
                    form.setValue("cidade", data.localidade);
                    form.setValue("estado", data.uf);
                }
            } catch (error) {
                console.error("Erro ao buscar endereço:", error);
            }
        }
    }, [form]);

    type EnderecoFormData = z.infer<typeof formSchema>;
    useEffect(() => {
        const cep = form.watch("cep");
        if (cep) buscarEnderecoPorCEP(cep);
    }, [buscarEnderecoPorCEP, form]);

    const onSubmit = (data: EnderecoFormData) => {
        console.log("Dados salvos:", data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                <FormField control={form.control} name="cep" render={({ field }) => (
                    <FormItem>
                        <FormLabel>CEP</FormLabel>
                        <FormControl>
                            <Input placeholder="Digite o CEP" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="endereco" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Endereço</FormLabel>
                        <FormControl>
                            <Input placeholder="Rua, Avenida, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="numero" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Número</FormLabel>
                        <FormControl>
                            <Input placeholder="Número" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="complemento" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Complemento</FormLabel>
                        <FormControl>
                            <Input placeholder="Bloco, apartamento, etc." {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="estado" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Estado</FormLabel>
                        <FormControl>
                            <Input placeholder="Estado" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="cidade" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Cidade</FormLabel>
                        <FormControl>
                            <Input placeholder="Cidade" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />

                <FormField control={form.control} name="bairro" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Bairro</FormLabel>
                        <FormControl>
                            <Input placeholder="Bairro" {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )} />


            </form>
        </Form>
    );
}
