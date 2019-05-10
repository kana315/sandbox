import React, { FC } from "react";
import { Button, Card, Modal } from "semantic-ui-react";

export interface Character {
  id: number;
  titleId: number;
  name: string;
}

interface Props {
  bodies: Character[];
  id: number;
}

const charaList: FC<Props> = ({ bodies, id }) => {
  const characters = bodies
    .filter(v => v.titleId === id)
    .map((c: Character) => {
      return (
        <Modal.Content key={c.id}>
          <Modal.Description>
            <Card.Content>
              <Card.Header>{c.name}</Card.Header>
            </Card.Content>
          </Modal.Description>
        </Modal.Content>
      );
    });
  return (
    <Modal trigger={<Button>キャラクター一覧</Button>}>
      <Modal.Header>キャラクタ一覧</Modal.Header>
      {characters}
    </Modal>
  );
};

export default charaList;
