function Footer() {
  const footerDesc = [
    ['Layanan Kami', ['Transaksi Aset Digital', 'Withdrawal Rupiah', 'Biaya Transaksi', 'Two-Factor Authentication']],
    ['Informasi', ['Partner Afiliasi', 'Registrasi & Verifikasi', 'Syarat & Ketentuan', 'Dokumentasi API', 'CoinMarketCap', 'Blog']],
    ['Perusahaan', ['Tentang Kami', 'Karir', 'Pusat Bantuan']],
  ];

  return (
    <div className="flex space-x-6 justify-around px-4 pb-4 pt-10 md:px-10 lg:px-32 bg-primary text-white h-72 w-full">
      <h1>Terdaftar dan Diawasi</h1>
      {footerDesc.map((item, i) => (
        <div key={i} className="flex flex-col">
          <p className="font-bold text-xl mb-4">{item[0]}</p>
          {item[1].map((list, idx) => (
            <p key={idx}>{list}</p>
          ))}
        </div>
      ))}
      <h1>Rekeningku</h1>
    </div>
  );
}

export default Footer;
