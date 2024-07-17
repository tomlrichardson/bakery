---
title: Home
seo:
  page_description: >-
    Body of the year bakery
  canonical_url:
  featured_image:
  featured_image_alt:
  author_twitter_handle:
  open_graph_type:
  no_index: false
content_blocks:
  - _bookshop_name: hero
    title: Body of the Year
    subtitle: Bakery for Dunedin, New Zealand
    imagePath: /src/assets/images/flour-milling-hero.jpg
    altText: An image
    button:
      link: '/#contact'
      text: Contact Us
      background_color: '#000000'
      text_color: '#ffffff'
  - _bookshop_name: card-grid
    background_color: '#fff0f4'
    heading:
      heading_text:
      heading_color: '#000000'
    grid_columns: 2
    cards_max_width: 42
    button:
      button_text:
      background_color:
      text_color:
    cards:
      - _bookshop_name: icon-card
        heading: About us
        icon: WheatAwn
        text: Learn about what we do.
        link: '/about/'
      - _bookshop_name: icon-card
        heading: Want bread?
        text: Where to find our loaves.
        icon: Bread
        link: /bread/
  - _bookshop_name: contact-form
    heading: Contact Us
    subheading: Get in touch to order bread, enquire about wholesale, or ask us a question!
    contact_details:
      - label: Address
        icon: LocationPin
        text: >-
          [123 Bakery Street](/where/#map)
      - label: Email
        icon: Envelope
        text: botybakery@gmail.com
    form:
      form_fields:
        - label: Email Address
          name: email
          type: text
          options: []
        - label: Name
          name: name
          type: text
          options: []
        - label: Message
          name: message
          type: textarea
          options: []
        - label: Type of Enquiry
          name: subject
          type: radio
          options:
            - label: General
              value: General Enquiry
            - label: Wholesale
              value: Wholesale Enquiry
---
