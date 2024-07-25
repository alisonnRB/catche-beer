export const getStoreStatus = () => {
  const now = new Date();
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();

  // Horário de funcionamento da loja
  const storeHours = { openHour: 9, openMinute: 0, closeHour: 17, closeMinute: 27 };

  const isStoreOpen = (hours) => {
    return (currentHour > hours.openHour || (currentHour === hours.openHour && currentMinute >= hours.openMinute)) &&
           (currentHour < hours.closeHour || (currentHour === hours.closeHour && currentMinute < hours.closeMinute));
  };

  return isStoreOpen(storeHours);
};