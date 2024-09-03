import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import CustomersTotals from '@/app/ui/dashboard/customer-totals';
import IncidentsTotals from '@/app/ui/dashboard/incidents-totals';
import OrdersTotals from '@/app/ui/dashboard/orders-totals';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';
import Search from '@/app/ui/search';
import { CreateInvoice } from '@/app/ui/invoices/buttons';

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Panel General
            </h1>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Ingrese documento identidad del cliente a buscar..." />
                {/* <CreateInvoice /> */}
            </div>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-9">
                {/* <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense> */}
                {/* <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <CustomersTotals />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <IncidentsTotals />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <OrdersTotals />
                </Suspense> */}
            </div>
        </main>
    );
}