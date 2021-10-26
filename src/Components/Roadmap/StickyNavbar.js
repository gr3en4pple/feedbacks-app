import React from 'react';
import { FixedHeader, NormalButton, ContentWrapper } from './StyleRoadmap';


const StickyNavbar = ({ onRoadmapChange, currentPage,content }) => {
  const onClickHandler = (e) => {
    const newPage = parseInt(e.currentTarget.dataset.page);
    if (newPage > currentPage) onRoadmapChange(-1, newPage);
    if (newPage < currentPage) onRoadmapChange(1, newPage);
  };
  
  return (
    <FixedHeader>
      <ContentWrapper move={currentPage * (100 / 3)} currentpage={currentPage}>
        {content.map((page, index) => (
          <NormalButton
            key={page.title}
            onClick={onClickHandler}
            disableRipple
            fullWidth
            $show={true && currentPage === index}
            data-page={index}
            
          >
            {page.title} ({page.fbList.length})
          </NormalButton>
        ))}
      </ContentWrapper>
    </FixedHeader>
  );
};

export default StickyNavbar;
