import React from 'react'
import { Helmet } from 'react-helmet'

const Title = ({title,description,keywords}) => {
  return (
    <Helmet>
        <title>
            {title}
        </title>
        <meta name='description' content={description}></meta>
        <meta name='keywords' content={keywords}></meta>
    </Helmet>
  )
}

Title.defaultProps={
    title:"Welcome to Real Estate",
    description: "We sell the best properties in town.",
    keywords: "Land, Real Estate, best value"
}

export default Title