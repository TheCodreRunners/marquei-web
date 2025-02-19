'use client'
import TabsForm from "@/components/custom/TabForm/TabForm";
import UserList from "@/components/features/UserForm/UserList";


export default function UserSettings() {
  return (
    <div className="w-full flex flex-col items-center gap-8 py-5">
      <TabsForm
        tabs={[
          {
            name: "Listagem de Usuarios",
            content: <UserList />,
            description: "Lista de usuários"
          },
          {
            name: "Criação de Usuários",
            content: <UserList />,
            description: "Formulário de criação de usuários"
          }
        ]}
      />
    </div>
  );
}  
