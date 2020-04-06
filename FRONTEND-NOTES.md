Name: Stoyko Stanchev

Email: stoykostanchev@gmail.com

Time to complete: 5 days

# NOTES

## Project structure

`src/components` contains stateless components that have no local state, accept props and render accordingly

`src/containers` contains headless components whose responsibility is to provide data to other props

`src/store`, `src/actions` contain the redux store and actions of the app

## Architecture

The app is split into purely presentational dummy components and headless components (containers) that provide the state to the presentational components.
Showcased are both using redux connect and using a standard higher order component for the state.
One way DnD is shown
Jokes are loaded and shown in a view of their own
Redux thunk is used to showcase one of the many options to make action creators store agnostic
Scaffolded code for a gRPC-web client can be found in the './proto' folder.

## Alternatives

The approach used (splitting components from their data source) is one of the mainstream approaches out there. Another one having the data source exist in the same file. That is an absolutely viable approach. I personally prefer using classes and decorators if I am doing that. In general I do like splitting the state from the component a bit more - feels more framework agnostic, the component could be a different type (e.g. native web component for example), testing could be performed on the data layer only. It's also a bit easier to showcase components in a design system, e.g. a storybook.

We could prefer to not have a shared asset container used by other containers, and instead power them up from the store directly (e.g. using the connect function)

A good change would be not having any non-selected items ids in the state. As it is a state where an item is both selected AND unselected IS possible under weird conditions. Making states that don't make sense impossible through the design of the state is a good thing to do. That could be done by not maintaining a set of ids for non-selected items, but instead - extract that by removing all the selected items from the list of all.

There are different ways to express the fact that items in the preview are the same as the items in the picker. I had the component render the X button based on a flag initially. Then I had that as a slot where whoever uses the component can insert extras. I've left it as a component, that accepts a wrapper, and adds certain children and properties to that wrapper, though I think any of the other approaches are just as viable. Simple is usually better, so as it is the implementation might be an overkill.

The store could be split into different modules - e.g. having a module for jokes only, and another one for general assets.

## Shortcuts

Tests not written. I felt that the state transformations were relatively simple and the project would not need maintenance, so I considered these not to be useful for the task at hand.

## Extra things that would be nice for a larger

Using typescript or at least [PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)

A component browser (some called it a design system, though that would only be a part of it. An example tool is [storybook](https://storybook.js.org/)). That would also provide access to interseting things, such as per-component accessibility testing and screenshots testing. It would also help split tasks for devs, if multiple people work on the same project. It also helps with thinking about component reusability.

Publishing and maintaining components separately from the main app is a good idea. It is a perfectly reasonable appraoch to do that with a custom setup, although cloud solutions (mostly paid) exist (for example [bit](https://bit.dev/frontend-teams))

Integration with any redux dev tools and sanity checking time travel has been skipped and might need an extra line or two

## Others

I was rather disappointed by the lack of a deeper integration between protobufs, web browsers as clients and redux. It does seem like general framework integration is on the [roadmap](https://github.com/grpc/grpc-web/blob/master/ROADMAP.md). It would make sense for angular to be the first to get more in-depth support though, both proto and angular being google's children. On the other hand, graphql and react being both facebook's, I would not be surprised if other state management tools can be used to integrate graphql and react. An alternative I have listed to do some research is [Apollo](https://www.apollographql.com/docs/).
