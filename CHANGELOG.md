# Change Log

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2021-07-09
- Changed `sanitySchema` to not include a field by default. Instead, users can use `sanityFld`, `sanityArrFld` and other to create their own fields when they're done with the basic properties of a new schema.
- Added a select box to `sanityFld`'s type property to make it easier and faster to build with default types, [as suggested by Surjith](https://github.com/hdoro/sanity-snippets/issues/7).

**Why v1?** Well, people have been using this plugin for a while and it's battle-tested enough. Also, this version introduces the first "breaking" change, so there we go!

## [0.2.0] - 2021-06-24
- New `sanityListArray` snippet for adding a list of values to a string/number/array field
- Changed `sanitySchema` default type to `document` [as proposed by Simeon Griggs](https://github.com/hdoro/sanity-snippets/pull/6)
- Automatic casing/formatting of name/title pairs [as proposed by Alejandro Rojas](https://github.com/hdoro/sanity-snippets/issues/4)

## [0.1.5] - 2020-11-17

### Added
- New snippets by [Arjen](https://github.com/Aratramba)
 - `sanityPreviewSelect`
 - `sanityPreviewSelectPrepare`
 - `sanitySelect`
 - `sanityPrepare`;
 - and  `sanityObjFld` 

## [0.1.4] - 2020-10-23

### Fixed
- Typo in the `sanityCollapse` snippet - [Jayne Mast](https://github.com/jayne-mast)

## [0.1.0] - 2020-10-23

- Initial release with a small set of snippets 🎉