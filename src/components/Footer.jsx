import { useState, useEffect } from 'react';
import { FaEye } from 'react-icons/fa';

const VisitorCounter = () => {
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        // Menggunakan API counter gratis (counterapi.dev)
        // Namespace: ihksanblny-portfolio, Key: visits
        const response = await fetch('https://api.counterapi.dev/v1/ihksanblny-portfolio/visits/up');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error("Error fetching visit count:", error);
        setCount(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCount();
  }, []);

  if (loading) return <div className="text-xs text-text-muted mt-4 animate-pulse">Loading stats...</div>;
  if (count === null) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-4 text-text-muted text-xs tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity duration-300">
      <FaEye className="text-primary" />
      <span>
        <span className="text-white font-semibold mx-1">{count.toLocaleString()}</span>
        Total Visits
      </span>
    </div>
  );
};

export default function Footer() {
  return (
    <footer className="bg-dark-bg py-12 border-t border-white/5 relative z-10">
      <div className="container mx-auto text-center">
        <p className="text-text-muted text-sm font-light tracking-wide">
          &copy; {new Date().getFullYear()} Ihksan Balany. All rights reserved.
        </p>
        <VisitorCounter />
      </div>
    </footer>
  );
}