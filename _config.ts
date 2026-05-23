import lume from "lume/mod.ts";

const site = lume({
  src: ".",
  dest: "_site",
});

site.ignore("README.md", "flake.nix", "flake.lock", ".envrc", ".direnv");
site.copy("static", ".");
site.copy("static/.nojekyll", ".nojekyll");
site.copy("styles.css");

export default site;
