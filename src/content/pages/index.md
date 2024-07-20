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
header_styles:
  background_color: 'transparent'
  text_color: '#ffffff'
content_blocks:
  - _bookshop_name: hero
    title: Body of the Year
    subtitle: Bakery for Dunedin, New Zealand
    image_path: /src/assets/images/flour-milling-hero.jpg
    image_alt: An image
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
      - _bookshop_name: background-image-card
        heading: Want bread?
        text: Where to find our loaves.
        background_image:
          image_path: /src/assets/images/bakery-shots/1ECE93C3-8924-4ADF-8CDB-1A02D6D1CC04 2.jpg
          image_alt: 'A bakery shot'
          filters:
            brightness: 0.6
            grayscale: 0.2
        link: '/bread/'
      - _bookshop_name: background-image-card
        heading: About us
        text: Learn about what we do.
        background_image:
          image_path: /src/assets/images/bakery-shots/2114BA8A-DBB7-475E-ACF1-DCA06107A23F.jpg
          image_alt: 'A bakery shot'
          filters:
            brightness: 0.8
            grayscale: 1
        link: '/about/'
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
