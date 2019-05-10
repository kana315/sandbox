import React, { FC } from "react";
import { Card, Modal } from "semantic-ui-react";

export interface Character {
  id: number;
  titleId: number;
  name: string;
}

const charaList = (charalists: Character[], id: number): FC => {
  const charalist = charalists.filter(value => value.titleId === id);
  const charalistCards = charalist.map(c => (
    <Card.Content key={c.id}>
      <Card.Header>{c.name}</Card.Header>
    </Card.Content>
  ));
  if (charalistCards.length !== 0) {
    return (
      <>
        <Modal.Header>キャラクター一覧</Modal.Header>
        <Modal.Content>
          <Modal.Description>{charalistCards}</Modal.Description>
        </Modal.Content>
      </>
    );
  }
};
export default charaList;
