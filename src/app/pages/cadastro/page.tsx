'use client'; // Adicione esta linha para usar hooks do React

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Cadastro() {
  return (
    <div className="w-full min-h-screen flex justify-center flex-col items-center gap-8 p-4 md:p-8">
      {/* Título */}
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
        Dados Pessoais
      </h1>

      {/* TabsForm com abas */}
      <Card className="w-full max-w-2xl p-6">
        <Tabs defaultValue="cadastro" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="cadastro">Cadastro</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>

          {/* Aba de Cadastro */}
          <TabsContent value="cadastro" className="mt-6">
            <form className="flex flex-col gap-4 w-full">
              <Input type="text" placeholder="Nome Completo" />
              <Input type="text" placeholder="RG" />
              <Input type="text" placeholder="CPF" />
              <Input type="date" />
              <Button type="submit" className="w-full mt-4">
                Cadastrar
              </Button>
            </form>
          </TabsContent>

          {/* Aba de Login */}
          <TabsContent value="login" className="mt-6">
            <div className="flex flex-col gap-4 w-full">
              <Input type="text" placeholder="E-mail" />
              <Input type="password" placeholder="Senha" />
            </div>
          </TabsContent>
        </Tabs>
      </Card>
    </div>
  );
}