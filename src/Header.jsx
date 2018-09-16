import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  text-align: center;
  padding-top: 15px;
  border-bottom: 1px solid lightgrey;
  @media only screen and (min-width: 320px)  { 
  	height: 50px;
  }
  @media only screen and (min-width: 768px)  {   
  	height: 70px; 
  	font-size: 2rem;  
  } 
  @media only screen and (min-width: 1024px) { 
  	height: 70px;
  	font-size: 2rem;  
  }
`

const Header = (props) => {
	return (	
      <HeaderContainer>
      Top-Ten-News
      </HeaderContainer>
      
	)
};

export default Header