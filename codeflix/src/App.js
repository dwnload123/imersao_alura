import React from 'react';
import styled from 'styled-components'
import dadosIniciais from './data/dadosIniciais.json'
import BannerMain from './components/BannerMain'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Header from './components/Header'

const HomeContainer = styled.div`
  background-color: var(--black);
`

function App() {
  return (
    <div className="App">
      <HomeContainer>
        <Header />

        <BannerMain
          videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
          url={dadosIniciais.categorias[0].videos[0].url}
          videoDescription={"O que é front-end?"}
        />

        {dadosIniciais.categorias && (
          dadosIniciais.categorias.map(categoria => (
          <Carousel
            category={categoria}
          />
          ))
        )}

        <Footer />
      </HomeContainer>
    </div>
  );
}

export default App;
