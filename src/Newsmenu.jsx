import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import DragScroll from 'react-dragscroll';
import styled from 'styled-components';
import ThumbsListEntry from './ThumbsListEntry.jsx'
import {SortableContainer} from 'react-sortable-hoc';


const Menu = styled.div`
    margin: 0 auto;
`


const Newsmenu = SortableContainer((props) => {
	return (
	
      <div>
		<DragScroll >
        <Menu>
        {props.thumbs.map((image, i) => <ThumbsListEntry 
        	chooseNews={props.chooseNews} 
        	index={i}  
        	image={image} 
        	key={`item-${i}`}/> )}
        </Menu>
        </DragScroll>
      </div>
      
	)
});

export default Newsmenu