import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';

export default async function InvoicesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  //const invoices = await fetchFilteredInvoices(query, currentPage);
  const invoices = [
    {
      id: '3692fd11-cd95-43a5-86cb-b51fd4aae10c',
      amount: 44800,
      date: '2023-09-10T04:00:00.000Z',
      status: 'paid',
      name: 'Banco del Caribe, C.A. Banco Universal',
      email: 'michael@bancocaribe.com',
      address: 'Avenida Francisco de Miranda, cruce con calle El Parque y Avenida Mohedano, Edificio Centro Empresarial Galipán, Torre Bancaribe',
      phone: '02128453297',
      rif: 'J-000029490'
    },
    {
      id: '2992fecb-71c7-484e-a40b-3c4e3ac5fe6d',
      amount: 500,
      date: '2023-08-19T04:00:00.000Z',
      status: 'paid',
      name: 'Alfonzo Rivas & Cia, C.A.',
      email: 'serviciocliente@alfonzorivas.com',
      address: ' Av. La Estancia, Edificio General, Piso 8, Urb. Chuao.',
      phone: '02122487935',
      rif: 'J-000315310'
    },
    {
      id: '9bbdc002-df1d-4de1-bfac-99eb4e4c3c12',
      amount: 34577,
      date: '2023-08-05T04:00:00.000Z',
      status: 'pending',
      name: 'A.C. Centro Medico Docente La Trinidad',
      email: 'contacto@centromedico.com',
      address: 'Av. Principal de El Hatillo, Caracas 1083, Distrito Capital',
      phone: '02128134975',
      rif: 'J-000315310'
    },
    {
      id: '4a1438a3-4199-4190-bb9a-334b9970404c',
      amount: 54246,
      date: '2023-07-16T04:00:00.000Z',
      status: 'pending',
      name: 'Manufacturas de Papel, C.A. (Manpa) S.A.C.A.',
      email: 'cliente@manpa.com',
      address: 'Maracay, Aragua, Venezuela.',
      phone: '02437592498',
      rif: 'J-000235309'
    },
    {
      id: '66ba6dad-d6d4-4c94-840a-240583961fe8',
      amount: 666,
      date: '2023-06-27T04:00:00.000Z',
      status: 'pending',
      name: 'Seguros Venezuela C.A.',
      email: 'servicio.cliente@segurosvenezuela.com',
      address: 'Av. Francisco de Miranda, Edf. Seguros Venezuela, Piso 8 y 9. Urb. Campo Alegre. Caracas',
      phone: '02128523497',
      rif: 'J-000340366'
    },
    {
      id: 'f9ff6e41-8a60-432e-bccf-cf557605b684',
      amount: 1250,
      date: '2023-06-17T04:00:00.000Z',
      status: 'paid',
      name: 'Ceramica Carabobo S.A.C.A.',
      email: 'contacto@ceramicas.com',
      address: 'Troncal11, Valencia 2001, Carabobo',
      phone: '02415796425',
      rif: 'J-000063435'
    }
  ];
  return (
    <div className="mt-6 flow-root">
      <div className="inline-block min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <div className="md:hidden">
            {invoices?.map((invoice) => (
              <div
                key={invoice.id}
                className="mb-2 w-full rounded-md bg-white p-4"
              >
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{invoice.name}</p>
                    </div>
                    <div className="mb-2 flex items-center">
                      {/* <Image
                        src={invoice.image_url}
                        className="mr-2 rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{invoice.address}</p>
                    </div>
                    <p className="text-sm text-gray-500">{invoice.phone}</p>
                    <p className="text-sm text-gray-500">{invoice.email}</p>
                  </div>
                  <InvoiceStatus status={invoice.status} />
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <p className="text-xl font-medium">
                      {formatCurrency(invoice.amount)}
                    </p>
                    <p>{formatDateToLocal(invoice.date)}</p>
                  </div>
                  <div className="flex justify-end gap-2">
                    <UpdateInvoice id={invoice.id} />
                    {/* <DeleteInvoice id={invoice.id} /> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                  Cliente
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Contacto
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Facturación
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Fecha
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  Estatus
                </th>
                <th scope="col" className="relative py-3 pl-6 pr-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {invoices?.map((invoice) => (
                <tr
                  key={invoice.id}
                  className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                >
                  <td className="py-3 pl-6 pr-3">
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{invoice.name}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      {/* <Image
                        src={invoice.image_url}
                        className="rounded-full"
                        width={28}
                        height={28}
                        alt={`${invoice.name}'s profile picture`}
                      /> */}
                      <p>{invoice.address}</p>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{invoice.phone}</p>
                    <p>{invoice.email}</p>
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <p>{invoice.rif}</p>
                    {formatCurrency(invoice.amount)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    {formatDateToLocal(invoice.date)}
                  </td>
                  <td className="whitespace-nowrap px-3 py-3">
                    <InvoiceStatus status={invoice.status} />
                  </td>
                  <td className="whitespace-nowrap py-3 pl-6 pr-3">
                    <div className="flex justify-end gap-3">
                      <UpdateInvoice id={invoice.id} />
                      {/* <DeleteInvoice id={invoice.id} /> */}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
