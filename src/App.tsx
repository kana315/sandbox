import React, { FC, useState, useEffect } from "react";
import { Button, Card, Modal } from "semantic-ui-react";
import styled from "styled-components";
import axios, { AxiosResponse } from "axios";
import CharaList, { Character } from "./Charalist";

interface Title {
  id: number;
  title: string;
  onAirDate: string;
}

const App: FC = () => {
  const [titles, setTitles] = useState<Title[]>([]);
  const [charalists, setCharalists] = useState<Character[]>([]);

  async function getTitle() {
    try {
      const response: AxiosResponse<Array<Title>> = await axios.get(
        "http://localhost:4567/titles"
      );
      // console.log(response.data); // debug
      setTitles(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getCharalist() {
    try {
      const response: AxiosResponse<Array<Character>> = await axios.get(
        "http://localhost:4567/charalists"
      );
      // console.log(response.data); //debug
      setCharalists(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getTitle();
  }, []);

  useEffect(() => {
    getCharalist();
  }, []);

  function makeTitleLists() {
    return titles.map((v: Title) => (
      <StyledCard key={v.id}>
        <TitleArea>
          <Card.Header>{v.title}</Card.Header>
          <Meta>{v.onAirDate}</Meta>
        </TitleArea>
        <Card.Content>
          <Modal trigger={<Button>キャラクター一覧</Button>}>
            <CharaList charalists={charalists} id={v.id} />
          </Modal>
        </Card.Content>
      </StyledCard>
    ));
  }

  return (
    <Container>
      <Index>{makeTitleLists()}</Index>
    </Container>
  );
};

const StyledCard = styled(Card)`
  margin: 10px !important;
`;

const TitleArea = styled(Card.Content)`
  height: 72px;
  position: relative;
`;

const Meta = styled(Card.Meta)`
  position: absolute;
  bottom: 0;
`;

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
