'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import {
  Pagination,
} from '@/components/ui/pagination';
import { DataTable } from '@/components/custom/DataTable/DataTable';

interface Clinic {
  id: number;
  name: string;
  address: string;
  cnpj: string;
  phone: string;
  email: string;
}

function ClinicPagination({ currentPage, totalPages, onPageChange }: { currentPage: number; totalPages: number; onPageChange: (page: number) => void }) {
  return (
    <Pagination style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        style={{
          padding: '10px 15px',
          margin: '0 5px',
          fontSize: '16px',
          cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
        }}
      >
        Anterior
      </button>
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        style={{
          padding: '10px 15px',
          margin: '0 5px',
          fontSize: '16px',
          cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
        }}
      >
        Próximo
      </button>
    </Pagination>
  );
}



export default function ClinicList() {
  const clinicsData: Clinic[] = [
      {
        id: 1,
        name: 'Clinica 1',
        address: 'Rua 1',
        cnpj: '123456789',
        phone: '123456789',
        email: 'teste@gmail.com',
      },
      {
        id: 2,
        name: 'Clinica 2',
        address: 'Rua 2',
        cnpj: '123456789',
        phone: '123456789',
        email: 'teste@gmail.com',
      },
      {
        id: 3,
        name: 'Clinica 3',
        address: 'Rua 3',
        cnpj: '123456789',
        phone: '123456789',
        email: 'teste@gmail.com',
      },
      {
        id: 4,
        name: 'Clinica 4',
        address: 'Rua 4',
        cnpj: '123456789',
        phone: '123456789',
        email: 'teste@gmail.com',
      }
  ];
    
  const { register, watch } = useForm();
  const searchQuery = watch('search', '');
  const [clinics] = useState(clinicsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const filteredClinics = clinics.filter((clinic) =>
    clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredClinics.length / rowsPerPage);
  const displayedClinics = filteredClinics.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage);

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Lista de Clínicas</h1>
      <div className="flex justify-between items-center mb-4">
        <Input {...register('search')} placeholder="Buscar por Nome" className="w-1/3 p-2 border rounded-lg" />
      </div>
      <DataTable
        dataList={ displayedClinics }
        rowKeys={[
          {id: 'id', name: 'ID' },
          { id: 'name', name: 'Nome' },
          { id: 'cnpj', name: 'CNPJ' },
          { id: 'address', name: 'Endereço' },
          { id: 'phone', name: 'Telefone' },
          { id: 'email', name: 'Email' },
        ]} />
      <div className="flex justify-between items-center mt-4 p-4 border-t">
        <span className="text-sm text-gray-500">0 of {filteredClinics.length} row(s) selected.</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Rows per page</span>
          
          <select 
            className="border rounded-md p-1 text-sm" 
            value={rowsPerPage} 
            onChange={(e) => setRowsPerPage(Number(e.target.value))}>
            <option value={10}>10</option>
            <option value={30}>30</option>
            <option value={50}>50</option>
          </select>
          <div className="flex items-center justify-center gap-4 whitespace-nowrap text-gray-600 text-sm">
  <span>Page {currentPage} of {totalPages}</span>
  <ClinicPagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
</div>


        </div>
      </div>
    </div>
  );
}
