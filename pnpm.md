# PNPM Command Reference

>A quick reference for useful `pnpm` commands with descriptions. Viewable in any web browser.

---

## 1. List Globally Installed Packages

```sh
pnpm list --depth=0 --global
```

**Description:** Lists all globally installed packages with no nested dependencies.

---

## 2. Remove a Global Package

```sh
pnpm remove --global @vds/components voyager-design-system
```

**Description:** Removes the `@vds/components voyager-design-system` package from global installations.

---

## 3. Run Tests in Watch Mode

```sh
pnpm test --watch --silent=false TopNav.test.tsx
```

**Description:** Runs the `TopNav.test.tsx` test file in watch mode, showing all output (not silent).

---

pnpm outdated