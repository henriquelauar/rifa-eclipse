import logo from '../../assets/logo.jpeg';
import premio from '../../assets/premio.jpg'

export default function RifaInfo () {
  return (
    <>
      <h1 className="text-center mb-4">Rifa da Eclipse</h1>

      <div className="d-flex justify-content-center align-items-center mb-4 shadow">
        <img
          src={premio}
          alt="Imagem da Rifa"
          className="img-fluid rounded shadow"
          style={{ height: '250px', width: '300px' }}
        />
      </div>

      <div className="card text-white bg-success text-center mb-3">
        <div className="card-body">
          <h6 className="card-title">Por Apenas</h6>
          <h4 className="card-text fw-bold">R$5,00</h4>
        </div>
      </div>

      <div className="card text-center mb-4">
        <p className="mb-1 mt-2"><strong>Sorteio:</strong> Live no Instagram</p>
        <p className='border-top'><strong>Data:</strong> 04/12/2025</p>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Prêmio</h5>
          <p className="card-text">Caixa de Heineken ou R$300,00!</p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Descrição da Rifa</h5>
          <p className="card-text"> 
            Olá queridos amigos!!!<br/><br/>Como muitos sabem, morar em república não é sempre fácil e estamos precisando da ajuda de vocês para comprar uma máquina de lavar roupa, já que a nossa está despedindo de nós aos poucos…
            <br/><br/>Seu apoio vai ajudar muito a melhorar nossa querida casinha e você ainda vai concorrer a um prêmio super legal! 
            <br/><br/>Cada rifa está custando R$5,00 e o prêmio é uma caixa de Heineken ou um pix no valor de R$300,00. O sorteio acontecerá por meio de uma live no instagram 
            <a href="https://www.instagram.com/republicaeclipse" target='_blank' rel="noopener noreferrer">(@republicaeclipse)</a>  no dia 4/12, ou assim que esgotarem os números da rifa.
            <br/><br/>Contamos com a ajuda de vocês💙💛
          </p>
        </div>
      </div>

      <div className="card mb-4">
        <div className="card-body d-flex align-items-center justify-content-between">
          <img src={logo} alt="logo barraca armada" className="img-fluid shadow" style={{ maxHeight: '100px', maxWidth: '160px' }} />
          <div className="text-center mx-3">
            <p className='fw-bold'>Organizador</p>
            <p>República Eclipse</p>
            <button className='btn btn-success'>
              <a href="https://wa.me/5516992558476" target="_blank" className='text-white' style={{ textDecoration: 'none' }}>
                Whatsapp <i className='bi bi-whatsapp mx-2'></i>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
