import React, { FC } from "react";
import { Card } from "semantic-ui-react";
import styled from "styled-components";
import CharaModal, { Character } from "./CharaModal";

export interface Anime {
  id: number;
  title: string;
  onAirDate: string;
}

interface Props {
  anime: Anime;
  bodies: Character[];
}

const titleCard: FC<Props> = ({ anime, bodies }) => {
  return (
    <StyledCard>
      <TitleArea>
        <Card.Header>{anime.title}</Card.Header>
        <Meta>{anime.onAirDate}</Meta>
        <CharaModal bodies={bodies} id={anime.id} />
      </TitleArea>
      <Card.Content />
    </StyledCard>
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

export default titleCard;
