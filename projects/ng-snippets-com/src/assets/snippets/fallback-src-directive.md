# Fallback Src Directive

Use this directive with any `img` element to show a placeholder image in case the link in `src` is broken or cease to exist.
You can provide a fallback image from the assets folder, or you can provide any other URL.

## Usage

<ngs-code-block-with-header>

```html
<img src="http://broken-link-that-doesnt-work" fallbackSrc="./assets/placeholder-avatar.png" alt="" />
<img src="http://broken-link-that-doesnt-work" fallbackSrc="https://via.placeholder.com/200x200" alt="" />
```

</ngs-code-block-with-header>

## Source

<a href="https://github.com/ertunga/ng-snippets/blob/master/projects/ng-snippets/fallback-src/fallback-src.directive.ts" target="_blank">Source</a>
