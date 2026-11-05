# Melact and Meltea: the websites

Two independent static sites, built with Astro and Tailwind CSS and published together on GitHub Pages.

| folder | site | what it is |
|---|---|---|
| [`melact/`](melact) | [jongleb.github.io/melact-meltea-sites/melact/](https://jongleb.github.io/melact-meltea-sites/melact/) | **Melact**: your reason-react code, without React. Two `dune` lines, no virtual DOM, checked against React 18. Desert and React atoms. |
| [`meltea/`](meltea) | [jongleb.github.io/melact-meltea-sites/meltea/](https://jongleb.github.io/melact-meltea-sites/meltea/) | **Meltea**: the Elm architecture for OCaml, compiled like Svelte. Turkish tea house and Iznik tiles. |
| [`index/`](index) | [jongleb.github.io/melact-meltea-sites/](https://jongleb.github.io/melact-meltea-sites/) | a small static page that links to both |

The projects themselves live at [github.com/jongleb/melact](https://github.com/jongleb/melact) and
[github.com/jongleb/meltea](https://github.com/jongleb/meltea). Every number and code sample on the sites is copied from their
READMEs, changelog and benchmark; the figures are the README figures.

## Run a site locally

Node 22 or later.

```console
$ cd melact          # or meltea
$ npm ci
$ npm run dev        # http://localhost:4321 for Melact, http://localhost:4322 for Meltea
$ npm run build      # static output in dist/
```

Locally the sites are served at the root. In production each is built under a sub-path given by `SITE_BASE`:

```console
$ SITE_BASE=/melact-meltea-sites/melact/ npm run build
```

Both live demos (`public/demo/*.js`) are the real compiled counters from the projects' `examples/`.

## Deploy

`.github/workflows/pages.yml` runs on every push to `main`: it builds both sites with their `SITE_BASE`, puts `index/` at the top
and the sites in `melact/` and `meltea/`, and deploys the result to GitHub Pages.
