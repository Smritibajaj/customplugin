import grapesjs from 'grapesjs';
const loadCss = editor => {
  editor.Config.canvasCss += `.center{ text-align:center }`
}
export default grapesjs.plugins.add('gjs-blocks-custom', (editor, opts = {}) => {
  const config = {
    blocks: ['Navigation', 'Intros', 'Headings', 'Features', 'Clients', 'Steps', 'Buttons', 'CalltoAction', 'Pricing', 'Teams', 'Testimonials', 'Forms', 'FAQ', 'Footers'],
    flexGrid: 0,
    addBasicStyle: true,
    //category
    categoryNavigation: 'Navigation',
    categoryIntros: 'Intros',
    categoryHeadings: 'Headings',
    categoryFeatures: 'Features',
    categoryClients: 'Clients',
    categorySteps: 'Steps',
    categoryButtons: 'Buttons',
    categoryCallToActions: 'CalltoAction',
    categoryPricing: 'Pricing',
    categoryTeams: 'Teams',
    categoryTestimonials: 'Testimonials',
    categoryForms: 'Forms',
    categoryFAQ: 'FAQ',
    categoryFooter: 'Footers',

    //items
    navigation1: 'Navigation 1',
    navigation2: 'Navigation 2',
    navigation3: 'Navigation 3',
    intro1: 'Intro 1',
    intro2: 'Intro 2',
    intro3: 'Intro 3',
    heading1: 'Heading 1',
    heading2: 'Heading 2',
    feature1: 'Features',
    feature2: 'Features',
    feature3: 'Features',
    feature4: 'Features',
    feature5: 'Features',
    feature6: 'Features',
    client1: 'Client 1',
    client2: 'Client 2',
    client3: 'Client 3',
    client4: 'Client 4',
    client5: 'Client 5',
    step1: 'Step 1',
    step2: 'Step 2',
    step3: 'Step 3',
    button1: 'Button 1',
    button2: 'Button 2',
    button3: 'Button 3',
    button4: 'Button 4',
    button5: 'Button 5',
    button6: 'Button 6',
    callToAction1: 'Call to Action',
    callToAction2: 'Call to Action',
    callToAction3: 'Call to Action',
    callToAction4: 'Call to Action',
    pricing: 'Pricing',
    team1: 'Team 1',
    team2: 'Team 2',
    testimonial1: 'Testimonial 1',
    testimonial2: 'Testimonial 2',
    testimonial3: 'Testimonial 3',
    testimonial4: 'Testimonial 4',
    testimonial5: 'Testimonial 5',
    form1: 'Form 1',
    form2: 'Form 2',
    form3: 'Form 3',
    form4: 'Form 4',
    faq1: 'FAQ 1',
    faq2: 'FAQ 2',
    footer1: 'Footer 1',
    footer2: 'Footer 2',
    footer3: 'Footer 3',
    footer4: 'Footer 4',
    ...opts
  };

  // Add blocks
  const loadBlocks = require('./blocks');
  loadBlocks.default(editor, config);
});
