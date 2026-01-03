import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <div className="relative h-8 w-32">
              <Image
                src="/logo.png"
                alt="HassleFreeCare Logo"
                fill
                className="object-contain object-left"
              />
            </div>
            <p className="text-sm text-gray-500 max-w-xs text-center md:text-left">
              Operational transport infrastructure for the UK home care sector.
            </p>
          </div>

          <div className="flex gap-8">
            <Link href="#" className="text-sm text-gray-500 hover:text-brand-blue transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-gray-500 hover:text-brand-blue transition-colors font-medium">
              Terms of Service
            </Link>
          </div>

          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} HassleFreeCare. All rights reserved.
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-50 text-center">
          <p className="text-[10px] text-gray-300 uppercase tracking-widest font-bold">
            A Driver-Led Transport Infrastructure Partner
          </p>
        </div>
      </div>
    </footer>
  );
}
