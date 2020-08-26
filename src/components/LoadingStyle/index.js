import React from 'react'
import ReactPlaceholder from 'react-placeholder';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import "react-placeholder/lib/reactPlaceholder.css";

const LoadingStyle = ({ children, loading }) => {
  return (
    <ReactPlaceholder showLoadingAnimation type='text' rows={8} ready={!loading}>
      { children }
    </ReactPlaceholder>
  )
}

export default LoadingStyle