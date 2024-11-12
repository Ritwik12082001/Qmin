import S from '@sanity/desk-tool/structure-builder';

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Header')
        .child(
          S.list()
            .title('Brands')
            .items([
              S.listItem()
                .title('Qmin')
                .child(S.documentTypeList('header').title('Qmin Header')),
            ])
        ),
      // Other items can go here as needed
    ]);
