interface ShowResultModalProps {
  calculationResult: number | null;
}

export const ShowResultModal: React.FC<ShowResultModalProps> = ({
  calculationResult,
}) => {
  return (
    <>
      <div>
        {calculationResult !== null ? (
          <p>El resultado es {calculationResult}</p>
        ) : (
          <p>Este no es un número válido</p>
        )}
      </div>
    </>
  );
};
