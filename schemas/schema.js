// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// document schemas
import product from './documents/product'
import page from './documents/page'
import productVariant from './documents/variant'
import collection from './documents/collection'
import siteSettings from './documents/siteSettings'
import menu from './documents/menu'
import customLink from './documents/customLink'
import stockist from './documents/stockist'



// Object types
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import socialSharing from './objects/socialSharing'
import mainImage from './objects/mainImage'
import imageGallery from './objects/imageGallery'
import templateSelector from './objects/templateSelector'
import shopifyData from './objects/shopifyData'





// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'store',
  // Then proceed to concatenate our our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    product,
    page,
    mainImage,
    bodyPortableText,
    excerptPortableText,
    productVariant,
    collection,
    socialSharing,
    imageGallery,
    menu,
    customLink,
    stockist,
    templateSelector,
    shopifyData

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
  ])
})
