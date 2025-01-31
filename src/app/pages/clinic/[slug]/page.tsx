
import TabsForm from "@/components/custom/TabForm/TabForm";
import ClinicForm from "@/components/features/ClinicForm/ClinicForm";

export default function ClinicSettings() {

  return (
    <div className="w-full flex flex-col items-center gap-8 py-5">
      <TabsForm tabs={[
        {
          name: "Geral", content: ClinicForm(), description: "Configurações gerais da clínica."
        },
        { name: "Configurações", content: <div>Outro componente</div>, description: "Configurações avançadas da clínica." },
      ]} />
    </div>
  );
}

