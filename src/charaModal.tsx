import React, { FC } from "react";
import { Card, Modal } from "semantic-ui-react";

export interface Character {
  id: number;
  titleId: number;
  name: string;
}

const charaModal: FC<{ charalist: Character }> = ({ charalist }) => (
  <>
    <Modal.Header>キャラクター一覧</Modal.Header>
    <Modal.Content>
      <Modal.Description>
        <Card.Content key={charalist.id}>
          <Card.Header>{charalist.name}</Card.Header>
        </Card.Content>
      </Modal.Description>
    </Modal.Content>
  </>
);
export default charaModal;
