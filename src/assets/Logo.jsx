const Logo = () => {
  return (
    <img 
      src="/favicon.ico" 
      alt="logo" 
      style={{ 
        height: '12px',
        width: '50px',
        display: 'block',
        transform: 'scale(0.6)',  // Perkecil 70% dari ukuran asli
        transformOrigin: 'left center'
      }} 
      />
  );
};

export default Logo;
