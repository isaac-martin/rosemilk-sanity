import S from '@sanity/desk-tool/structure-builder'
import { MdSettings, MdAttachMoney, MdDescription, MdShoppingCart, MdMenu, MdLink } from 'react-icons/md'

const hiddenDocTypes = listItem => !['siteSettings', 'product', 'page', 'collection','productVariant','menu','customLink'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Products')
        .icon(MdAttachMoney)
        .schemaType('product')
        .child(S.documentTypeList('product').title('Products')),
      S.listItem()
        .title('Variants')
        .icon(MdAttachMoney)
        .schemaType('productVariant')
        .child(S.documentTypeList('productVariant').title('Variants')),
      S.listItem()
        .title('Collections')
        .icon(MdShoppingCart)
        .schemaType('collection')
        .child(S.documentTypeList('collection').title('Collections')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
      S.listItem()
        .title('Pages')
        .icon(MdDescription)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),
      S.listItem()
        .title('Menus')
        .icon(MdMenu)
        .schemaType('menu')
        .child(S.documentTypeList('menu').title('Menus')),
      S.listItem()
        .title('External Links')
        .icon(MdLink)
        .schemaType('customLink')
        .child(S.documentTypeList('customLink').title('External Links')),

      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])
