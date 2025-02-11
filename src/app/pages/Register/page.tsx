
export default function Cadastro() {
  return (
    <div className="w-full min-h-screen flex justify-center flex-col items-center gap-8 bg-gray-100 dark:bg-gray-900 p-8">
      <main className="flex flex-col gap-8 items-center sm:items-start bg-white dark:bg-gray-800 p-10 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Dados Pessoais</h1>
        <form className="flex flex-col gap-4 text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] w-full">
          <input
            type="text"
            placeholder="Nome Completo"
            className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="RG"
            className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-full"
          />
          <input
            type="text"
            placeholder="CPF"
            className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-full"
          />
          <input
            type="date"
            className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 w-full"
          />
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary text-white gap-2 hover:bg-primary/90 text-sm sm:text-base h-12 px-6 w-full"
            type="submit"
          >
            Cadastrar
          </button>
        </form>
      </main>
    </div>
  );
}
