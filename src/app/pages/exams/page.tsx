"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import { Pagination } from '@/components/ui/pagination';
import { DataTable } from '@/components/custom/DataTable/DataTable';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  search: z.string().min(2).max(50).optional(),
});

interface Exam {
  id: number;
  logo: string;
  name: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

function ExamPagination({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) {
  return (
    <Pagination className="flex justify-center items-center">
      <button onClick={() => onPageChange(Math.max(1, currentPage - 1))} disabled={currentPage === 1} className="p-2 mx-2 text-lg">
        Anterior
      </button>
      <button onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))} disabled={currentPage === totalPages} className="p-2 mx-2 text-lg">
        Próximo
      </button>
    </Pagination>
  );
}

export default function ExamList() {
  const examsData: Exam[] = [
    { id: 1, logo: '/exam1.png', name: 'Exame 1', description: 'Descrição do exame 1', createdAt: '2024-01-10', updatedAt: '2024-02-01' },
    { id: 2, logo: '/exam2.png', name: 'Exame 2', description: 'Descrição do exame 2', createdAt: '2024-01-15', updatedAt: '2024-02-05' },
  ];

  const { register, watch } = useForm({ resolver: zodResolver(formSchema) });
  const searchQuery = watch('search', '');
  const [exams] = useState(examsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredExams = exams.filter((exam) =>
    exam.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredExams.length / rowsPerPage);
  const displayedExams = filteredExams.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Lista de Exames</h1>
      <div className="flex justify-between items-center mb-4">
        <Input {...register('search')} placeholder="Buscar por Nome" className="w-1/3 p-2 border rounded-lg" />
      </div>
      <DataTable
        dataList={displayedExams}
        rowKeys={[
          { id: 'logo', name: 'Logo', render: (exam: Exam) => <img src={exam.logo} alt={exam.name} className="h-10" /> },
          { id: 'name', name: 'Nome' },
          { id: 'description', name: 'Descrição' },
          { id: 'createdAt', name: 'Data de Criação' },
          { id: 'updatedAt', name: 'Data de Atualização' },
          { id: 'actions', name: 'Ações', render: (exam: Exam) => (
            <div className="flex gap-2">
              <button className="text-blue-500">Editar</button>
              <button className="text-red-500">Excluir</button>
            </div>
          ) },
        ]}
      />
      <div className="flex justify-between items-center mt-4 p-4 border-t">
        <span className="text-sm text-gray-500">0 of {filteredExams.length} row(s) selected.</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Rows per page</span>
          <select className="border rounded-md p-1 text-sm" value={rowsPerPage} onChange={(e) => setRowsPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
          <div className="flex items-center justify-center gap-4 whitespace-nowrap text-gray-600 text-sm">
            <span>Page {currentPage} of {totalPages}</span>
            <ExamPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          </div>
        </div>
      </div>
    </div>
  );
}
