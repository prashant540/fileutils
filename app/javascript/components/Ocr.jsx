import React from "react";
import classes from './Ocr.module.css';
import FileUpload  from './FileUpload';
import { Progress } from 'semantic-ui-react'
const Ocr = props => {
	const acceptedExtension = ".pdf"
	const multiple = false;
	const [percent,setPercent] = React.useState(0);
	const [isInprogress,setIsInProgress] = React.useState(false);
	const [isFileReady,setIsFileReady] = React.useState(false);
  return  <div className={classes.ocrPage}>
            <div>
						  <div className="ui grid">
						    <div className="three wide column"></div>
						    <div className="ten wide column">
						      <div className={classes.ocrContent}>
							      <div>
							        <FileUpload buttonName="Upload file to ocr" acceptedExtension={acceptedExtension} multiple={false} setIsInProgress={setIsInProgress} setIsFileReady={setIsFileReady} action="ocr"/>
							      </div>
							      {
							    	  isInprogress ? 
							    	    (<div className={classes.ocrContentDiv}>
							    		     <div className="ui active inverted dimmer">
	                         <div className="ui text loader">Loading</div>
	                       </div>
	                      </div>)
	                      : (<div className={classes.ocrContentDiv}></div>)
							      }
								    {
								    	isFileReady? 
								    	(
		                    <div className={classes.ocrContentDiv}>
									    		<a href="/download" target="_blank"><i className="download icon"></i>Download</a>
									    	</div>)
								    	: (<div className={classes.ocrContentDiv}></div>)
								    }
								  </div>
						    </div>

						    <div className="three wide column"></div> 
						    </div>
						  </div>
			  	</div>
}
export default Ocr