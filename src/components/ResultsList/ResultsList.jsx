const ResultsList = ({ hosts }) => {
  return (
    <div>
      {hosts.map((host, i) => (
        <li key={i}>{host.ip}</li>
      ))}
    </div>
  );
};

export default ResultsList;
