export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks;
  const toAdd = (name) => blocks.indexOf(name) >= 0;

  let card = `<div class="card">
  <div class="card-body text-center">
    <h2 class="card-title text-center p-2">Feature</h2>
    <p class="card-text p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>`;

  let faq = `<div class="card">
  <div class="card-body">
    <h2 class="card-title p-2">Question</h2>
    <p class="card-text text-center p-2">Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
  </div>
</div>`;

  let faq2 = `<div class="card">
  <div class="card-body">
    <h2 class="card-title p-2 text-center">Question</h2>
    <p class="card-text text-center p-2">Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
  </div>
</div>`;
  let contentcard = `<div class="card m-1">
<img src="http://via.placeholder.com/150/dc659b/fff?text=Image" class="card-img-top" alt="Cards">
<div class="card-body">
  <h5 class="card-title p-2">Card title</h5>
  <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

  let subtitlecard = `<div class="card m-1">
<img src="images/card.jpg" class="card-img-top" alt="Cards">
<div class="card-body">
  <h5 class="card-title p-2">Card title</h5>
  <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`;

  let circularcard = `<div class="m-1">
  <div class="d-flex justify-content-center">
<img src="http://via.placeholder.com/150/dc659b/fff?text=Image" class="card-img-top border rounded-circle" style="    height: 150px;
width: 150px;" alt="Circular Image">
</div>
<div class="card-body">
  <h5 class="card-title p-2">Card title</h5>
  <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>`;

  let priceChart = `<article class="card m-1">
<div class="card-body">
  <h5 class="card-title p-2 text-center" style="color:#dc659b">Enterprise</h5>
  <div class="p-2 text-center">
  <span style="font-size:32px">$5</span>
  <span>/month</span>
  </div>
  <div class="mb-3 p-2 text-justify">
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit
  </div>
  <div class="d-flex flex-column text-center">
  <div>15 active pages</div>
  <div>100MB of storage</div>
  <div>10 hours of support</div>
  </div>
  <a href="#" class="btn p-2 m-2 border text-decoration-none" style="background-color:#dc659b">Subscribe</a>
</div>
</article>`;

  let team = `<div class="card m-1">
<div class="d-flex justify-content-center">
<img src="images/testim1.jpg" style="height:100px;width:100px;" class="card-img-top border rounded-circle m-2" alt="Circular Image">
</div>
<div class="card-body">
<h4 class="card-title p-2 text-center">John Doe</h4>
<h5 class="card-title p-2 text-center">CEO and Founder</h5>
</div>
</div>`;

  let teamCard = `<div class="m-1">
<div class="d-flex justify-content-center">
<img src="images/testim1.jpg" class="card-img-top border rounded-circle m-2" style="height:150px;width:150px;" alt="Circular Image">
</div>
<div class="card-body">
<h4 class="card-title p-2 text-center">John Doe</h4>
<h5 class="card-title p-2 text-center">CEO and Founder</h5>
<div class="d-flex flex-row justify-content-center">
<div class="fa fa-google" aria-hidden="true"></div>
<div class="fa fa-twitter" aria-hidden="true"></div>
<div class="fa fa-facebook-square" aria-hidden="true"></div>
</div>
</div>
</div>`;

  toAdd("Navigation") &&
    bm.add("navigation1", {
      label: `<img src="images/block-header1.jpg" height="20px" width="80px"/>`,
      category: c.categoryNavigation,
      content: `<nav class="navbar navbar-expand-lg text-light bg-dark">
    <a class="navbar-brand">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul class="nav justify-content-end">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      </ul>
      </div>
  </nav>`,
    });

  toAdd("Navigation") &&
    bm.add("navigation2", {
      label: `<img src="images/block-header2.jpg" height="20px" width="80px"/>`,
      category: c.categoryNavigation,
      content: `<nav class="navbar navbar-expand-lg text-light bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      </ul>
      </div>
      <a class="navbar-brand">Navbar</a>
  </nav>`,
    });

  toAdd("Navigation") &&
    bm.add("navigation3", {
      label: `<img src="images/block-header3.jpg" height="20px" width="80px"/>`,
      category: c.categoryNavigation,
      content: `<nav class="navbar navbar-expand-lg text-light bg-dark">
    <a class="navbar-brand">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <ul class="nav justify-content-start">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      </ul>
      </div>
  </nav>`,
    });

  toAdd("Intros") &&
    bm.add("intros1", {
      label: `<img src="images/block-intro1.jpg" height="20px" width="80px"/>`,
      category: c.categoryIntros,
      content: `<section class="h-100 container-fluid d-flex align-items-center" style="background-image:url(images/photo-vineyard.jpg)">
    <div class="container">
    <h1 class="text-center">Lorem ipsum dolor sit amet</h1>
    <div class="text-center p-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</div>
    <div class="d-flex flex-row justify-content-center">
    <a class="btn p-3 m-3 text-decoration-none" style="background-color:#dc659b" href="#">Explore More</a>
    <a class="btn border border-info p-3 m-3 text-decoration-none" href="#">Learn More</a>
    </div>
    </div>
    </>`,
    });

  toAdd("Intros") &&
    bm.add("intros2", {
      label: `<img src="images/block-intro2.jpg" height="20px" width="80px"/>`,
      category: c.categoryIntros,
      content: `<section class="h-100 container-fluid d-flex align-items-center" style="background-image:url(images/photo-vineyard2.jpg)">
    <div class="container">
    <h1 class="text-center">Lorem ipsum dolor sit amet</h1>
    <div class="text-center p-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</div>
    <div class="d-flex flex-row justify-content-center">
    <a href="#" class="btn p-3 m-3 text-decoration-none rounded-pill" style="background-color:#dc659b">Learn More</a>
    </div>
    </div>
    </>`,
    });

  toAdd("Intros") &&
    bm.add("intros3", {
      label: `<img src="images/block-intro3.jpg" height="20px" width="80px"/>`,
      category: c.categoryIntros,
      content: `<section class="h-100 container-fluid d-flex align-items-center" style="background-image:url(images/photo-intro3.jpg)">
    <div class="container">
    <h1 class="mb-3">Super App</h1>
    <h2>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</h2>
    <div>
    <a href="#">Learn More</a>
    <a href="#">Learn More</a>
    </div>
    </div>
    </>`,
    });

    toAdd("AboutUs") &&
    bm.add("aboutus1", {
      label: `<img src="images/block-heading1.jpg" height="20px" width="80px"/>`,
      category: c.categoryHeadings,
      content: `<header class="w-100 py-3 d-flex flex-column align-items-center justify-content-end" style="background-color:#2e3137;">
    <h1 class="p-2 m-1 text-light">This is amazing header</h1>
    <h2 class="p-2 m-1 text-light">This is amazing title</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    </header>`,
    });

  toAdd("Headings") &&
    bm.add("headin1", {
      label: `<img src="images/block-heading1.jpg" height="20px" width="80px"/>`,
      category: c.categoryHeadings,
      content: `<header class="w-100 py-3 d-flex flex-column align-items-center justify-content-end" style="background-color:#2e3137;">
    <h1 class="p-2 m-1 text-light">This is amazing header</h1>
    <h2 class="p-2 m-1 text-light">This is amazing title</h2>
    </header>`,
    });

  toAdd("Headings") &&
    bm.add("heading2", {
      label: `<img src="images/block-heading2.jpg" height="20px" width="80px"/>`,
      category: c.categoryHeadings,
      content: `<header class="w-100 py-3 d-flex flex-column align-items-center justify-content-end" style="background-color:#2e3137;">
    <h2 class="p-2 m-1 text-light">This is amazing title</h2>
    <h1 class="p-2 m-1 text-light">This is amazing header</h1>
    </header>`,
    });

  toAdd("Headings") &&
    bm.add("heading3", {
      label: `<img src="images/block-heading2.jpg" height="20px" width="80px"/>`,
      category: c.categoryHeadings,
      content: `<section class="jumbotron" id="header">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h1>SaaS Focused Landing Page Builder</h1>
                <p class="lead mb-5">Easily build your landing page without worrying about design, hosting and the latest conversion tactics.</p>
                <a href="#" class="btn btn-primary btn-lg">Get Started Now</a>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-md-8">
                <img alt="image" class="img-fluid mt-5" src="https://cdn.versoly.com/img/website_setup.svg" />
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Headings") &&
    bm.add("heading4", {
      label: `<img src="images/block-heading2.jpg" height="20px" width="80px"/>`,
      category: c.categoryHeadings,
      content: `<section class="jumbotron bg-transparent" id="header">
    <div class="container text-center text-lg-left">
        <div class="row align-items-center">
            <div class="col-md-12 col-lg-6 col-xl-5">
                <h1>SaaS Focused Landing Page Builder</h1>
                <p class="lead mb-5">Easily build your landing page without worrying about design, hosting and the latest conversion tactics</p>
                <a href="#" class="btn btn-primary btn-lg">Get Started Now</a>
            </div>
            <div class="col-md-8 m-auto ml-lg-auto mr-lg-0 col-lg-6 pt-5 pt-lg-0">
                <img alt="image" class="img-fluid" src="https://cdn.versoly.com/img/website_setup.svg" />
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Headings") &&
    bm.add("heading5", {
      label: `<img src="images/block-heading2.jpg" height="20px" width="80px"/>`,
      category: c.categoryHeadings,
      content: `<section class="jumbotron bg-transparent" id="header">
    <div class="container text-center text-lg-left">
        <div class="row align-items-center">
            <div class="col-md-8 m-auto ml-lg-auto col-lg-6 pt-5 pt-lg-0 order-lg-1 order-12">
                <img alt="image" class="img-fluid" src="https://cdn.versoly.com/img/website_setup.svg" />
            </div>
            <div class="col-md-12 col-lg-6 col-xl-5 order-lg-12 order-1">
                <h1>SaaS Focused Landing Page Builder</h1>
                <p class="lead mb-5">Easily build your landing page without worrying about design, hosting and the latest conversion tactics.</p>
                <a href="#" class="btn btn-primary btn-lg">Get Started Now</a>
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Features") &&
    bm.add("4 features", {
      label: `<img src="images/block-feature1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `
    <div class="container-fluid my-3">
    <div class="container">
    <div class="row">
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    </div>
    <div class="row">
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    </div>
    </div>
    </div>`,
    });

  toAdd("Features") &&
    bm.add("6 features", {
      label: `<img src="images/block-feature2.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<div class="container-fluid my-3">
    <div class="container">
    <div class="row">
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    </div>
    <div class="row">
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    </div>
    </div>
    </div>`,
    });

  toAdd("Features") &&
    bm.add("4 Content", {
      label: `<img src="images/block-feature3.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<div class="container-fluid my-3">
    <div class="container">
    <div><h2 class="text-center">Features</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="row">
    <div class="col">${contentcard}</div>
    <div class="col">${contentcard}</div>
    <div class="col">${contentcard}</div>
    </div>
    </div>
    </div>`,
    });

  toAdd("Features") &&
    bm.add("6 Content", {
      label: `<img src="images/block-feature4.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<div class="container-fluid my-3">
    <div><h2 class="text-center">Features</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="row">
    <div class="col">${circularcard}</div>
    <div class="col">${circularcard}</div>
    <div class="col">${circularcard}</div>
    <div class="col">${circularcard}</div>
    </div>
    </div>`,
    });

  toAdd("Features") &&
    bm.add("2 Content", {
      label: `<img src="images/block-feature5.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `
    <div class="container-fluid my-3">
    <section class="container-fluid d-flex h-auto">
    <div class="d-flex justify-content-center align-items-center flex-column m-2">
    <h2 class="p-2">Lorem ipsum dolor sit amet</h2>
    <div class="p-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</div>
    <a href="#" class="btn text-decoration-none p-3 text-light" style="background-color:#dc659b;">Button</a>
    </div>
    <div  class="d-flex justify-content-center align-items-center m-2">
    <img class="p-2" src="http://via.placeholder.com/370x275/dc659b/fff?text=Feature" alt="Features"/>
    </div>
    </section>
    </div>`,
    });

  toAdd("Features") &&
    bm.add("Content", {
      label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `
    <div class="container-fluid my-3">
    <section class="container">
    <div class="row">
    <div class="col">${subtitlecard}</div>
    <div class="col">${subtitlecard}</div>
    <div class="col">${subtitlecard}</div>
    </div>
    </section>
    </div>`,
    });

  toAdd("Features") &&
    bm.add("Feature6", {
      label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `
      <section class="jumbotron bg-primary text-white" id="features">
      <div class="container">
          <h2 class="display-4 text-center mb-5">Features</h2>
          <div class="row">
              <div class="col text-right">
                  <div class="row features-row-height">
                      <div class="col-11">
                          <a>
                              <h3>Blocks</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                      <div class="col-1">
                          <i class="far fa-square fa-2x"></i>
                      </div>
                  </div>
                  <div class="row features-row-height">
                      <div class="col-11">
                          <a>
                              <h3>Responsive</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                      <div class="col-1">
                          <i class="fas fa-mobile-alt fa-2x"></i>
                      </div>
                  </div>
                  <div class="row features-row-height">
                      <div class="col-11">
                          <a>
                              <h3>Shortcuts</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                      <div class="col-1">
                          <i class="fas fa-keyboard fa-2x"></i>
                      </div>
                  </div>
                  <div class="row features-row-height">
                      <div class="col-11">
                          <a>
                              <h3>HTML/CSS Editor</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                      <div class="col-1">
                          <i class="fas fa-code fa-2x"></i>
                      </div>
                  </div>
              </div>
              <div class="mx-5">
                  <img src="https://cdn.discordapp.com/attachments/473790520846712832/584751020802834440/IPhoneX.png" height="500" />
              </div>
              <div class="col text-left">
                  <div class="row features-row-height">
                      <div class="col-1 features-feature-left">
                          <i class="fas fa-search fa-2x"></i>
                      </div>
                      <div class="col-11">
                          <a>
                              <h3>SEO Editor</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                  </div>
                  <div class="row features-row-height">
                      <div class="col-1 features-feature-left">
                          <i class="fas fa-pen fa-2x"></i>
                      </div>
                      <div class="col-11">
                          <a>
                              <h3>Terms Editor</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                  </div>
                  <div class="row features-row-height">
                      <div class="col-1 features-feature-left">
                          <i class="fas fa-hdd fa-2x"></i>
                      </div>
                      <div class="col-11">
                          <a>
                              <h3>SSD</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                  </div>
                  <div class="row features-row-height">
                      <div class="col-1 features-feature-left">
                          <i class="fas fa-server fa-2x"></i>
                      </div>
                      <div class="col-11">
                          <a>
                              <h3>AWS Hosting</h3>
                              <p>Terms and privacy policies are complex enough, creating pages for them shouldn't be.</p>
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Features") &&
    bm.add("Feature7", {
      label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<section class="jumbotron" id="features">
      <div class="container">
          <div class="row pb-5">
              <div class="col-md-8 col">
                  <h2 class="display-4 font-weight-bold">Features</h2>
                  <p class="lead font-weight-400">These are the amazing features that this product has to offer. This product is built to benefit you massively and each feature has been built with customer feedback.</p>
              </div>
          </div>
          <div class="row">
              <div class="col-lg-4 col-md-6">
                  <div class="bg-white p-5 rounded-lg">
                      <i class="fa fa-2x fa-hdd text-white bg-primary p-3 rounded-lg mb-4"></i>
                      <h5 class="font-weight-bold">Block based</h5>
                      <p class="font-weight-400">The ability to add, save and remove blocks.</p>
                  </div>
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill-opacity="1" d="M0,32L30,58.7C60,85,120,139,180,154.7C240,171,300,149,360,128C420,107,480,85,540,69.3C600,53,660,43,720,53.3C780,64,840,96,900,122.7C960,149,1020,171,1080,165.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>
              </div>
              <div class="col-lg-4 col-md-6">
                  <div class="bg-white p-5 rounded-lg mt-4">
                      <i class="fa fa-2x fa-hdd text-white bg-secondary p-3 rounded-lg mb-4"></i>
                      <h5 class="font-weight-bold">Block based</h5>
                      <p class="font-weight-400">The ability to add, save and remove blocks.</p>
                  </div>
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill-opacity="1" d="M0,32L30,58.7C60,85,120,139,180,154.7C240,171,300,149,360,128C420,107,480,85,540,69.3C600,53,660,43,720,53.3C780,64,840,96,900,122.7C960,149,1020,171,1080,165.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>
              </div>
              <div class="col-lg-4 col-md-6">
                  <div class="bg-white p-5 rounded-lg mt-5">
                      <i class="fa fa-2x fa-hdd text-white bg-tertiary p-3 rounded-lg mb-4"></i>
                      <h5 class="font-weight-bold">Block based</h5>
                      <p class="font-weight-400">The ability to add, save and remove blocks.</p>
                  </div>
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill-opacity="1" d="M0,32L30,58.7C60,85,120,139,180,154.7C240,171,300,149,360,128C420,107,480,85,540,69.3C600,53,660,43,720,53.3C780,64,840,96,900,122.7C960,149,1020,171,1080,165.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>
              </div>
              <div class="col-lg-4 col-md-6">
                  <div class="bg-white p-5 rounded-lg">
                      <i class="fa fa-2x fa-hdd text-white bg-primary p-3 rounded-lg mb-4"></i>
                      <h5 class="font-weight-bold">Block based</h5>
                      <p class="font-weight-400">The ability to add, save and remove blocks.</p>
                  </div>
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill-opacity="1" d="M0,32L30,58.7C60,85,120,139,180,154.7C240,171,300,149,360,128C420,107,480,85,540,69.3C600,53,660,43,720,53.3C780,64,840,96,900,122.7C960,149,1020,171,1080,165.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>
              </div>
              <div class="col-lg-4 col-md-6">
                  <div class="bg-white p-5 rounded-lg mt-4">
                      <i class="fa fa-2x fa-hdd text-white bg-secondary p-3 rounded-lg mb-4"></i>
                      <h5 class="font-weight-bold">Block based</h5>
                      <p class="font-weight-400">The ability to add, save and remove blocks.</p>
                  </div>
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill-opacity="1" d="M0,32L30,58.7C60,85,120,139,180,154.7C240,171,300,149,360,128C420,107,480,85,540,69.3C600,53,660,43,720,53.3C780,64,840,96,900,122.7C960,149,1020,171,1080,165.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>
              </div>
              <div class="col-lg-4 col-md-6">
                  <div class="bg-white p-5 rounded-lg mt-5">
                      <i class="fa fa-2x fa-hdd text-white bg-tertiary p-3 rounded-lg mb-4"></i>
                      <h5 class="font-weight-bold">Block based</h5>
                      <p class="font-weight-400">The ability to add, save and remove blocks.</p>
                  </div>
                  <svg class="fill-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                      <path fill-opacity="1" d="M0,32L30,58.7C60,85,120,139,180,154.7C240,171,300,149,360,128C420,107,480,85,540,69.3C600,53,660,43,720,53.3C780,64,840,96,900,122.7C960,149,1020,171,1080,165.3C1140,160,1200,128,1260,128C1320,128,1380,160,1410,176L1440,192L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"></path>
                  </svg>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Features") &&
    bm.add("Feature8", {
      label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<section class="jumbotron bg-transparent" id="features">
    <div class="container">
        <div class="row">
            <div class="col-8 mx-auto">
                <h1 class="display-3 text-center">Display 1</h1>
                <p class="mb-5 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
        </div>
        <div class="row row-eq-height">
            <div class="col-md-1"></div>
            <div class="col-md-5 mb-5">
                <div class="h-100 float-left d-inline-block">
                    <i class="icon-rounded icon-inline icon-inline-lg fa fa-server bg-primary text-white"></i>
                </div>
                <div>
                    <h6>Feature 2</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="col-md-5 mb-5">
                <div class="h-100 float-left d-inline-block">
                    <i class="icon-rounded icon-inline icon-inline-lg fa fa-server bg-primary text-white"></i>
                </div>
                <div>
                    <h6>Feature 3</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
        <div class="row row-eq-height">
            <div class="col-md-1"></div>
            <div class="col-md-5 mb-5">
                <div class="h-100 float-left d-inline-block">
                    <i class="icon-rounded icon-inline icon-inline-lg fa fa-server bg-primary text-white"></i>
                </div>
                <div>
                    <h6>Feature 4</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
            <div class="col-md-5 mb-5">
                <div class="h-100 float-left d-inline-block">
                    <i class="icon-rounded icon-inline icon-inline-lg fa fa-server bg-primary text-white"></i>
                </div>
                <div>
                    <h6>Feature 5</h6>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Features") &&
    bm.add("Feature10", {
      label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<section class="jumbotron bg-transparent" id="features">
  <div class="container px-md-1 px-4">
      <div class="row justify-content-center pb-5">
          <div class="col text-center">
              <h2 class="display-4 font-weight-bold">Versoly Design Blocks</h2>
          </div>
      </div>
      <div class="row text-left align-items-center pt-5 pb-md-5">
          <div class="col-md-5">
              <img alt="image" class="img-fluid" src="https://cdn.versoly.com/img/setup_wizard.svg" />
          </div>
          <div class="col-md-5 m-md-auto mt-5 mt-md-0">
              <h2>
                  <strong>Feature One</strong>
              </h2>
              <p class="lead">We have designed SaaS templates that are focused on converting visitors to users. We study the latest trends and change the templates often to make sure they're up to date.</p>
          </div>
      </div>
      <div class="row text-left align-items-center pt-5 pb-md-5">
          <div class="col-md-5 m-md-auto order-md-5">
              <img alt="image" class="img-fluid" src="https://cdn.versoly.com/img/web_devices.svg" />
          </div>
          <div class="col-md-5 mt-5 mt-md-0">
              <h2>
                  <strong>Feature Two</strong>
              </h2>
              <p class="lead">We have a simple but powerful editor that will allow you to make changes to the template quickly. Changes such as text, color and images can be done with a few clicks.</p>
          </div>
      </div>
      <div class="row text-left align-items-center pt-5">
          <div class="col-md-5">
              <img alt="image" class="img-fluid" src="https://cdn.versoly.com/img/done.svg" />
          </div>
          <div class="col-md-5 m-md-auto mt-5 mt-md-0">
              <h2>
                  <strong>Feature Three</strong>
              </h2>
              <p class="lead">We handle hosting for you, we use Amazon Web Services (AWS) for all our services, so you can trust that your landing page will be fast, secure and always up.</p>
          </div>
      </div>
  </div>
</section>`,
    });

  toAdd("Features") &&
    bm.add("Feature11", {
      label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<section class="jumbotron bg-transparent" id="features">
  <div class="container">
      <h2 class="display-4 font-weight-bold text-center">All our plans include</h2>
      <div class="row lead font-weight-400">
          <div class="col-lg-6 mt-5">
              <ul class="list-unstyled w-75 mx-auto float-lg-right">
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Real-Time Page Updates
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Responsive Websites
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Support All Devices
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Video Support
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Integrations
                      </p>
                  </li>
              </ul>
          </div>
          <div class="col-lg-6 mt-5">
              <ul class="list-unstyled w-75 mx-auto float-lg-left">
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Super Fast Page Speed
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Top Tier Global CDN
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Export HTML/CSS
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>SEO Optimized
                      </p>
                  </li>
                  <li>
                      <p>
                          <i class="fa fa-check mr-3 text-primary"></i>Simple No-code Platform
                      </p>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</section>`,
    });

  toAdd("Features") &&
    bm.add("Feature12", {
      label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFeatures,
      content: `<section class="jumbotron" id="features">
  <div class="container">
      <div class="row">
          <div class="col-md-12 text-center">
              <h2 class="display-4 font-weight-bold text-center">Sales everywhere</h2>
              <p class="lead font-weight-400 mt-2">Use our software on any device and boost your sales</p>
          </div>
      </div>
      <div class="row">
          <div class="col-md-12 text-center">
              <img class="img-fluid" src="https://cdn.versoly.com/img/all_devices.png" alt="all devices" />
          </div>
      </div>
      <div class="row">
          <div class="col-md-3 text-center">
              <i class="fab fa-3x fa-apple mt-3"></i>
              <p class="font-weight-400 mt-2">Apple</p>
          </div>
          <div class="col-md-3 text-center">
              <i class="fab fa-3x fa-android mt-3"></i>
              <p class="font-weight-400 mt-2">Android</p>
          </div>
          <div class="col-md-3 text-center">
              <i class="fas fa-3x fa-desktop mt-3"></i>
              <p class="font-weight-400 mt-2">Mac & Windows</p>
          </div>
          <div class="col-md-3 text-center">
              <i class="fas fa-3x fa-window-maximize mt-3"></i>
              <p class="font-weight-400 mt-2">Browser</p>
          </div>
      </div>
  </div>
</section>`,
    });

  toAdd("Clients") &&
    bm.add("client1", {
      label: `<img src="images/block-clients1.png" height="40px" width="60px"/>`,
      category: opt.categoryClients,
      content: `<div class="container-fluid my-3">
    <section class="container py-3">
    <div class="row">
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo1.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo2.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo3.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo4.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo5.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo6.png" style="height:100px;width:100px;"/></div>
    </div>
    </section>
    </div>`,
    });

  toAdd("Clients") &&
    bm.add("client2", {
      label: `<img src="images/block-clients2.png" height="40px" width="60px"/>`,
      category: opt.categoryClients,
      content: `<section class="jumbotron bg-transparent" id="clients">
    <div class="container">
        <div class="row text-center">
            <div class="col-lg-2 col-md-4 col-6">
                <img class="img-grayscale w-75" src="images/logo1.png" />
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <img class="img-grayscale w-75" src="images/logo2.png" />
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <img class="img-grayscale w-75" src="images/logo3.png" />
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <img class="img-grayscale w-75" src="images/logo4.png" />
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <img class="img-grayscale w-75" src="images/logo5.png" />
            </div>
            <div class="col-lg-2 col-md-4 col-6">
                <img class="img-grayscale w-75" src="images/logo6.png" />
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Clients") &&
    bm.add("client3", {
      label: `<img src="images/block-clients3.png" height="40px" width="60px"/>`,
      category: opt.categoryClients,
      content: `<section class="container-fluid py-3 my-3">
    <div class="row w-75 mx-auto">
    <div class="col-6">
    <h5 class="text-center p-3">Trusted by Great Companies</h5>
    <div class="row container mx-auto">
    <div class="col-xs-6 col-sm-4"><img src="images/logo1.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4"><img src="images/logo2.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4"><img src="images/logo3.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4"><img src="images/logo4.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4"><img src="images/logo5.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4"><img src="images/logo6.png" style="height:100px;width:100px;"/></div>
    </div>
    </div>
    <div class="col-6">
    <div class="p-2 my-2 bg-dark text-white">Small Business</div>
    <div class="p-2 mb-2 bg-dark text-white">SME</div>
    <div class="p-2 mb-2 bg-dark text-white">E Commerce</div>
    </div>
    </div>
    </section>`,
    });

  toAdd("Clients") &&
    bm.add("client4", {
      label: `<img src="images/block-clients4.png" height="40px" width="60px"/>`,
      category: opt.categoryClients,
      content: `<section class="container py-3 my-3">
    <div class="row">
    <div class="col-xs-3 col-sm-3">
    <h4 style="color:#dc659b;font-size:36px;">200%</h4>
    <div class="font-italic">Faster page speed</div>
    <p>With Versoly your pages load 10 times faster. Users never have to wait for a page to load.</p>
    </div>
    <div class="col-xs-3 col-sm-3">
    <h4 style="color:#dc659b;font-size:36px;">40%</h4>
    <div class="font-italic">Increase in sales</div>
    <p>A faster loading page will increase sales due to less visitors leaving before the page loads.</p>
    </div>
    <div class="col-xs-3 col-sm-3">
    <h4 style="color:#dc659b;font-size:36px;">25%</h4>
    <div class="font-italic">Increased Conversion</div>
    <p>Even a second in delay for mobile page load times can reduce conversions.</p>
    </div>
    <div class="col-xs-3 col-sm-3">
    <h4 style="color:#dc659b;font-size:36px;">95%</h4>
    <div class="font-italic">Customer satisfaction</div>
    <p>Our customers love the boost in conversions they get.</p>
    </div>
    </div>
    </section>`,
    });

  toAdd("Clients") &&
    bm.add("client5", {
      label: `<img src="images/block-clients5.png" height="40px" width="60px"/>`,
      category: opt.categoryClients,
      content: `<section class="container-fluid py-3 my-3">
    <div class="row w-75 mx-auto">
    <div class="col-xs-3 col-sm-3">
    <h4 class="font-weight-bold text-center" style="color:#dc659b;font-size:36px;">2010</h4>
    <p class="font-weight-light text-center">9 years old</p>
    </div>
    <div class="col-xs-3 col-sm-3">
    <h4 class="font-weight-bold text-center" style="color:#dc659b;font-size:36px;">9300+</h4>
    <p class="font-weight-light text-center">Customers</p>
    </div>
    <div class="col-xs-3 col-sm-3">
    <h4 class="font-weight-bold text-center" style="color:#dc659b;font-size:36px;">110K</h4>
    <p class="font-weight-light text-center">Hosted Websites</p>
    </div>
    <div class="col-xs-3 col-sm-3">
    <h4 class="font-weight-bold text-center" style="color:#dc659b;font-size:36px;">4.8/5</h4>
    <p class="font-weight-light text-center">Customer Rating</p>
    </div>
    </div>
    </section>`,
    });

  toAdd("Steps") &&
    bm.add("step1", {
      label: `<img src="images/block-step1.png" height="40px" width="60px"/>`,
      category: opt.categorySteps,
      content: `<section class="jumbotron bg-transparent" id="steps">
      <div class="container my-5">
          <h2 class="text-center">How It Works</h2>
          <div class="steps my-5">
              <div class="row steps-row">
                  <div class="steps-step col-4">
                      <button type="button" class="btn btn-primary btn-circle">1</button>
                      <p>Pick a Template</p>
                  </div>
                  <div class="steps-step col-4">
                      <button type="button" class="btn btn-primary btn-circle">2</button>
                      <p>Customise it</p>
                  </div>
                  <div class="steps-step col-4">
                      <button type="button" class="btn btn-primary btn-circle" disabled="">3</button>
                      <p>Publish it</p>
                  </div>
              </div>
          </div>
          <div class="row row-eq-height">
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-media">
                          <img src="https://via.placeholder.com/500x300" class="img-fluid" />
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-media">
                          <img src="https://via.placeholder.com/500x300" class="img-fluid" />
                      </div>
                  </div>
              </div>
              <div class="col-md-4">
                  <div class="card">
                      <div class="card-media">
                          <img src="https://via.placeholder.com/500x300" class="img-fluid" />
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Steps") &&
    bm.add("step2", {
      label: `<img src="images/block-step2.png" height="40px" width="60px"/>`,
      category: opt.categorySteps,
      content: `<section class="jumbotron bg-transparent" id="steps">
    <div class="container my-5">
        <h2 class="text-center pb-5">How It Works</h2>
        <div class="container py-2">
            <div class="row no-gutters pb-5">
                <div class="col-sm">
                    <div class="card">
                        <div class="card-media">
                            <img src="https://via.placeholder.com/500x300" class="img-fluid" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <h5 class="m-2">
                        <button type="button" class="btn btn-primary btn-circle">1</button>
                    </h5>
                    <div class="row h-100">
                        <div class="col border-right">&nbsp;</div>
                        <div class="col">&nbsp;</div>
                    </div>
                </div>
                <div class="col-sm py-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Pick a Template</h4>
                            <p class="card-text">Etiam non quam pulvinar, lobortis quam eu, accumsan justo. Fusce tempor ipsum lacus. Aenean fringilla malesuada augue, eget pharetra sapien tincidunt a. Suspendisse eget tellus leo. Duis elementum mattis ligula sit amet rhoncus. Duis vitae mauris nulla. Vivamus quis dignissim velit, id pellentesque justo. Etiam vitae lectus varius, luctus.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters pb-5">
                <div class="col-sm py-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Customise it</h4>
                            <p class="card-text">Etiam non quam pulvinar, lobortis quam eu, accumsan justo. Fusce tempor ipsum lacus. Aenean fringilla malesuada augue, eget pharetra sapien tincidunt a. Suspendisse eget tellus leo. Duis elementum mattis ligula sit amet rhoncus. Duis vitae mauris nulla. Vivamus quis dignissim velit, id pellentesque justo. Etiam vitae lectus varius, luctus.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <h5 class="m-2">
                        <button type="button" class="btn btn-primary btn-circle">2</button>
                    </h5>
                    <div class="row h-100">
                        <div class="col border-right">&nbsp;</div>
                        <div class="col">&nbsp;</div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="card-media">
                            <img src="https://via.placeholder.com/500x300" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters pb-5">
                <div class="col-sm">
                    <div class="card">
                        <div class="card-media">
                            <img src="https://via.placeholder.com/500x300" class="img-fluid" />
                        </div>
                    </div>
                </div>
                <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <h5 class="m-2">
                        <button type="button" class="btn btn-primary btn-circle">3</button>
                    </h5>
                    <div class="row h-100">
                        <div class="col border-right">&nbsp;</div>
                        <div class="col">&nbsp;</div>
                    </div>
                </div>
                <div class="col-sm py-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Add Integrations</h4>
                            <p>Etiam non quam pulvinar, lobortis quam eu, accumsan justo. Fusce tempor ipsum lacus. Aenean fringilla malesuada augue, eget pharetra sapien tincidunt a. Suspendisse eget tellus leo. Duis elementum mattis ligula sit amet rhoncus. Duis vitae mauris nulla. Vivamus quis dignissim velit, id pellentesque justo. Etiam vitae lectus varius, luctus.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row no-gutters pb-5">
                <div class="col-sm py-2">
                    <div class="card">
                        <div class="card-body">
                            <h4 class="card-title">Publish It</h4>
                            <p>Etiam non quam pulvinar, lobortis quam eu, accumsan justo. Fusce tempor ipsum lacus. Aenean fringilla malesuada augue, eget pharetra sapien tincidunt a. Suspendisse eget tellus leo. Duis elementum mattis ligula sit amet rhoncus. Duis vitae mauris nulla. Vivamus quis dignissim velit, id pellentesque justo. Etiam vitae lectus varius, luctus.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-1 text-center flex-column d-none d-sm-flex">
                    <h5 class="m-2">
                        <button type="button" class="btn btn-primary btn-circle">4</button>
                    </h5>
                    <div class="row h-100">
                        <div class="col border-right">&nbsp;</div>
                        <div class="col">&nbsp;</div>
                    </div>
                </div>
                <div class="col-sm">
                    <div class="card">
                        <div class="card-media">
                            <img src="https://via.placeholder.com/500x300" class="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Steps") &&
    bm.add("step3", {
      label: `<img src="images/block-step3.png" height="40px" width="60px"/>`,
      category: opt.categorySteps,
      content: `<section id="steps" class="jumbotron bg-transparent">
    <div class="container">
        <div class="zig">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-7 col-xl-7">
                    <h2 class="section_title">Simple, Secure and Fast</h2>
                    <p class="intro-description">Create a beautiful landing page that converts effortlessly, while we handle the design and hosting for you.</p>
                    <div class="step mt-5">
                        <div>
                            <div class="circle bg-primary">1</div>
                        </div>
                        <div>
                            <h3>Pick a Template</h3>
                            <p>We have designed SaaS templates that are focused on converting visitors to users.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div>
                            <div class="circle bg-primary">2</div>
                        </div>
                        <div>
                            <h3>Customise it</h3>
                            <p>We have a simple but powerful editor that will allow you to make changes quickly.</p>
                        </div>
                    </div>
                    <div class="step">
                        <div>
                            <div class="circle bg-primary">3</div>
                        </div>
                        <div>
                            <h3>Publish It</h3>
                            <p>We handle hosting for you, we use Amazon Web Services (AWS) for all our services.</p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-5 col-xl-5 pt-5 mt-5">
                    <img class="zig-image img-fluid mx-auto" src="https://cdn.versoly.com/img/website_setup.svg" title="Cross Care Seeker" alt="Take Charge of the Care You Receive" />
                </div>
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Buttons") &&
    bm.add("button1", {
      label: `<img src="images/block-button1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryButtons,
      content: `<a href="#" class="btn text-decoration-none p-3 text-light" style="background-color:#dc659b;">
    Button
  </a>`,
    });

  toAdd("Buttons") &&
    bm.add("button2", {
      label: `<img src="images/block-button2.jpg" height="40px" width="60px"/>`,
      category: opt.categoryButtons,
      content: `<a href="#" class="btn text-decoration-none p-3 text-light" style="background-color:#dc659b;border-radius:20px">
    Button
  </a>`,
    });

  toAdd("Buttons") &&
    bm.add("button3", {
      label: `<img src="images/block-button4.jpg" height="40px" width="60px"/>`,
      category: opt.categoryButtons,
      content: `<a href="#" class="btn text-decoration-none p-3 border" style="color:#dc659b;border-radius:20px; border-color:#dc659b;">
    Button
  </a>`,
    });

  toAdd("Buttons") &&
    bm.add("button4", {
      label: `<img src="images/block-button3.jpg" height="40px" width="60px"/>`,
      category: opt.categoryButtons,
      content: `<a href="#" class="btn text-decoration-none p-3 border" style="color:#dc659b;border-color:#dc659b;">
    Button
  </a>`,
    });

  // toAdd('Buttons') && bm.add('button5', {
  //   label: `<img src="images/block-button5.jpg" height="40px" width="60px"/>
  //           <div>${c.button5}<div>`,
  //   category: opt.categoryButtons,
  //   content: `<a href="#" class="btn text-decoration-none" style="background-image:url(images/block-button5.jpg)"></a>`,
  // });

  // toAdd('Buttons') && bm.add('button6', {
  //   label: `<img src="images/block-button6.jpg" height="40px" width="60px"/>
  //           <div>${c.button6}<div>`,
  //   category: opt.categoryButtons,
  //   content: `<a href="#" class="btn text-decoration-none" style="background-image:url(images/block-button6.jpg)"></a>`,
  // });

  toAdd("CalltoAction") &&
    bm.add("calltoAction1", {
      label: `<img src="images/block-cta1.png" height="40px" width="60px"/>`,
      category: opt.categoryCallToActions,
      content: `<section class="container-fluid p-5 my-3">
    <div class="container">
    <h3 class="text-center p-1">Ready to boost your sign-ups?</h3>
    <div class="text-center p-1">Try it free. No credit card required. Instant set-up.</div>
    <form class="d-flex justify-content-center flex-column">
    <a href="#" class="btn text-decoration-none p-3 text-light text-center w-25 align-self-center mt-3" style="background-color:#dc659b;">Sign Up Free</a>
    <a class="m-3 p-3 w-50 align-self-center text-center" href="#" style="color:#dc659b;">Schedule a demo</a>
    </form>
    </div>
    </section>`,
    });

  toAdd("CalltoAction") &&
    bm.add("calltoAction2", {
      label: `<img src="images/block-cta2.png" height="40px" width="60px"/>`,
      category: opt.categoryCallToActions,
      content: `<section class="container-fluid p-5 my-3">
    <div class="row">
    <div class="col">
    <h3 class="text-center p-1">Ready to boost your sign-ups?</h3>
    <div class="text-center p-1">Try it free. No credit card required. Instant set-up.</div>
    </div>
    <div class="col">
    <div class="d-flex justify-content-center align-items-center">
    <a href="#" class="btn text-decoration-none p-3 text-light text-center m-1" style="background-color:#dc659b;">Sign Up Free</a>
    <a href="#" class="btn text-decoration-none p-3 text-light text-center m-1" style="background-color:#dc659b;">Schedule a Demo</a>
    </div>
    </div>
    </div>
    </section>`,
    });

  toAdd("CalltoAction") &&
    bm.add("calltoAction3", {
      label: `<img src="images/block-cta3.png" height="40px" width="60px"/>`,
      category: opt.categoryCallToActions,
      content: `<section class="container-fluid p-5 my-3">
    <div class="container">
    <h3 class="text-center p-1">See why 100,000 users from 1700 businesses worldwide trust Rapidgrow</h3>
    <form class="d-flex justify-content-center align-items-center">
    <a href="#" class="btn text-decoration-none p-3 text-light text-center w-25 align-self-center m-1" style="background-color:#dc659b;">Schedule a demo</a>
    <a href="#" class="btn text-decoration-none p-3 text-light text-center w-25 align-self-center m-1" style="background-color:#dc659b;">Start Now</a>
    </form>
    </div>
    </section>`,
    });

  toAdd("CalltoAction") &&
    bm.add("calltoAction4", {
      label: `<img src="images/block-cta4.png" height="40px" width="60px"/>`,
      category: opt.categoryCallToActions,
      content: `<section class="jumbotron bg-transparent" id="cta">
    <div class="container">
    <div class="row">
        <div class="col mx-auto">
            <div class="card bg-secondary rounded-1">
                <div class="card-body">
                    <div class="row text-white">
                        <div class="col-md-6 p-5">
                            <h1>
                                <b>Get GrowRapid</b>
                            </h1>
                            <h4 class="mb-5">Create a beautiful landing page.</h4>
                            <a class="btn btn-info btn-lg" href="#">Try Now</a>
                        </div>
                        <div class="col-md-6">
                            <img src="https://cdn.versoly.com/img/all_devices.png" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</section>`,
    });

  toAdd("Pricing") &&
    bm.add("pricing1", {
      label: `<img src="images/block-pricing1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryPricing,
      content: `<section class="container-fluid">
    <h2 class="p-2 text-center my-3">Pricing Plan</h2>
    <div class="row">
    <div class="col">${priceChart}</div>
    <div class="col">${priceChart}</div>
    <div class="col">${priceChart}</div>
    </div>
    </section>`,
    });

  toAdd("Pricing") &&
    bm.add("pricing2", {
      label: `<img src="images/block-pricing1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryPricing,
      content: `<section class="jumbotron bg-transparent" id="pricing">
      <div class="container">
          <div class="col">
              <header class="text-center w-md-50 mx-auto mb-8">
                  <h2 class="h1">Our Pricing</h2>
                  <p class="h5">Pay yearly and get constant updates with new blocks, templates and recommendations on how to increase conversions.</p>
              </header>
          </div>
          <div class="col mt-4 text-center">
              <button class="btn btn-dark rounded-0 font-weight-bold" id="annual-pricing-button">Annual</button>
              <button class="btn btn-light rounded-0 border font-weight-bold" id="monthly-pricing-button">Monthly</button>
          </div>
          <div class="row row-eq-height">
              <div class="col-md-4 my-5">
                  <div class="card">
                      <div class="card-header p-4 text-center">
                          <h3 class="m-0">Free</h3>
                      </div>
                      <div class="card-body text-center py-5 bg-light">
                          <h2 class="d-block h1 mt-0 mb-4 font-weight-bold display-4">$<span data-monthly="0" data-annual="0">0</span>
                              <small class="lead">/mo</small>
                          </h2>
                      </div>
                      <div class="card-list">
                          <ul class="list-group text-center">
                              <li class="list-group-item">Unlimited Websites</li>
                              <li class="list-group-item">50 Blocks+</li>
                              <li class="list-group-item">5 Templates</li>
                              <li class="list-group-item">Single Page</li>
                          </ul>
                      </div>
                      <div class="card-body text-center">
                          <a class="btn btn-lg btn-block btn-secondary" href="https://app.versoly.com">Get Started Now</a>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 my-5">
                  <div class="card">
                      <div class="card-header p-4 text-center text-white bg-primary">
                          <h3 class="m-0">Startup</h3>
                      </div>
                      <div class="card-body text-center py-5 text-white bg-primary">
                          <h2 class="d-block h1 mt-0 mb-4 font-weight-bold display-4">$<span data-monthly="15" data-annual="12">12</span>
                              <small class="lead">/mo</small>
                          </h2>
                      </div>
                      <div class="card-list">
                          <ul class="list-group text-center">
                              <li class="list-group-item">3 Custom Domains</li>
                              <li class="list-group-item">Pro Blocks</li>
                              <li class="list-group-item">Remove Branding</li>
                              <li class="list-group-item">Site Export</li>
                          </ul>
                      </div>
                      <div class="card-body text-center text-primary">
                          <a class="btn btn-lg btn-block btn-primary text-white" href="https://app.versoly.com">Get Started Now</a>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 my-5">
                  <div class="card">
                      <div class="card-header p-4 text-center">
                          <h3 class="m-0">Agency</h3>
                      </div>
                      <div class="card-body text-center py-5 bg-light">
                          <h2 class="d-block h1 mt-0 mb-4 font-weight-bold display-4">$<span data-monthly="120" data-annual="83">83</span>
                              <small class="lead">/mo</small>
                          </h2>
                      </div>
                      <div class="card-list">
                          <ul class="list-group text-center">
                              <li class="list-group-item">A/B Testing</li>
                              <li class="list-group-item">AI Adivisor/Editor</li>
                              <li class="list-group-item">Form Creator</li>
                              <li class="list-group-item">Segmented Pages</li>
                          </ul>
                      </div>
                      <div class="card-body text-center">
                          <a class="btn btn-lg btn-block btn-secondary" href="https://app.versoly.com">Get Started Now</a>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Pricing") &&
    bm.add("pricing3", {
      label: `<img src="images/block-pricing1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryPricing,
      content: `<<section class="jumbotron bg-transparent" id="pricing">
      <div class="container">
          <div class="row">
              <div class="col-md-6 offset-md-3 text-center">
                  <h1>Choose Your Plan</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
          </div>
          <div class="row">
              <div class="col mt-4 text-center">
                  <button class="btn btn-dark rounded-0 font-weight-bold" id="annual-pricing-button">Annual</button>
                  <button class="btn btn-light rounded-0 border font-weight-bold" id="monthly-pricing-button">Monthly</button>
              </div>
          </div>
          <div class="row row-eq-height">
              <div class="col-md-4 my-5">
                  <div class="card">
                      <div class="card-body p-4 text-center">
                          <h1>Free</h1>
                          <div class="display-3 my-4">
                              <i class="fa fa-server"></i>
                          </div>
                          <h2 class="d-block h1 mt-0 mb-4 font-weight-bold display-4">$<span data-monthly="0" data-annual="0">0</span>
                              <small class="lead">/mo</small>
                          </h2>
                          <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div>
                              <a class="btn btn-lg btn-secondary" href="/#">Try Now</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 my-5">
                  <div class="card">
                      <div class="card-body p-4 text-center text-primary">
                          <h1>Startup</h1>
                          <div class="display-3 my-4">
                              <i class="fa fa-server"></i>
                          </div>
                          <h2 class="d-block h1 mt-0 mb-4 font-weight-bold display-4">$<span data-monthly="15" data-annual="12">12</span>
                              <small class="lead">/mo</small>
                          </h2>
                          <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div>
                              <a class="btn btn-lg btn-primary" href="/#">Try Now</a>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-4 my-5">
                  <div class="card">
                      <div class="card-body p-4 text-center">
                          <h1>Agency</h1>
                          <div class="display-3 my-4">
                              <i class="fa fa-server"></i>
                          </div>
                          <h2 class="d-block h1 mt-0 mb-4 font-weight-bold display-4">$<span data-monthly="120" data-annual="83">83</span>
                              <small class="lead">/mo</small>
                          </h2>
                          <p class="mb-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                          <div>
                              <a class="btn btn-lg btn-secondary" href="/#">Try Now</a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Pricing") &&
    bm.add("pricing4", {
      label: `<img src="images/block-pricing1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryPricing,
      content: `<section class="jumbotron bg-transparent" id="pricing">
      <div class="container">
          <div class="row">
              <div class="col-lg-8 text-center mb-5 mx-auto">
                  <h2 class="display-4 font-weight-bold">Our Pricing</h2>
                  <p class="lead font-weight-bold">No additional costs. Pay only fixed monthly fee and the rest we will handle for you!</p>
              </div>
              <div class="row align-items-lg-center">
                  <div class="col-lg-8 col-md-7">
                      <div class="row mr-md-4 mb-lg-5">
                          <div class="col-lg-6 mb-5">
                              <div class="display-4 text-primary mb-2">
                                  <i class="far fa-life-ring"></i>
                              </div>
                              <h4>24/7 Friendly Support</h4>
                              <p class="mb-0">Our over 30 full-time experienced folks ready to help you anytime with any issues. Chat with us anytime.</p>
                          </div>
                          <div class="col-lg-6 mb-5">
                              <div class="display-4 text-primary mb-2">
                                  <i class="fas fa-bug"></i>
                              </div>
                              <h4>AI Autofix</h4>
                              <p class="mb-0">Now, your server never shuts down. Our AI technology solves any issues on the server side and fixes instantly.</p>
                          </div>
                      </div>
                      <div class="row mr-md-4">
                          <div class="col-lg-6 mb-5 mb-lg-0">
                              <div class="display-4 text-primary mb-2">
                                  <i class="fas fa-fire"></i>
                              </div>
                              <h4>Instant Results</h4>
                              <p class="mb-0">No need to wait until your data is updated, now it will be updated instantly.</p>
                          </div>
                          <div class="col-lg-6 mb-5 mb-lg-0">
                              <div class="display-4 text-primary mb-2">
                                  <i class="far fa-gem"></i>
                              </div>
                              <h4>No additional costs</h4>
                              <p class="mb-0">Choose the most suitable service for your needs with monthly fixed price.</p>
                          </div>
                      </div>
                  </div>
                  <div class="col-md-4 my-5">
                      <div class="card">
                          <div class="card-body p-4 text-center">
                              <h2 class="d-block text-bold mb-5">$15 <small>per month</small>
                              </h2>
                              <div>
                                  <ul class="list-unstyled mb-5">
                                      <li class="mb-4">200GB of Space</li>
                                      <li class="mb-4">Unlimited Traffic</li>
                                      <li class="mb-4">Online Support</li>
                                      <li class="mb-4">24 hour Support</li>
                                  </ul>
                                  <a class="btn btn-primary btn-lg" href="#">Order Now</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Pricing") &&
    bm.add("pricing5", {
      label: `<img src="images/block-pricing1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryPricing,
      content: `<section class="jumbotron bg-transparent" id="pricing">
      <div class="container">
          <header class="text-center w-md-50 mx-auto">
              <h2 class="h1">Our Pricing</h2>
              <p class="h5">No additional costs. Pay only fixed monthly fee and the rest we will handle for you!</p>
          </header>
          <div class="row">
              <div class="col mt-4 text-center">
                  <button class="btn btn-dark rounded-0 font-weight-bold" id="annual-pricing-button">Annual</button>
                  <button class="btn btn-light rounded-0 border font-weight-bold" id="monthly-pricing-button">Monthly</button>
              </div>
          </div>
          <table class="table text-center mt-5 d-none d-lg-table">
              <tbody>
                  <tr>
                      <th scope="row" class="border-0"></th>
                      <td class="text-center border-0">
                          <h2 class="font-weight-light">Free</h2>
                          <h2 class="d-block font-weight-bold my-3">$<span data-monthly="0" data-annual="0">0</span>
                              <small class="lead">/mo</small>
                          </h2>
                          <p>
                              <a href="#" class="btn btn-outline-primary">Buy Now</a>
                          </p>
                      </td>
                      <td class="text-center border-0">
                          <h2 class="font-weight-light">Startup</h2>
                          <h2 class="d-block font-weight-bold my-3">$<span data-monthly="15" data-annual="12">12</span>
                              <small class="lead">/mo</small>
                          </h2>
                          <p>
                              <a href="#" class="btn btn-outline-primary">Buy Now</a>
                          </p>
                      </td>
                      <td class="text-center border-0">
                          <h2 class="font-weight-light">Growth</h2>
                          <h2 class="d-block font-weight-bold my-3">$<span data-monthly="120" data-annual="83">83</span>
                              <small class="lead">/mo</small>
                          </h2>
                          <p>
                              <a href="#" class="btn btn-primary">Buy Now</a>
                          </p>
                      </td>
                      <td class="text-center border-0">
                          <h2 class="font-weight-light">Enterprise</h2>
                          <h2 class="d-block my-3">Call Us</h2>
                          <p>
                              <a href="#" class="btn btn-outline-primary">Contact</a>
                          </p>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Support</th>
                      <td>3 months</td>
                      <td>6 months</td>
                      <td>12 months</td>
                      <td>Custom</td>
                  </tr>
                  <tr>
                      <th scope="row">Full source code</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Intranet</th>
                      <td></td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Downloadable Software</th>
                      <td></td>
                      <td></td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
              </tbody>
          </table>
          <table class="table text-center mt-5 d-table d-lg-none">
              <tbody>
                  <tr>
                      <td class="text-center border-0" colspan="2">
                          <h2 class="font-weight-light">Hobby</h2>
                          <p class="h2">$99</p>
                          <p>
                              <a href="#" class="btn btn-outline-primary">Buy Now</a>
                          </p>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Support</th>
                      <td>3 months</td>
                  </tr>
                  <tr>
                      <th scope="row">Full source code</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Intranet</th>
                      <td></td>
                  </tr>
                  <tr>
                      <th scope="row">Downloadable Software</th>
                      <td></td>
                  </tr>
                  <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                  </tr>
                  <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          <table class="table text-center mt-5 d-table d-lg-none">
              <tbody>
                  <tr>
                      <td class="text-center" colspan="2">
                          <h2 class="font-weight-light">Professional</h2>
                          <p class="h2">$399</p>
                          <p>
                              <a href="#" class="btn btn-outline-primary">Buy Now</a>
                          </p>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Support</th>
                      <td>6 months</td>
                  </tr>
                  <tr>
                      <th scope="row">Full source code</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Intranet</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Downloadable Software</th>
                      <td></td>
                  </tr>
                  <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                  </tr>
                  <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          <table class="table text-center mt-5 d-table d-lg-none">
              <tbody>
                  <tr>
                      <td class="text-center" colspan="2">
                          <h2 class="font-weight-light">Business</h2>
                          <p class="h2">$899</p>
                          <p>
                              <a href="#" class="btn btn-primary">Buy Now</a>
                          </p>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Support</th>
                      <td>12 months</td>
                  </tr>
                  <tr>
                      <th scope="row">Full source code</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Intranet</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Downloadable Software</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Redistribute</th>
                      <td></td>
                  </tr>
                  <tr>
                      <th scope="row">Custom code</th>
                      <td></td>
                  </tr>
              </tbody>
          </table>
          <table class="table text-center mt-5 d-table d-lg-none">
              <tbody>
                  <tr>
                      <td class="text-center" colspan="2">
                          <h2 class="font-weight-light">Enterprise</h2>
                          <p class="h2">Call us</p>
                          <p>
                              <a href="#" class="btn btn-outline-primary">Contact</a>
                          </p>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Support</th>
                      <td>Custom</td>
                  </tr>
                  <tr>
                      <th scope="row">Full source code</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">SaaS / Subscription</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Intranet</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Downloadable Software</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Redistribute</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
                  <tr>
                      <th scope="row">Custom code</th>
                      <td>
                          <i class="fa fa-check mr-2"></i>
                      </td>
                  </tr>
              </tbody>
          </table>
      </div>
  </section>`,
    });

  toAdd("Teams") &&
    bm.add("team1", {
      label: `<img src="images/block-team1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryTeams,
      content: `<section class="container">
    <h2 class="p-2 text-center">Meet Our Team</h2>
    <div class="row">
    <div class="col m-3">${team}</div>
    <div class="col m-3">${team}</div>
    <div class="col m-3">${team}</div>
    </div>
    </section>`,
    });

  toAdd("Teams") &&
    bm.add("team2", {
      label: `<img src="images/block-team2.jpg" height="40px" width="60px"/>`,
      category: opt.categoryTeams,
      content: `<section class="container">
    <h2 class="p-2 text-center">Meet Our Team</h2>
    <div class="row">
    <div class="col m-3">${teamCard}</div>
    <div class="col m-3">${teamCard}</div>
    </div>
    </section>`,
    });

  toAdd("Testimonials") &&
    bm.add("testimonial4", {
      label: `<img src="images/block-testim1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryTestimonials,
      content: `<section class="jumbotron bg-transparent" id="testimonials">
      <div class="container">
          <div class="row text-center justify-content-center">
              <div class="col-md-10 col-lg-8 col-xl-7">
                  <h1>Testimonials</h1>
                  <p class="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas finibus tincidunt velit vitae pellentesque. Morbi dapibus libero sed orci pretium dapibus. Etiam bibendum aliquet ex vitae accumsan.</p>
              </div>
          </div>
          <div class="row mt-5 align-items-center justify-content-center">
              <div class="col-md-8 col-lg-4">
                  <div class="card p-5">
                      <div class="row no-gutters align-items-center">
                          <div class="col-3">
                              <img alt="image" class="img-fluid rounded" src="https://cdn.versoly.com/img/headshot-man-1.jpg" />
                          </div>
                          <div class="col-8 ml-auto">
                              <p>
                                  <strong>Corey Jacobson</strong>
                                  <br />
                                  <em>Co-founder</em>
                              </p>
                          </div>
                      </div>
                      <div class="row mt-4">
                          <div class="col-12">
                              <p class="lead">"Sed sodales tincidunt mi ut aliquam. Nulla facilisi. Quisque elementum dui et dapibus pellentesque. Aliquam erat volutpat. Morbi interdum, neque vitae iaculis ultrices, turpis ipsum dignissim leo."</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-8 col-lg-4 mt-4 mt-lg-0">
                  <div class="card p-5">
                      <div class="row no-gutters align-items-center">
                          <div class="col-3">
                              <img alt="image" class="img-fluid rounded" src="https://cdn.versoly.com/img/headshot-woman-1.jpg" />
                          </div>
                          <div class="col-8 ml-auto">
                              <p>
                                  <strong>Rhiana Bostock</strong>
                                  <br />
                                  <em>Head of Marketing</em>
                              </p>
                          </div>
                      </div>
                      <div class="row mt-4">
                          <div class="col-12">
                              <p class="lead">"Pellentesque iaculis vestibulum convallis. Vestibulum nec risus tincidunt, eleifend lacus a, rhoncus elit. Ut tellus urna, malesuada eu faucibus nec, consequat vel elit. Curabitur nec tristique nunc."</p>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="col-md-8 col-lg-4 mt-4 mt-lg-0">
                  <div class="card p-5">
                      <div class="row no-gutters align-items-center">
                          <div class="col-3">
                              <img alt="image" class="img-fluid rounded" src="https://cdn.versoly.com/img/headshot-man-2.jpg" />
                          </div>
                          <div class="col-8 ml-auto">
                              <p>
                                  <strong>Bobby O'Sullivan</strong>
                                  <br />
                                  <em>Growth Hacker</em>
                              </p>
                          </div>
                      </div>
                      <div class="row mt-4">
                          <div class="col-12">
                              <p class="lead">"Fusce sed est nec purus condimentum tincidunt. Curabitur felis justo, imperdiet eget vehicula vel, congue sed augue. Suspendisse et eleifend odio, vitae tempor magna. Mauris sed lectu."</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Testimonials") &&
    bm.add("testimonial3", {
      label: `<img src="images/block-testim1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryTestimonials,
      content: `<section class="jumbotron bg-transparent" id="testimonials">
      <div class="container split-bg-primary p-5 rounded-lg">
          <div class="row px-5 pt-4 pb-5">
              <div class="col-12 m-b-10">
                  <h2 class="text-white mb-4 font-weight-bold">Happy Customers</h2>
              </div>
              <div class="col-lg-6">
                  <img src="https://cdn.versoly.com/img/test_face.jpg" alt="Happy Customers" class="img-fluid rounded-lg shadow" />
              </div>
              <div class="col-lg-6">
                  <div class="pl-lg-5 mt-4">
                      <h4 class="font-weight-bold">"I really enjoyed using this platform it benefited me a lot and I was able to save a lot of time and money than other software I had used."</h4>
                      <span class="font-weight-bold">John K. Jeffers</span>
                      <br />
                      <small>ACME Corporation</small>
                      <button class="btn btn-secondary btn-lg mt-3 d-block">Learn more</button>
                  </div>
              </div>
          </div>
      </div>
  </section>`,
    });

  toAdd("Testimonials") &&
    bm.add("testimonial2", {
      label: `<img src="images/block-testim2.jpg" height="40px" width="60px"/>`,
      category: opt.categoryTestimonials,
      content: `<div class="container-fluid p-3" style="background-color: #eee">
    <div class="row  mx-auto">
    <div class="col">
    <div class="row" style="background-color: white">
    <div class="col-4">
    <img src="images/testim1.jpg" class="card-img-top border rounded-circle m-2" alt="Circular Image">
    </div>
    <div class="col-8">
    <h4 class="card-title p-2 text-center">John Doe</h4>
    <h5 class="card-title p-2 text-center">CEO and Founder</h5>
    <p class="card-text p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div class="d-flex flex-row justify-content-center">
    <div class="fa fa-google" aria-hidden="true"></div>
    <div class="fa fa-twitter" aria-hidden="true"></div>
    <div class="fa fa-facebook-square" aria-hidden="true"></div>
    </div>
    </div>
    </div>
    </div>
    <div class="col">
    <div class="row" style="background-color: white">
    <div class="col-4">
    <img src="images/testim1.jpg" class="card-img-top border rounded-circle m-2" alt="Circular Image">
    </div>
    <div class="col-8">
    <h4 class="card-title p-2 text-center">John Doe</h4>
    <h5 class="card-title p-2 text-center">CEO and Founder</h5>
    <p class="card-text p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div class="d-flex flex-row justify-content-center">
    <div class="fa fa-google" aria-hidden="true"></div>
    <div class="fa fa-twitter" aria-hidden="true"></div>
    <div class="fa fa-facebook-square" aria-hidden="true"></div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>`,
    });

  // toAdd('Testimonials') && bm.add('testimonial3', {
  //   label: `<img src="images/block-testim3.jpg" height="40px" width="60px"/>
  //           <div>${c.testimonial3}<div>`,
  //   category: opt.categoryTestimonials,
  //   content: ``,
  // });

  toAdd("Testimonials") &&
    bm.add("testimonial6", {
      label: `<img src="images/block-testim4.jpg" height="40px" width="60px"/>`,
      category: opt.categoryTestimonials,
      content: `<div class="container-fluid py-5" style="background-color: #eee"><div class="row w-75 mx-auto " style="background-color:white">
    <div class="col-4">
    <img src="images/testim1.jpg" class="card-img-top border rounded-circle m-2" alt="Circular Image">
    </div>
    <div class="col-8">
    <h4 class="card-title p-2 text-center">John Doe</h4>
    <h5 class="card-title p-2 text-center">CEO and Founder</h5>
    <p class="card-text p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    <div class="d-flex flex-row justify-content-center">
    <div class="fa fa-google" aria-hidden="true"></div>
    <div class="fa fa-twitter" aria-hidden="true"></div>
    <div class="fa fa-facebook-square" aria-hidden="true"></div>
    </div>
    </div>
    </div>
    </div>`,
    });

  // toAdd('Testimonials') && bm.add('testimonial5', {
  //   label: `<img src="images/block-testim5.jpg" height="40px" width="60px"/>
  //           <div>${c.testimonial5}<div>`,
  //   category: opt.categoryTestimonials,
  //   content: ``,
  // });

  toAdd("Forms") &&
    bm.add("Form1", {
      label: `<img src="images/block-form1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryForms,
      content: `<div class="container-fluid d-flex justify-content-center flex-column p-3">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-center">Subscribe</h5>
    <form class="form-inline d-flex justify-content-center">
    <input class="form-control mr-sm-2" type="email" placeholder="Email" aria-label="Search">
    <button class="btn my-2 my-sm-0 text-light" style="background-color:#dc659b;" type="submit">Submit</button>
    </form>
    <div class="text-center">Find us on <a style="color:#dc659b;" href="#">Facebook</a> and <a style="color:#dc659b;" href="#">Twitter</a></div>
    </div>`,
    });

  toAdd("Forms") &&
    bm.add("Form2", {
      label: `<img src="images/block-form3.jpg" height="40px" width="60px"/>`,
      category: opt.categoryForms,
      content: `<div class="container d-flex justify-content-center flex-column p-3">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-center">Subscribe</h5>
    <p class="text-center m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<p>
    <form class="form-inline d-flex justify-content-around">
    <input class="form-control" type="text" placeholder="First Name" aria-label="Search">
    <input class="form-control " type="text" placeholder="Last Name" aria-label="Search">
    <button class="btn text-light" style="background-color:#dc659b;" type="submit">Submit</button>
    </form>
    <div class="text-center">Find us on <a style="color:#dc659b;" href="#">Facebook</a> and <a style="color:#dc659b;" href="#">Twitter</a></div>
    </div>`,
    });

  toAdd("Forms") &&
    bm.add("Form3", {
      label: `<img src="images/block-form2.jpg" height="40px" width="60px"/>`,
      category: opt.categoryForms,
      content: `<div class="container d-flex justify-content-center flex-column p-3">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-center">Register</h5>
    <p class="text-center m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<p>
    <form>
    <div class="form-group">
    <label for="exampleForm1">Full Name</label>
    <input class="form-control" id="exampleForm1" type="text" placeholder="full name" aria-label="Search">
    </div>
    <div class="form-group">
    <label for="exampleFormControlSelect2">Email</label>
    <input class="form-control " id="exampleFormControlSelect2" type="email" placeholder="email" aria-label="Search">
    </div>
    <div class="form-group">
    <label for="exampleFormControlSelect3">Password</label>
    <input class="form-control " id="exampleFormControlSelect3" type="password" placeholder="password" aria-label="Search">
    </div>
    <div>
    <button class="btn text-light" style="background-color:#dc659b;" type="submit">Submit</button>
    </div>
    </form>
    <div class="text-center">Find us on <a style="color:#dc659b;" href="#">Facebook</a> and <a style="color:#dc659b;" href="#">Twitter</a></div>
    </div>`,
    });

  toAdd("Forms") &&
    bm.add("Form4", {
      label: `<img src="images/block-form4.jpg" height="40px" width="60px"/>`,
      category: opt.categoryForms,
      content: `<div class="container-fluid d-flex justify-content-center flex-column p-3" style="color:white;background-image:url(images/photo-form.jfif)">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4 text-center">Contact Us</h5>
    <p class="text-center m-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<p>
    <form>
    <div class="row">
    <div class="col">
    <label for="exampleForm1">First Name</label>
    <input class="form-control" id="exampleForm1" type="text" placeholder="First Name" aria-label="Search">
    </div>
    <div class="col">
    <label for="exampleForm2">Last Name</label>
    <input class="form-control " id="exampleForm2" type="text" placeholder="Last Name" aria-label="Search">
    </div>
    </div>
    <label for="exampleFormControlSelect2">Email</label>
    <input class="form-control " id="exampleFormControlSelect2" type="email" placeholder="Email" aria-label="Search">
    <div class="form-group">
    <label for="exampleFormControlTextarea1">Example textarea</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
    <div>
    <button class="btn text-light" style="background-color:#dc659b;" type="submit">Submit</button>
    </div>
    </form>
    <div class="text-center">Find us on <a style="color:#dc659b;" href="#">Facebook</a> and <a style="color:#dc659b;" href="#">Twitter</a></div>
    </div>`,
    });

  toAdd("Forms") &&
    bm.add("Form5", {
      label: `<img src="images/block-form4.jpg" height="40px" width="60px"/>`,
      category: opt.categoryForms,
      content: `<section class="jumbotron" id="contact">
    <div class="container px-5 px-md-0">
        <h2 class="text-center display-4 font-weight-bold pb-3">Contact Us</h2>
        <div class="row">
            <div class="col col-md-7 mx-auto">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label>Full Name:</label>
                            <input type="text" class="form-control form-control-lg" name="name" placeholder="Full Name" />
                        </div>
                        <div class="form-group col-md-6">
                            <label>Email:</label>
                            <input type="email" class="form-control form-control-lg" name="email" placeholder="Email" />
                        </div>
                    </div>
                    <div class="form-group">
                        <label>Subject:</label>
                        <input type="text" class="form-control form-control-lg" name="subject" placeholder="Subject" />
                    </div>
                    <div class="form-group">
                        <label>Message:</label>
                        <textarea class="form-control form-control-lg" rows="5" placeholder="Message" name="message"></textarea>
                    </div>
                    <button class="btn btn-lg btn-primary" type="submit">Send Message</button>
                </form>
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("Forms") &&
    bm.add("Form6", {
      label: `<img src="images/block-form4.jpg" height="40px" width="60px"/>`,
      category: opt.categoryForms,
      content: `<section class="jumbotron" id="contact">
    <div class="container px-5 px-md-0">
        <div class="row">
            <div class="col-md-6 mb-5">
                <h2 class="display-4 font-weight-bold mb-3">Get in Touch</h2>
                <h4>Do you need more information? Please contact us to find more about our products and services.</h4>
            </div>
            <div class="col-md-12 mx-auto">
                <div class="card">
                    <div class="row">
                        <div class="col-md-8 pr-md-0">
                            <form>
                                <div class="card-body">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>First name</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-user"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="First Name" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Last name</label>
                                                <div class="input-group">
                                                    <div class="input-group-prepend">
                                                        <span class="input-group-text">
                                                            <i class="fas fa-user"></i>
                                                        </span>
                                                    </div>
                                                    <input type="text" class="form-control" placeholder="Last Name" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Email</label>
                                        <div class="input-group">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </div>
                                            <input type="text" class="form-control" placeholder="Email Here..." />
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label>Your message</label>
                                        <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <button type="submit" class="btn btn-primary">Send Message</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="col-lg-4 col-md-5 pl-md-0">
                            <div class="bg-primary h-100 p-5 text-white">
                                <h4 class="card-title">Contact information</h4>
                                <p>Give us a call, we try to answer all enquiries within 24 hours on business days.</p>
                                <p class="font-weight-bold">OPENING HOURS</p>
                                <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                                <div class="mt-5">
                                    <i class="fas fa-map-marker-alt fa-2x float-left w-40px"></i>
                                    <p class="mt-2">68 Bedford Street, London</p>
                                </div>
                                <div>
                                    <i class="fas fa-mobile-alt fa-2x float-left w-40px"></i>
                                    <p class="mt-2">020 121 12345</p>
                                </div>
                                <div>
                                    <i class="fas fa-envelope fa-2x float-left w-40px"></i>
                                    <p class="mt-2">info@example.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>`,
    });

  toAdd("FAQ") &&
    bm.add("faq1", {
      label: `<img src="images/block-faq1.png" height="40px" width="60px"/>`,
      category: opt.categoryFAQ,
      content: `<div class="container">
    <h2 class="text-center">Frequently Asked Questions</h2>
    <p class="text-center">Looking for more info? Here are some things we're commonly asked</p>
    <div class="row">
    <div class="col m-2">${faq}</div>
    <div class="col m-2">${faq}</div>
    </div>
    <div class="row">
    <div class="col m-2">${faq}</div>
    <div class="col m-2">${faq}</div>
    </div>
    </div>`,
    });

  toAdd("FAQ") &&
    bm.add("faq2", {
      label: `<img src="images/block-faq2.png" height="40px" width="60px"/>`,
      category: opt.categoryFAQ,
      content: `<section class="container d-flex flex-column justify-content-center">
    <h2 class="text-center">Frequently Asked Questions</h2>
    <p class="text-center mb-3">Looking for more info? Here are some things we're commonly asked</p>
    <div>
    ${faq2}
    ${faq2}
    ${faq2}
    </div>
    </section>`,
    });

  toAdd("Footers") &&
    bm.add("footer1", {
      label: `<img src="images/block-footer1.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFooter,
      content: `<footer style="background-color: #353535; color:white">
    <div class="container text-center text-md-left">
    <div class="row">
    <div class="col-md-3 mx-auto">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Search</h5>
    <ul class="list-unstyled">
    <li><a href="#" class="text-decoration-none">Home</a></li>
    <li><a href="#" class="text-decoration-none">Pricing</a></li>
    <li><a href="#" class="text-decoration-none">Steps</a></li>
    <li><a href="#" class="text-decoration-none">Contact Us</a></li>
    </ul>
    </div>
    <div class="col-md-3 mx-auto">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
    <ul class="list-unstyled">
    <li><a href="#" class="text-decoration-none">More</a></li>
    <li><a href="#" class="text-decoration-none">Info</a></li>
    <li><a href="#" class="text-decoration-none">Call to Action</a></li>
    <li><a href="#" class="text-decoration-none">Email Us</a></li>
    </ul>
    </div>
    <div class="col-md-3 mx-auto">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
    <ul class="list-unstyled">
    <li><a href="#" class="text-decoration-none">Home</a></li>
    <li><a href="#" class="text-decoration-none">Pricing</a></li>
    <li><a href="#" class="text-decoration-none">Steps</a></li>
    <li><a href="#" class="text-decoration-none">Contact Us</a></li>
    </ul>
    </div>
    <div class="col-md-3 mx-auto">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Search</h5>
    <ul class="list-unstyled">
    <li><a href="#" class="text-decoration-none">Home</a></li>
    <li><a href="#" class="text-decoration-none">Pricing</a></li>
    <li><a href="#" class="text-decoration-none">Steps</a></li>
    <li><a href="#" class="text-decoration-none">Contact Us</a></li>
    </ul>
    </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#">RapidGrow</a>
  </div>
    </div>
    </footer>`,
    });

  toAdd("Footers") &&
    bm.add("footer2", {
      label: `<img src="images/block-footer2.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFooter,
      content: `<footer style="color: white;
    background-color: #271d40;">
    <div class="container text-center text-md-left">
    <div class="row">
    <div class="col-md-5 mx-auto">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Search</h5>
    <form class="form-inline d-flex justify-content-center">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
    </div>
    <div class="col-md-3 mx-auto">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
    <ul class="list-unstyled">
    <li><a href="#" class="text-decoration-none">More</a></li>
    <li><a href="#" class="text-decoration-none">Info</a></li>
    <li><a href="#" class="text-decoration-none">Call to Action</a></li>
    <li><a href="#" class="text-decoration-none">Email Us</a></li>
    </ul>
    </div>
    <div class="col-md-3 mx-auto">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Useful Links</h5>
    <ul class="list-unstyled d-flex justify-content-center">
    <li><a href="#" class="text-decoration-none m-1">Home</a></li>
    <li><a href="#" class="text-decoration-none  m-1">Pricing</a></li>
    <li><a href="#" class="text-decoration-none  m-1">Steps</a></li>
    <li><a href="#" class="text-decoration-none  m-1">Contact Us</a></li>
    </ul>
    </div>
    </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#">RapidGrow</a>
  </div>
    </div>
    </footer>`,
    });

  toAdd("Footers") &&
    bm.add("footer3", {
      label: `<img src="images/block-footer3.jpg" height="40px" width="60px"/>`,
      category: opt.categoryFooter,
      content: `<footer class="container-fluid pt-3" style="background-color: #4130c0;color:white;">
    <div class="w-50 mx-auto text-center">
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">We are here to help you</h5>
    <h5 class="font-weight-bold text-uppercase mt-3 mb-4">Search</h5>
    <form class="form-inline d-flex justify-content-center">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
  <div class="mt-3 mb-4">Thank you for visiting us</div>
    </div>
    <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="#">RapidGrow</a>
  </div>
    </div>
    </footer>`,
    });

  toAdd('Footers') && bm.add('footer4', {
    label: `<img src="images/block-footer4.jpg" height="40px" width="60px"/>`,
    category: opt.categoryFooter,
    content: `<footer class="navbar navbar-footer navbar-expand-lg navbar-dark bg-dark" id="footer">
    <div class="container text-white p-4">
    <div class="row w-100 justify-content-between">
        <div class="col">
            <p>© 2020 GrowRapid. All rights reserved.</p>
        </div>
        <div class="col text-right">
            <a class="text-white" href="#">
                <i class="fab fa-facebook-square fa-2x pr-2"></i>
            </a>
            <a class="text-white" href="#">
                <i class="fab fa-twitter-square fa-2x pr-2"></i>
            </a>
            <a class="text-white" href="#">
                <i class="fab fa-instagram fa-2x pr-2"></i>
            </a>
        </div>
    </div>
</div>
</footer>`,
   });

   toAdd('Footers') && bm.add('footer5', {
    label: `<img src="images/block-footer4.jpg" height="40px" width="60px"/>`,
    category: opt.categoryFooter,
    content: `<footer class="bg-dark py-5" id="footer">
    <div class="container">
        <div class="row">
            <div class="col text-center">
                <h4>
                    <a class="mb-4 font-weight-bold text-white" href="#">GrowRapid</a>
                </h4>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <ul class="nav mx-auto flex-column flex-md-row">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Sign Up</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Terms</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Privacy</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Contact Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Docs</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="text-center text-white mt-4">
        <p>
            <small>© 2019 Versoly.
                <br />All rights reserved</small>
        </p>
    </div>
    <div class="col text-center text-white mt-4">
        <a class="text-white" href="#">
            <i class="fab fa-facebook-square fa-2x pr-2"></i>
        </a>
        <a class="text-white" href="#">
            <i class="fab fa-twitter-square fa-2x pr-2"></i>
        </a>
        <a class="text-white" href="#">
            <i class="fab fa-instagram fa-2x pr-2"></i>
        </a>
    </div>
</footer>`,
   });


   toAdd('Footers') && bm.add('footer5', {
    label: `<img src="images/block-footer4.jpg" height="40px" width="60px"/>`,
    category: opt.categoryFooter,
    content: `<footer class="py-5" id="footer">
    <div class="container d-lg-block">
        <div class="row mb-5">
            <div class="col-md-3 text-md-left text-center">
                <h4>
                    <a class="mb-4 font-weight-bold text-dark" href="#">GrowRapid</a>
                </h4>
                <div>
                    <p class="text-dark">Grow Rapid helps you build  landing pages that convert.</p>
                </div>
            </div>
            <div class="col-md-3 text-center mb-4 mb-md-0">
                <h6 class="mb-4 text-dark">Product</h6>
                <a class="d-block text-dark" href="#">Sign Up</a>
                <a class="d-block text-dark" href="#">Pricing</a>
                <a class="d-block text-dark" href="#">F.A.Q.</a>
            </div>
            <div class="col-md-3 text-center mb-4 mb-md-0">
                <h6 class="mb-4 text-dark">Company</h6>
                <a class="d-block text-dark" href="#">Terms</a>
                <a class="d-block text-dark" href="#">Privacy</a>
                <a class="d-block text-dark" href="#">Contact Us</a>
            </div>
            <div class="col-md-3 text-center mb-4 mb-md-0">
                <h6 class="mb-4 text-dark">Connect With Us</h6>
                <a class="d-block text-dark" href="#">
                    <i class="fab fa-facebook-square fa-2x pr-2"></i>
                </a>
                <a class="d-block text-dark" href="#">
                    <i class="fab fa-twitter-square fa-2x pr-2"></i>
                </a>
                <a class="d-block text-dark" href="#">
                    <i class="fab fa-instagram fa-2x pr-2"></i>
                </a>
            </div>
        </div>
        <div class="row w-100 justify-content-between text-dark">
            <div class="col text-center">
                <p>
                    <small>© 2020 GrowRapid. All rights reserved.</small>
                </p>
            </div>
        </div>
    </div>
</footer>`
   });
}
