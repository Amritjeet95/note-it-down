```css

$mobile-portrait-min: 'mobile-portrait-min';
$mobile-portrait-max: 'mobile-portrait-max';
$mobile-landscape-min: 'mobile-landscape-min';
$mobile-landscape-max: 'mobile-landscape-max';
$tablet-landscape-min: 'tablet-landscape-min';
$tablet-landscape-max: 'tablet-landscape-max';
$tablet-portrait-min: 'tablet-portrait-min';
$tablet-portrait-max: 'tablet-portrait-max';
$desktop-min: 'desktop-min';
$desktop-max: 'desktop-max';
$desktop-wide-min: 'desktop-wide-min';
$desktop-wide-max: 'desktop-wide-max';
$breakpoints: (
  $mobile-portrait-min: 0,
  $mobile-portrait-max: 479px,

  $mobile-landscape-min: 480px,
  $mobile-landscape-max: 767px,

  $tablet-portrait-min: 768px,
  $tablet-portrait-max: 1119px,

  $tablet-landscape-min: 1120px,
  $tablet-landscape-max: 1439px,

  $desktop-min: 1440px,
  $desktop-max: 1919px,

  $desktop-wide-min: 1920px,
  $desktop-wide-max: 9999px,
);

@mixin mobile {
  @media screen and (max-width: map-get($breakpoints, $mobile-landscape-max)) {
    @content;
  }
}

@mixin mobile-portrait {
  @media screen and (min-width: map-get($breakpoints, $mobile-portrait-min)) and (max-width: map-get($breakpoints, $mobile-portrait-max)) {
    @content;
  }
}

@mixin mobile-landscape {
  @media screen and (min-width: map-get($breakpoints, $mobile-landscape-min)) and (max-width: map-get($breakpoints, $mobile-landscape-max)) {
    @content;
  }
}

@mixin tablet-min {
  @media screen and (min-width: map-get($breakpoints, $tablet-portrait-min)) {
    @content;
  }
}

@mixin tablet-portrait {
  @media screen and (min-width: map-get($breakpoints, $tablet-portrait-min)) and (max-width: map-get($breakpoints, $tablet-portrait-max)) {
    @content;
  }
}

@mixin tablet-landscape {
  @media screen and (min-width: map-get($breakpoints, $tablet-landscape-min)) and (max-width: map-get($breakpoints, $tablet-landscape-max)) {
    @content;
  }
}

@mixin desktop {
  @media screen and (min-width: map-get($breakpoints, $desktop-min)) and (max-width: map-get($breakpoints, $desktop-max)) {
    @content;
  }
}

@mixin desktop-wide {
  @media screen and (min-width: map-get($breakpoints, $desktop-wide-min)) and (max-width: map-get($breakpoints, $desktop-wide-max)) {
    @content;
  }
}

@mixin media-min($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media screen and (min-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @warn "`#{$breakpoint}` is not a valid key in `$breakpoints`.";
  }
}

@mixin media-max($breakpoint) {
  @if map-has-key($breakpoints, $breakpoint) {
    @media screen and (max-width: map-get($breakpoints, $breakpoint)) {
      @content;
    }
  } @else {
    @warn "`#{$breakpoint}` is not a valid key in `$breakpoints`.";
  }
}