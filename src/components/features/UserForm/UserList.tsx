'use client'
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/custom/DataTable/DataTable";

interface IUser {
    id: number;
    name: string;
    email: string;
    cnpj: string;
    address: string;
    phone: string;
    crm: string;
}

export default function UserList() {
    const mockUsers: IUser[] = [
        {
            id: 1,
            name: "Clínica São José",
            email: "saojose@clinica.com",
            cnpj: "12.345.678/0001-90",
            address: "Rua das Flores, 123, Centro - SP",
            phone: "(11) 99999-1111",
            crm: "CRM-123456",
        },
        {
            id: 2,
            name: "Clínica Vida",
            email: "vida@clinica.com",
            cnpj: "98.765.432/0001-10",
            address: "Av. Paulista, 1000, São Paulo - SP",
            phone: "(11) 98888-2222",
            crm: "CRM-654321",
        },
        {
            id: 3,
            name: "Saúde Total",
            email: "saudetotal@clinica.com",
            cnpj: "56.789.012/0001-34",
            address: "Rua das Palmeiras, 45, RJ",
            phone: "(21) 97777-3333",
            crm: "CRM-789012",
        },
        {
            id: 3,
            name: "Ambulare",
            email: "ambulare@clinica.com",
            cnpj: "56.789.012/0001-33",
            address: "Rua das Palmeiras, 45, RJ",
            phone: "(21) 97777-3333",
            crm: "CRM-789012",
        },
    ];

    const [users, setUsers] = useState<IUser[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        setUsers(mockUsers);
    }, []);

    // Filtrando usuários conforme a busca
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-4">
            {/* Barra de Pesquisa */}
            <input
                type="text"
                placeholder="Buscar usuário pelo nome..."
                className="p-2 border rounded w-full mb-4"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Tabela de Usuários */}
            <DataTable
                dataList={filteredUsers}
                rowKeys={[
                    { id: "id", name: "ID" },
                    { id: "name", name: "Nome" },
                    { id: "email", name: "E-mail" },
                    { id: "cnpj", name: "CNPJ" },
                    { id: "address", name: "Endereço" },
                    { id: "phone", name: "Telefone" },
                    { id: "crm", name: "CRM" },
                ]}
            />
        </div>
    );
}
