import React from 'react'
import ReactPlaceholder from 'react-placeholder';
import {MediaBlock, RectShape} from 'react-placeholder/lib/placeholders';
import "react-placeholder/lib/reactPlaceholder.css";

const styles = {
  minWidth: 360, 
  maxWidth: 500, 
  height: 100, 
  marginTop: 40
}

const mainViewPlaceholder = (
  <div className='my-awesome-placeholder'>
    <MediaBlock style={styles} color='lightgray' rows={4} />
    <MediaBlock style={styles} color='lightgray' rows={4} />
    <MediaBlock style={styles} color='lightgray' rows={4} />
    <MediaBlock style={styles} color='lightgray' rows={4} />
    <MediaBlock style={styles} color='lightgray' rows={4} />
    <MediaBlock style={styles} color='lightgray' rows={4} />
    <MediaBlock style={styles} color='lightgray' rows={4} />
    <MediaBlock style={styles} color='lightgray' rows={4} />
  </div>
);

const graphPlaceHolder = (
  <RectShape style={{width: 450, height: 200, marginTop: 20}} color='lightgray' />
)

const LoadingStyle = ({ children, loading, type }) => {
  return (
    <ReactPlaceholder showLoadingAnimation ready={!loading} customPlaceholder={type === 'view' ? mainViewPlaceholder : graphPlaceHolder}>
      { children }
    </ReactPlaceholder>
  )
}

export default LoadingStyle