import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <><div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      {/* <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-[44px]">Acme</p> */}
      <Image
        src="/logo-daycohost-para-uso-sobre-fondos-con-color.png"
        width={500}
        height={500}
        className="h-36 w-36"
        alt="Screenshots of the dashboard project showing desktop version"
      />
    </div><div className="hidden md:block items-center">Juan Martinez</div></>
  );
}
