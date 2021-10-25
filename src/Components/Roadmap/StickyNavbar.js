import React from 'react';
import { FixedHeader, NormalButton, ContentWrapper } from './StyleRoadmap';

const pageArr = ['Planned', 'In-Progress', 'Live'];
const StickyNavbar = ({ onRoadmapChange, currentPage }) => {
  const onClickHandler = (e) => {
    const newPage = parseInt(e.currentTarget.dataset.page);

    if (newPage > currentPage) onRoadmapChange(-1, newPage);
    if (newPage < currentPage) onRoadmapChange(1, newPage);
  };

  return (
    <FixedHeader>
      <ContentWrapper move={currentPage * (100 / 3)} currentpage={currentPage}>
        {pageArr.map((page, index) => (
          <NormalButton
            key={page}
            onClick={onClickHandler}
            disableRipple
            fullWidth
            $show={true && currentPage === index}
            data-page={index}
          >
            {page}
          </NormalButton>
        ))}
      </ContentWrapper>
    </FixedHeader>
  );
};

export default StickyNavbar;
