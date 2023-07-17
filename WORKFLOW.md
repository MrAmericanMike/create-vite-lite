# How to test locally

First build the new version:

`pnpm run build`

Then link it globally:

`pnpm link --global`

Make sure the link worked:

`pnpm list -g`

In an empty directory run `create-vite-lite` and see if everything works as expected.

---

Update version on package.json - Commit changes

---

Publish to NPM

`npm publish`

---

Unlink the library globally

`pnpm uninstall -g create-vite-lite`

In an empty directory run `pnpm create vite-lite` and see if everything works as expected.
