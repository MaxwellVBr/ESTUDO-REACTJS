const Events = () => {
    const handleMyEvent = (e) => {
        console.log ("Ativou Evento");
    };

    const renderSomething = (x) => {
        if (x) {
            return <h1>Retornando isso</h1>
        } else {
            return <h1>Retorne aquilo</h1>
        }
    }

  return (
    <div>
      <div>
        <button onClick={handleMyEvent}>Clique Aqui!</button>
      </div>
      <div>
        <button onClick={() => console.log ("Teste")}>Clique aqui tambem!</button>
      </div>
      {renderSomething(true)}
      {renderSomething(false)}
    </div>
  );
};

export default Events;
