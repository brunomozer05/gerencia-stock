import React, { useEffect } from 'react';

const BACKEND_URL = 'https://gerencia-stock-back.onrender.com';

const KeepAlive = () => {
  useEffect(() => {
    const intervalTime = 14 * 60 * 1000; 

    const sendKeepAlive = async () => {
      try {
        await fetch(BACKEND_URL, { 
            method: 'GET',
            mode: 'no-cors'
        });
        console.log(`[KeepAlive] Ping enviado para ${BACKEND_URL}`);
      } catch (error) {
        console.error("[KeepAlive] Erro ao enviar ping:", error.message);
      }
    };

    sendKeepAlive();

    const intervalId = setInterval(sendKeepAlive, intervalTime);

    return () => clearInterval(intervalId);

  }, []);

  return null;
};

export default KeepAlive;