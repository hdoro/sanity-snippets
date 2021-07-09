# Sanity.io VS Code snippets

[![Download it at the Visual Studio Marketplace](https://vsmarketplacebadge.apphb.com/version-short/hdoro.sanity-snippets.svg?style=flat-square)](https://marketplace.visualstudio.com/items?itemName=hdoro.sanity-snippets)

A set of useful snippets to speed up your Sanity.io development. I've been using some of these snippets for over 3 years now, and they drastically increase my capacity to deliver fast and precisely, hope you enjoy 😊

![GIF showing a demo of the snippets in action - it creates an article schema in ~40s](https://raw.githubusercontent.com/hdoro/sanity-snippets/main/media/demo-video.gif)

## The snippets available

Every snippets starts with either `sanity(...)` or `groq(...)`, so you know they won't collide with your other snippets. They are enabled for Javascript & Typescript files, reach out if you need to enable them for other extensions.

- **Sanity Schema** (`sanitySchema`): Create a simple schema for the CMS (document, object or image)
- **Sanity Field** (`sanityFld`): Add a field to a sanity object / document
- **Sanity Custom Description** (`sanityDesc`): Add a custom description to a field, document or object
- **Sanity Optional** (`sanityOptional`): Add a cue that a field is optional
- **Sanity Optional Encouraged** (`sanityOptionalEncouraged`): Add a cue that a field is optional, but encourage writing it
- **Sanity Tip description** (`sanityTip`): Add a tip as a field's description
- **Sanity Fieldset** (`sanityFieldset`): Add fieldsets to a sanity object / document
- **Sanity Collapse Field** (`sanityCollapse`): Make a given object field collapsible to help editors scroll less through the document
- **Sanity Required** (`sanityRequired`): Make a given field required
- **Sanity Array Validation (min & max)** (`sanityArrValidation`): Validate an array field based on its length
- **Sanity Basic Array** (`sanityArrFld`): Create a basic array field in Sanity
- **Sanity Reference Field** (`sanityRefFld`): Create a basic reference field in Sanity
- **Sanity Preview with Select** (`sanityPreviewSelect`): Add a basic preview with selection object in Sanity
- **Sanity Select Object** (`sanitySelect`): Add a basic selection object for preview in Sanity
- **Sanity Prepare Function** (`sanityPrepare`): Add a prepare function for preview in Sanity
- **Sanity Preview with Select and Prepare*** (`sanityPreviewSelectPrepare`): Add a preview with selection object and prepare function in Sanity
- **Sanity Object Field** (`sanityObjFld`): Create a basic object field in Sanity
- **Sanity list of options** (`sanityListArray`): Add a list array to string/number/array types to render specific options to users.
🚨 For arrays, this only works if it's an array of strings, in which case it'll render checkboxes
- **GROQ block drafts constraint** (`groqDraftConstraint`): Constraint for groq queries to prevent or limit to drafted documents
- **Component document view** (`sanityViewComponent`): Add a view to a document with a React component
- **Structure document list** (`sanityDocList`): Adds a listItem in your desk structure for custom document list. Perfect for filtering by document values or adding docs from multiple types

Feel free to contribute your snippets!

## This is a work in progress

Your feedback is very much appreciated as long as it's respectful and inclusive :)
