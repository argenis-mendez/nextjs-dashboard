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

const iconMap = {
    collected: BanknotesIcon,
    customers: UserGroupIcon,
    pending: ClockIcon,
    invoices: InboxIcon,
};

export default async function OrdersTotals() {
    const ordersTotal = [{
        id: 'dhgkrewHYAERJKIYTDFG',
        name: 'Pedidos Abiertos',
        description: 'Pedidos Abiertos en el mes',
        amount: 18
    },
    {
        id: 'dhgkrewHYAERJKIYTDFG',
        name: 'Pedidos Cerrados',
        description: 'Pedidos Cerrados en el mes',
        amount: 40
    }];
    const Icon = iconMap['customers'];
    return (
        <div className="flex flex-col md:col-span-3">
            <div className="flex grow flex-col rounded-xl bg-gray-50 p-4">
                {/* NOTE: Uncomment this code in Chapter 7 */}
                <div className="mb-4 flex items-center justify-between">
                    <h2 className="ml-3 text-xl font-medium">
                        Total Pedidos
                    </h2>
                    <button className="flex h-[18px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        {/* <PowerIcon className="w-6" /> */}
                        <div className="hidden md:block">Ver todos</div>
                    </button>
                </div>
                {<div className="bg-white px-6">
                    {ordersTotal.map((order, i) => {
                        return (
                            <div
                                key={order.id}
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
                                        <p className="text-sm font-semibold md:text-base">
                                            {order.name}
                                        </p>
                                        <p className="hidden text-sm text-gray-500 sm:block">
                                            {order.description}
                                        </p>
                                    </div>
                                </div>
                                <p
                                    className={`${lusitana.className} text-sm font-medium md:text-base`}
                                >
                                    {order.amount}
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
