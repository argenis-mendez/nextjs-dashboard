import CardWrapper from '@/app/ui/dashboard/cards';
import RevenueChart from '@/app/ui/dashboard/revenue-chart';
import CustomersTotals from '@/app/ui/dashboard/customer-totals';
import IncidentsTotals from '@/app/ui/dashboard/incidents-totals';
import OrdersTotals from '@/app/ui/dashboard/orders-totals';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from '@/app/ui/skeletons';

export default async function Page() {
    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
                Panel General
            </h1>
            {/* <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div> */}
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                {/* <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense> */}
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <CustomersTotals />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <IncidentsTotals />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <OrdersTotals />
                </Suspense>
            </div>
        </main>
    );
}