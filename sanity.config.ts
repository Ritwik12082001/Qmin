import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { deskTool } from 'sanity/desk';


export default defineConfig({
  name: 'default',
  title: 'qmin',

  projectId: 'c8czusi2',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S) =>
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
          ]),
    }),
    visionTool(),
   
  ],
  structure: (S) =>
    S.list()
      .title('Page Section')
      .items([
        S.listItem()
              .title('Pages')
              .child(
                S.list()
                  .title('Brands')
                  .items([
                    S.listItem()
                      .title('Qmin')
                      .child(S.documentTypeList('header').title('Qmin Header')),
                  ])
              ),
      ]),

  schema: {
    types: schemaTypes,
  },
})

