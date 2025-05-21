import ThemeToggle from "@/libs/ThemeToggle";

export default function Page() {
    return (
        <><h2>Deker</h2>

         <div className="container py-5">
      <h1 className="mb-4">Next.js Theme Toggle (App Router)</h1>
      <p>This setup uses CSS variables, Bootstrap, and persistent theme toggle.</p>
      <ThemeToggle />
    </div>
        
        
        
        </>
    );
}