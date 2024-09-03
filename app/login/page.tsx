import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
import Image from 'next/image';

export default function LoginPage() {
    return (
        <main className="flex items-center justify-center md:h-screen">
            <div className="relative mx-auto flex w-full max-w-[400px] flex-col space-y-2.5 p-4 md:-mt-32">
                <div className="flex items-center justify-center h-20 w-full items-end rounded-lg bg-blue-500 p-3 md:h-36">
                    <div className="w-32 text-white md:w-36">
                        <Image
                            src="/logo-daycohost-para-uso-sobre-fondos-con-color.png"
                            width={500}
                            height={500}
                            className="h-40 w-40"
                            alt="Screenshots of the dashboard project showing desktop version"
                        />
                    </div>
                </div>
                <LoginForm />
            </div>
        </main>
    );
}