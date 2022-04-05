import React from 'react';
import ItemMusica from '../components/ItemMusica';
import Menu from '../components/Menu';

function Musicas() {
    return (
        <>
            <Menu />
            <div class="container">
                <div class="filter">
                    <button class="btn">Adicionar</button>
                </div>
            </div>

            <div class="container">
                <div class="music-boxes">
                    <ItemMusica
                        musica="Junkhead"
                        artista="Alice In Chains"
                        genero="Rock"
                        ano={1992}
                        id="1"
                    />

                    <ItemMusica
                        musica="Like A Stone (Acustic)"
                        artista="Chris Cornell"
                        genero="Rock"
                        ano={2002}
                        id="1"
                    />
                </div>

            </div>
        </>
    );
}

export default Musicas;