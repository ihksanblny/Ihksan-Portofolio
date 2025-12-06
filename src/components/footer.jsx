export default function Footer() {
  return (
    <footer className="bg-dark-bg py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto text-center">
        <p className="text-text-muted text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Ihksan Balany. All rights reserved.
        </p>
      </div>
    </footer>
  );
}