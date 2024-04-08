import { MobileHeader } from "@/components/mobileheader";
import { Sidebar } from "@/components/sidebar";

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <>
        <MobileHeader />
        <Sidebar className="hidden lg:flex" />
        <main className="h-full lg:pl-[256px] pt-[50px] lg:pt-0">
            <div className="h-full bg-red-500">
                {children}
            </div>
        </main>
      </>
    );
  };
  