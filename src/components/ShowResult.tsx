interface ShowResultModalProps {
  calculationResult: number | null;
}

export const ShowResult: React.FC<ShowResultModalProps> = ({
  calculationResult,
}) => {
  if (calculationResult)
    return (
      <>
        <div className="show-result">
          {calculationResult !== null ? (
            <>
              <p>El número alienigena es: </p>
              <p>{calculationResult}</p>
            </>
          ) : (
            <p>Este no es un número válido</p>
          )}
        </div>
      </>
    );

  return null;
};
