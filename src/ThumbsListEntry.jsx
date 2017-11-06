import React from 'react';

import Panel from 'react-bootstrap/lib/Panel';
import Tooltip from 'react-bootstrap/lib/Tooltip';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import {SortableElement} from 'react-sortable-hoc';


const ThumbsListEntry = SortableElement((props) => {

	const tooltip = (
  	<Tooltip id="tooltip"><strong>{props.image.outlet}</strong></Tooltip>
	);

	return(
	  <Panel onClick={(e) => props.chooseNews(props.image)} 
	   className="itemList" 
	   >
	  	<OverlayTrigger placement="bottom" overlay={tooltip}>
		  	<img alt="new thumb"  className="thumbs" src={props.image.image} />
	   	</OverlayTrigger>
	  </Panel>
	)
});
export default  ThumbsListEntry