const formatPrice = (price) => {
    // Example: Format price to local currency (e.g., USD, EUR)
    return new Intl.NumberFormat('et-ET', {
      style: 'currency',
      currency: 'EUR',
    }).format(price);
  };
  
  export default formatPrice;