import React from 'react'

const assembleProjectUrl = ({ displayed, options: { previewURL } }) => {
  const { _type } = displayed

  let slug, urlPath
  if (_type === 'product') {
    slug = displayed.shopifyData.slug.current
    urlPath = 'products/'
  }

  if (_type === 'page') {
    slug = displayed.slug.current
    urlPath = ''
  }
  if (_type === 'homePage') {
    slug = '/'
    urlPath = ''
  }

  if (!slug || !previewURL) {
    console.warn('Missing slug or previewURL', { slug, previewURL })
    return ''
  }

  const url = `${previewURL}/${urlPath}${slug}`
  console.log('url', url)
  return url
}

const IframePreview = ({ options, document: { displayed } }) => {
  if (!displayed) {
    return <p>There is no document to preview</p>
  }

  const url = assembleProjectUrl({ displayed, options })

  if (!url) {
    return <p>Having problems constructing the web front-end URL.</p>
  }

  return <iframe style={{ width: `100%`, height: `100%` }} src={url} frameBorder={'0'} />
}

export default IframePreview
