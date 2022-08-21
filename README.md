# rust wasm monorepo demo

This uses Rust and WASM in a monorepo, and renders some results in a instance
of create-react-app

## Usage

```
git clone https://github.com/cmdcolin/rust_react_monorepo_template
cd rust_react_monorepo_template
yarn
cd hello-wasm
yarn build
cd ../app
yarn start
```

The wasm code in hello-wasm isn't automatically built when running the yarn
start in the app, so re-run the build in hello-wasm if you make changes to it

## History

I first created an example of rust+wasm+react when developing a fractal viewer: https://github.com/cmdcolin/logistic_chaos_map and it has some development notes on the stumbling blocks I faced https://github.com/cmdcolin/logistic_chaos_map/blob/master/NOTES.md

## Blogpost

This blogpost here covers some of the thoughts/steps behind creating this repo
https://cmdcolin.github.io/posts/2022-08-22-rustwasm
