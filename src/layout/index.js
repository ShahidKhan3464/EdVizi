import React from 'react';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex">
      <Sidebar />
      <main className="flex-1 bg-[#FCFCFC]">
        <Header />
        <section className="m-6">{children}</section>
      </main>
    </div>
  );
}
