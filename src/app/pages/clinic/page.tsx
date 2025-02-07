'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Table, TableHead, TableRow, TableHeader, TableBody, TableCell } from '@/components/ui/table';
import { Card } from '@/components/ui/card';
import {
  Pagination,
} from '@/components/ui/pagination';

function ClinicTable({ clinics }) {
  return (
    <Card>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>id</TableHead>
            <TableHead>Nome</TableHead>
            <TableHead>Endereço</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clinics.map((clinic) => (
            <TableRow key={clinic.id}>
              <TableCell>{clinic.id}</TableCell>
              <TableCell>{clinic.name}</TableCell>
              <TableCell>{clinic.address}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}

function ClinicPagination({ currentPage, totalPages, onPageChange, onPageNext, onPagePrevious }) {
  return (
    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={onPageChange}
      onPageNext={onPageNext}
      onPagePrevious={onPagePrevious}
    />
  );
}

export default function ClinicList({ clinicsData }) {
  const { register, watch } = useForm();
  const searchQuery = watch('search', '');
  const [clinics] = useState(clinicsData);

  const filteredClinics = clinics.filter((clinic) =>
    clinic.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-5xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-4">Lista de Clínicas</h1>
      <div className="flex justify-between items-center mb-4">
        <Input {...register('search')} placeholder="Buscar por Nome" className="w-1/3 p-2 border rounded-lg" />
      </div>
      <ClinicTable clinics={filteredClinics} />
      <div className="flex justify-between items-center mt-4 p-4 border-t">
        <span className="text-sm text-gray-500">0 of {filteredClinics.length} row(s) selected.</span>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-500">Rows per page</span>
          <select className="border rounded-md p-1 text-sm">
            <option>10</option>
            <option>30</option>
            <option>50</option>
          </select>
          <span className="text-sm text-gray-500">Page 1 of 4</span>
          <ClinicPagination
            currentPage={1}
            totalPages={4}
            onPageChange={(page) => console.log(page)}
            onPageNext={() => console.log("next")}
            onPagePrevious={() => console.log("previous")}
          />
        </div>
      </div>
    </div>
  );
}
