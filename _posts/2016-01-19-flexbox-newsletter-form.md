---
layout: post
title: Building a Newsletter Form Using Flexbox and Javascript
categories: articles
custom_type: post
---

After creating a form to subscribe to *The Bold Report* newsletter, I wanted to show you how I did it. 

It's easy to take the little things you do everyday for granted. I do a lot of small dev tasks every week, that I feel like everyone knows how to do. In fact, they probably do it better.

But when I started to think about something I could write about this week, working on this form came to mind. It turned out to be a great mix of things that someone might want to learn. We'll modify some markup, style it with SCSS and flexbox, and submit the form with javascript.

## Marking Up the Form
I use Campaign Monitor for all my newsletter needs. They have a great product, and have always been incredibly nice to me. So let’s start with the markup they give you for your list.

```html
<form action="http://anythingoes.createsend.com/t/t/s/bhrjhl/" method="post" id="subForm">
  <p>
    <label for="fieldName">Name</label><br />
    <input id="fieldName" name="cm-name" type="text" />
  </p>
  <p>
    <label for="fieldEmail">Email</label><br />
    <input id="fieldEmail" name="cm-bhrjhl-bhrjhl" type="email" required />
  </p>
  <p>
    <button type="submit">Subscribe</button>
  </p>
</form>
```

I don’t really like this markup. I’m going to change it up to be more semantic and nicer looking. First off, we’ll wrap our whole form within a `div` with the class of `.newsletter`. Then, instead of using paragraphs to group our inputs, we’ll use a `div` with the class of `.form-group`. This allows us to write shared styles so we don’t repeat ourselves unnecessarily.

You’ll notice that each input has a `label` with a `for` attribute. This tells the browser that the label and input go together, so people who use screen readers understand our form. I’ve also added attributes like `autocomplete="off" autocorrect="off" autocapitalize="off"`, so filling them in on a mobile device isn’t a hassle for those who have names or email addresses that aren’t recognized.

Lastly, I’ve added an empty `div` with a class of `.newsletter__thankyou` where we’ll put a message once someone submits the form.

```html
<!-- index.html --> 
<div class="newsletter">
  <form action="http://anythingoes.createsend.com/t/t/s/bhrjhl/" method="post" id="subForm">
    <div class="form-group">
      <label for="fieldName">Name</label>
      <input id="fieldName" name="cm-name" type="text" autocomplete="off" autocorrect="off" autocapitalize="off" required />
    </div>
    
    <div class="form-group">
      <label for="fieldEmail">Email</label>
      <input id="fieldEmail" name="cm-bhrjhl-bhrjhl" type="email" autocomplete="off" autocorrect="off" autocapitalize="off" required />
    </div>
    
    <div class="button-group">
      <button type="submit" class="button button--primary">Subscribe</button>
    </div>
  </form>
  <div class="newsletter__thankyou"></div>
</div>
```


## Styling the Inputs
With the markup done, we want the form to look good. For this particular form, I wanted the inputs to be inline. Flexbox makes doing this easy.

First, we’ll add flexbox to the form. We want to build mobile first, so we set the `flex-direction` to `column`. This puts our items on top of each other. As the browser gets bigger, we change it to `row` which will put the items inline. 

```scss
/* site.scss ---------------------- */
.newsletter {
  form {
    display: flex;
    flex-direction: column;
    @media #{$medium-up} {
      flex-direction: row;
    }
  }
 }
```

Before we go any further, we want to declare our variables. Variables allow us to reuse values in multiple places without having to remember what they are. It also makes changing these values a breeze, if we ever need to.

```scss
/* site.scss ---------------------- */
$border-color: #eaecef;
$globalRadius: 3px;
$link-color: #429cd4;
```

Next, we’ll style the `label` and `input`. Since we’re styling under the `.newsletter` class, we’re styling both inputs at the same time.[^1]

```scss
/* site.scss ---------------------- */
.newsletter {
  label {
    display: block;
    font-weight: 600;
  }
  input {
    border: 1px solid $border-color;
    border-radius: $globalRadius;
    color: $dark-color;
    font-size: .95rem;
    padding: rem-calc(5px);
    width: 100%;
    transition: .2s ease-in-out;
    &:focus {
      border-color: $link-color;
    }
  }
}
```

Now that we’ve got that styled, we want to establish the size for the `.form-group`. Again, since we’re building mobile first, the default styling will be to give space on the bottom for each `.form-group`. As the browser get’s bigger, and the inputs are on the same line, we now give some space to the right. Then, we want to tell each `.form-group` to grow and shrink the same amount to fill the container. We do that with the `flex` shorthand. 

```scss
/* site.scss ---------------------- */
.form-group {
  margin: 0 0 rem-calc(15px);
  @media #{$medium-up} {
    // flex-grow: 1;
    // flex-shrink: 1;
    // flex-basis: auto;
    // The above translates into the shorthand below.
    flex: 1 1 auto;
    margin: 0 rem-calc(20px) 0 0;
  }
}
```

## Styling the Button
Everything is looking good except for that button. Let’s fix that. These are all pretty standard things. But you’ll notice that the button is aligned to the top. That’s what that last bit at the end is for. We enable flexbox within the `.button-group`, then align elements within it to the `flex-end`. Better!

```scss
/* site.scss ---------------------- */
.button {
  background: #ddd;
  border: 0;
  border-radius: 3px;
  font-weight: 600;
  padding: rem-calc(5px) rem-calc(10px);
  &--primary {
    background: $link-color;
    color: white;
    transition: background 300ms ease;
    &:hover, &:focus {
      background: darken($link-color, 8%);
    }
    &:active {
      box-shadow: inset 0 0 3px rgba(black, .1);
    }
  }
}

// This last bit aligns the button to the bottom.
.button-group {
  display: flex;
  align-items: flex-end;
}
```

## Submitting the Form with Javascript
I like submitting the form with Javascript so the person doesn’t have to leave the page. I think it’s a nicer experience. We can do that easily with [some code I got from here](https://www.campaignmonitor.com/integrations/ajax-subscription-form). You’ll need jQuery for this to work.

Basically, it takes the form and submits it. If there’s a problem, we display a browser alert. If all goes well, we add the class `.js-submitted` to the empty `.newsletter__thankyou`. It also injects a little bit of text to say thank you and explain the next steps.

```js
// newsletter.js
$(function () {
  $('#subForm').submit(function (e) {
    e.preventDefault();
    $.getJSON(
    this.action + "?callback=?",
    $(this).serialize(),
    function (data) {
      if (data.Status === 400) { // Things didn't go well.
        alert("Error: " + data.Message);
      }
      else { // All is good in the neighborhood.
        $("form").remove("#subForm");
        $(".newsletter__thankyou").addClass("js-submitted");
        $(".newsletter__thankyou").append("<p>Thanks for subscribing. You’ll be receiving a confirmation email shortly.</p>");
      }
    });
  });
});
```

## Styling the Thank You Message
Everything is looking good, and our form is submitting. But that thank you message needs some love. 

```scss
/* site.scss ---------------------- */
.newsletter__thankyou {
  &.js-submitted {
    background: lighten($link-color, 40%);
    border: 1px solid lighten($link-color, 20%);
    border-radius: $globalRadius;
    padding: rem-calc(15px) rem-calc(8px);;
    @extend %sans;
    p {
      font-size: 1rem;
    }
  }
}
```

That’s it! In just a few steps we modified the form markup, styled the form and button, submitted it with javascript, and have a nice looking thank you message for our potential readers. If you’d like to see this form in action, take a look at the [subscribe page](/subscribe/).

If you have any questions, feel free to [find me on Twitter](http://twitter.com/ttimsmith).

[^1]:	You might notice that I use `rem-calc`. This is a function that I borrow from the [Foundation Framework](http://foundation.zurb.com/). I use this everywhere.
