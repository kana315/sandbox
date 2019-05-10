import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import { Character } from "./CharaModal";
import TitleCard, { Anime } from "./TitleCard";
import { fetchAnime, fetchCharacters } from "./api";

const App: FC = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    fetchAnime().then((v: Anime[]) => setAnimes(v));
  }, []);

  useEffect(() => {
    fetchCharacters().then((v: Character[]) => setCharacters(v));
  }, []);

  function makeAnimeCard() {
    return animes.map((v: Anime) => {
      return <TitleCard key={v.id} anime={v} bodies={characters} />;
    });
  }

  return (
    <Container>
      <Index>{makeAnimeCard()}</Index>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Index = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 940px;
`;

export default App;
