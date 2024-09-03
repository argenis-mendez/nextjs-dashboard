import { ArrowPathIcon } from '@heroicons/react/24/outline';
import {
    BanknotesIcon,
    ClockIcon,
    UserGroupIcon,
    InboxIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';
import Image from 'next/image';
import { lusitana } from '@/app/ui/fonts';
import { LatestInvoice } from '@/app/lib/definitions';
import { fetchLatestInvoices } from '@/app/lib/data';
import { PowerIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
};

export default async function CustomersTotals() {
    const customerTotal = [{
        id: 'dhgkrewHYAERJKIYTDFG',
        name: 'Clientes Activos',
        description: 'Clientes activos por servicio',
        amount: 185
    },
    {
        id: 'dhgkrewHYAERJKIYTDFG',
        name: 'Clientes Desincorporados',
        description: 'Clientes desincorporados al mes',
        amount: 10
    },
    {
        id: 'dhgkrewHYAERJKIYTDFG',
        name: 'Clientes Nuevos',
        description: 'Clientes nuevos al mes',
        amount: 25
    }];
    const Icon = iconMap['customers'];
    return (
        <div className="flex flex-col md:col-span-3">
            <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
                {/* NOTE: Uncomment this code in Chapter 7 */}
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="ml-3 text-xl font-medium">
                        Total Clientes
                    </h2>
                    <Link className="flex h-[18px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3"
                        href="/dashboard/customers">
                        <div className="hidden md:block">Ver todos</div>
                    </Link>
                </div>
                {<div className="bg-white px-6">
                    {customerTotal.map((customer, i) => {
                        return (
                            <div
                                key={customer.id}
                                className={clsx(
                                    'flex flex-row items-center justify-between py-4',
                                    {
                                        'border-t': i !== 0,
                                    },
                                )}
                            >
                                <div className="flex items-center">
                                    {/* <Image
                    src={invoice.image_url}
                    alt={`${invoice.name}'s profile picture`}
                    className="mr-4 rounded-full"
                    width={32}
                    height={32}
                  /> */}
                                    <div className="min-w-0">
                                        <p className="truncate text-sm font-semibold md:text-base">
                                            {customer.name}
                                        </p>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {customer.description}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                                >
                                    {customer.amount}
                                </p>
                            </div>
                        );
                    })}
                </div>}
                {/* <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div> */}
            </div>
        </div>
    );
}
