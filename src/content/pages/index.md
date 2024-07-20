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
    heading:
      heading_text: Body of the Year
      heading_color: '#ffffff'
    subheading:
      subheading_text: Sourdough Bakery - Dunedin, New Zealand
      subheading_color: '#ffffff'
    image_path: /src/assets/images/flour-milling-hero.jpg
    image_alt: An image
    button:
      button_text: Contact us
      button_icon: CaretDown
      button_link: /#contact
      background_color: '#2d2d2d'
      hover_brightness: 0.85
      text_color: '#ffffff'
  - _bookshop_name: card-grid
    background_color: '#fff0f4'
    heading:
      heading_text:
      heading_color: '#000000'
    grid_columns: 2
    cards_max_width: 42
    cards:
      - _bookshop_name: background-image-card
        heading:
          heading_text: Want bread?
          heading_color: '#ffffff'
        subheading:
          subheading_text: Where to find our loaves.
          subheading_color: '#ffffff'
        background_image:
          image_path: /src/assets/images/bakery-shots/1ECE93C3-8924-4ADF-8CDB-1A02D6D1CC04 2.jpg
          image_alt: 'A bakery shot'
          filters:
            brightness: 0.6
            grayscale: 0.2
        link: '/bread/'
      - _bookshop_name: background-image-card
        heading:
          heading_text: About us
          heading_color: '#ffffff'
        subheading:
          subheading_text: Learn about what we do.
          subheading_color: '#ffffff'
        background_image:
          image_path: /src/assets/images/bakery-shots/2114BA8A-DBB7-475E-ACF1-DCA06107A23F.jpg
          image_alt: 'A bakery shot'
          filters:
            brightness: 0.8
            grayscale: 1
        link: '/about/'
  - _bookshop_name: contact-form
    heading:
      heading_text: Contact Us
      heading_color: '#ffffff'
    subheading:
      heading_text: Get in touch to order bread, enquire about wholesale, or ask us a question!
      heading_color: '#ffffff'
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
