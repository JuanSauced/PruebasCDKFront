import { Header, Margin, Sidebar } from "@/components";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full flex">
        <Sidebar/>
        <main className="w-full flex">
            <Margin/>
            <div className="w-full flex flex-col justify-center items-center pb-4 px-4">
                <Header/>
                { children }
            </div>
        </main>
    </div>
  );
}