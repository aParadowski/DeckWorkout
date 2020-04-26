import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content, Card, CardItem, Body, Text } from 'native-base';

const WorkoutCard = props => {
  const { values, type, exercise = 'Pushups'} = props;
  return (
    <Container>
      <Content>
        <Card>
          <CardItem header>
            <Text>{type}</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                You are going to do {values[0]} {exercise}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    </Container>
  );
};

WorkoutCard.propTypes = {
  values: PropTypes.arrayOf(PropTypes.number),
  type: PropTypes.string,
  exercise: PropTypes.string
};

export default WorkoutCard;
