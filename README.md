# Container Query Demo
This is a demo using the [Container Query](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_container_queries) to build a fully responsive profile component. It is a Web Component and can be included in any layout by just loading a module, adding in the custom element tag and Container Queries will do the rest.

![profile-example](https://cdn.glitch.global/656be8d9-e8a7-4871-8cb9-38724c172a12/profile-example.png?v=1686284690195)

## Live demo
- https://uskay-cq-demo-1.glitch.me
- Or, simply load `https://uskay-cq-demo-1.glitch.me/uskay-profile.js` and add `<uskay-profile></uskay-profile>` to any layout 🧑‍🦲

## How?
Using `container-type: inline-size` to adjust the elements inside the compoenent.
![inline-size](https://cdn.glitch.global/656be8d9-e8a7-4871-8cb9-38724c172a12/inline-size.png?v=1686286212755)

Also by using [Style Queries](https://developer.chrome.com/blog/style-queries/), auto responding to dark theme when the `--theme` CSS variables are added.
![style-query](https://cdn.glitch.global/656be8d9-e8a7-4871-8cb9-38724c172a12/style-query.png?v=1686286211840)

## Disclaimer
This code base is built for demo purpose only (non production ready code). Please reference as one example of how View Transitions API can be used.

---

License Apache-2.0