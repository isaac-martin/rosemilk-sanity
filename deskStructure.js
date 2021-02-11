import S from '@sanity/desk-tool/structure-builder'
import IframePreview from './src/components/preview'

import { MdSettings, MdDescription, MdShoppingBasket } from 'react-icons/md'

const remoteURL = 'https://rosemilk-ceramics-8662181615.gtsb.io/'
const localURL = 'http://localhost:8000'
const previewURL = window.location.hostname === 'localhost' ? localURL : remoteURL

const hiddenDocTypes = listItem =>
  ![
    'siteSettings',
    'product',
    'page',
    'homePage',
    'collection',
    'productVariant',
    'customLink',
    'stockist'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .icon(MdDescription)
        .schemaType('homePage')
        .child(
          S.documentTypeList('homePage')
            .title('Home Page')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('homePage')
                .views([
                  S.view.form().icon(MdDescription),
                  S.view
                    .component(IframePreview)
                    .icon(MdSettings)
                    .title('Web Preview')
                    .options({ previewURL })
                ])
            )
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDescription)
        .schemaType('page')
        .child(
          S.documentTypeList('page')
            .title('Pages')
            .child(documentId =>
              S.document()
                .documentId(documentId)
                .schemaType('page')
                .views([
                  S.view.form().icon(MdDescription),
                  S.view
                    .component(IframePreview)
                    .icon(MdSettings)
                    .title('Web Preview')
                    .options({ previewURL })
                ])
            )
        ),
      S.listItem()
        .title('Stockists')
        .icon(MdShoppingBasket)
        .schemaType('stockist')
        .child(S.documentTypeList('stockist').title('Stockists')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above

      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

// Simple example of web preview

// export default S.defaults()
