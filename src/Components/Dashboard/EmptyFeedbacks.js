import React from 'react';
import { useHistory } from 'react-router';
import { ReactComponent as DetectiveIcon } from './detective.svg';
import { EmptyFeedbacksWrapper, NormalButton } from './StyleDashBoard';
import { Title, Text } from './StyleFeedback';
const EmptyFeedbacks = () => {
  const history = useHistory();
  return (
    <EmptyFeedbacksWrapper>
      <div className="empty__inner">
        <div className="empty__icon">
          <DetectiveIcon />
        </div>
        <div className="empty__description">
          <Title variant="h6" gutterBottom>
            There are no any feedbacks here yet!
          </Title>
          <Text gutterBottom>
            Got a suggestion? Found a bug that needs to be squashed? We love
            hearing about new ideas to improve our app.
          </Text>
        </div>
        <div className="empty__button">
          <NormalButton
            color="secondary"
            variant="contained"
            onClick={() => history.push('/add')}
          >
            + Add Feedback
          </NormalButton>
        </div>
      </div>
    </EmptyFeedbacksWrapper>
  );
};

export default EmptyFeedbacks;
