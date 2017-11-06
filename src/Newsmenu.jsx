import React from 'react';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';
import DragScroll from 'react-dragscroll';
import ThumbsListEntry from './ThumbsListEntry.jsx'
import {SortableContainer} from 'react-sortable-hoc';




const Newsmenu = SortableContainer((props) => {
	return (
	
      <div className="card">
		<DragScroll >
        <div id="menu">
        {props.thumbs.map((image, i) => <ThumbsListEntry 
        	chooseNews={props.chooseNews} 
        	index={i}  
        	image={image} 
        	key={`item-${i}`}/> )}
        </div>
        </DragScroll>
      </div>
      
	)
});

export default Newsmenu