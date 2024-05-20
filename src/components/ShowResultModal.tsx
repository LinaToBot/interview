import React from "react";

interface ShowResultModalProps {
  result: number | null;
}

export const ShowResultModal: React.FC<ShowResultModalProps> = ({ result }) => {
  return (
    <>
      <div>
        {result !== null ? (
          <p>El resultado es {result}</p>
        ) : (
          <p>Este no es un número válido</p>
        )}
      </div>
    </>
  );
};
