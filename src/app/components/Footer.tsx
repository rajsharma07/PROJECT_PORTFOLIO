export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0B0F19] border-t border-[#38BDF8]/10 py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center">
          <p className="text-[#9CA3AF] font-mono text-xs sm:text-sm">
            © {currentYear} Raj Sharma
          </p>
        </div>
      </div>
    </footer>
  );
}