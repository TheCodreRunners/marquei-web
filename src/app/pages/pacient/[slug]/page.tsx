'use client';

import TabsForm from "@/components/custom/TabForm/TabForm";
import PacienteAddressForm from "@/components/features/PacientForm/PacientAddressForm";
import PacientForm from "@/components/features/PacientForm/PacientFormTab";



export default function PacientRegister() {


  return (
    <div className="w-full flex flex-col items-center gap-8">
      <h1 className="text-2xl font-bold">Cadastro de Paciente</h1>
      <TabsForm tabs={[
        {
          name: "Dados Gerais", content: PacientForm(), description: "Informações gerais do paciente."
        },
        {
          name: "Endereço", content: PacienteAddressForm(), description: "Endereço do paciente."
        }
      ]} />
    </div>
  );
}
