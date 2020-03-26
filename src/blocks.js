export default function (editor, opt = {}) {
  const c = opt;
  let bm = editor.BlockManager;
  let blocks = c.blocks;
  const toAdd = name => blocks.indexOf(name) >= 0

  let card = `<div class="card">
  <div class="card-body text-center">
    <h2 class="card-title text-center p-2">Feature</h2>
    <p class="card-text p-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
  </div>
</div>`

let faq = `<div class="card">
  <div class="card-body">
    <h2 class="card-title p-2">Question</h2>
    <p class="card-text text-center p-2">Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
  </div>
</div>`

let faq2 = `<div class="card">
  <div class="card-body">
    <h2 class="card-title p-2 text-center">Question</h2>
    <p class="card-text text-center p-2">Suspendisse vel ante nibh. Nam tortor sapien, maximus nec sagittis vitae, semper eu turpis. Proin tempor fringilla velit convallis pretium. Sed in turpis convallis, tincidunt orci vel, commodo m</p>
  </div>
</div>`
  let contentcard = `<div class="card">
<img src="http://via.placeholder.com/150/dc659b/fff?text=Image" class="card-img-top" alt="Cards">
<div class="card-body">
  <h5 class="card-title p-2">Card title</h5>
  <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`

  let subtitlecard = `<div class="card">
<img src="images/card.jpg" class="card-img-top" alt="Cards">
<div class="card-body">
  <h5 class="card-title p-2">Card title</h5>
  <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  <a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>`


  let circularcard = `<div>
  <div class="d-flex justify-content-center">
<img src="http://via.placeholder.com/150/dc659b/fff?text=Image" class="card-img-top border rounded-circle" style="    height: 150px;
width: 150px;" alt="Circular Image">
</div>
<div class="card-body">
  <h5 class="card-title p-2">Card title</h5>
  <p class="card-text p-2">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
</div>
</div>`

  let priceChart = `<article class="card">
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
</article>`

  let team = `<div class="card">
<div class="d-flex justify-content-center">
<img src="images/testim1.jpg" style="height:100px;width:100px;" class="card-img-top border rounded-circle m-2" alt="Circular Image">
</div>
<div class="card-body">
<h4 class="card-title p-2 text-center">John Doe</h4>
<h5 class="card-title p-2 text-center">CEO and Founder</h5>
</div>
</div>`

  let teamCard = `<div>
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
</div>`

  toAdd('Navigation') && bm.add('navigation1', {
    label: `<img src="images/block-header1.jpg" height="20px" width="80px"/>
    <div>${c.navigation1}<div>`,
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
  </nav>`
  })

  toAdd('Navigation') && bm.add('navigation2', {
    label: `<img src="images/block-header2.jpg" height="20px" width="80px"/>
    <div>${c.navigation2}<div>`,
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
  </nav>`
  })


  toAdd('Navigation') && bm.add('navigation3', {
    label: `<img src="images/block-header3.jpg" height="20px" width="80px"/>
    <div>${c.navigation3}<div>`,
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
  </nav>`
  })


  toAdd('Intros') && bm.add('intros1', {
    label: `<img src="images/block-intro1.jpg" height="20px" width="80px"/>
    <div>${c.intro1}<div>`,
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
    </>`
  })

  toAdd('Intros') && bm.add('intros2', {
    label: `<img src="images/block-intro2.jpg" height="20px" width="80px"/>
    <div>${c.intro2}<div>`,
    category: c.categoryIntros,
    content: `<section class="h-100 container-fluid d-flex align-items-center" style="background-image:url(images/photo-vineyard2.jpg)">
    <div class="container">
    <h1 class="text-center">Lorem ipsum dolor sit amet</h1>
    <div class="text-center p-3">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</div>
    <div class="d-flex flex-row justify-content-center">
    <a href="#" class="btn p-3 m-3 text-decoration-none rounded-pill" style="background-color:#dc659b">Learn More</a>
    </div>
    </div>
    </>`
  })


  toAdd('Intros') && bm.add('intros3', {
    label: `<img src="images/block-intro3.jpg" height="20px" width="80px"/>
    <div>${c.intro3}<div>`,
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
    </>`
  })

  toAdd('Headings') && bm.add('headin1', {
    label: `<img src="images/block-heading1.jpg" height="20px" width="80px"/>
    <div>${c.heading1}<div>`,
    category: c.categoryHeadings,
    content: `<header class="w-100 h-25 d-flex flex-column align-items-center justify-content-end" style="background-color:#2e3137;">
    <h1 class="p-2 m-2 text-light">This is amazing header</h1>
    <h2 class="p-2 m-2 text-light">This is amazing title</h2>
    </header>`
  })

  toAdd('Headings') && bm.add('heading2', {
    label: `<img src="images/block-heading2.jpg" height="20px" width="80px"/>
    <div>${c.heading2}<div>`,
    category: c.categoryHeadings,
    content: `<header class="w-100 h-25 d-flex flex-column align-items-center justify-content-end" style="background-color:#2e3137;">
    <h2 class="p-2 m-2 text-light">This is amazing title</h2>
    <h1 class="p-2 m-2 text-light">This is amazing header</h1>
    </header>`
  })


  toAdd('Features') && bm.add('4 features', {
    label: `<img src="images/block-feature1.jpg" height="40px" width="60px"/>
            <div>${c.feature1}<div>`,
    category: opt.categoryFeatures,
    content: `<div class="container">
    <div class="row">
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    </div>
    <div class="row">
    <div class="col">${card}</div>
    <div class="col">${card}</div>
    </div>
    </div>`
  });

  toAdd('Features') && bm.add('6 features', {
    label: `<img src="images/block-feature2.jpg" height="40px" width="60px"/>
            <div>${c.feature2}<div>`,
    category: opt.categoryFeatures,
    content: `<div class="container">
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
    </div>`
  });

  toAdd('Features') && bm.add('4 Content', {
    label: `<img src="images/block-feature3.jpg" height="40px" width="60px"/>
            <div>${c.feature3}<div>`,
    category: opt.categoryFeatures,
    content: `<div class="container">
    <div><h2 class="text-center">Features</h2>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
    </div>
    <div class="row">
    <div class="col">${contentcard}</div>
    <div class="col">${contentcard}</div>
    <div class="col">${contentcard}</div>
    </div>
    </div>`,
  });

  toAdd('Features') && bm.add('6 Content', {
    label: `<img src="images/block-feature4.jpg" height="40px" width="60px"/>
            <div>${c.feature4}<div>`,
    category: opt.categoryFeatures,
    content: `<div class="container-fluid">
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

  toAdd('Features') && bm.add('2 Content', {
    label: `<img src="images/block-feature5.jpg" height="40px" width="60px"/>
            <div>${c.feature5}<div>`,
    category: opt.categoryFeatures,
    content: `<section class="container-fluid d-flex h-auto">
    <div class="d-flex justify-content-center align-items-center flex-column m-2">
    <h2 class="p-2">Lorem ipsum dolor sit amet</h2>
    <div class="p-2">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa</div>
    <a href="#" class="btn text-decoration-none p-3 text-light" style="background-color:#dc659b;">Button</a>
    </div>
    <div  class="d-flex justify-content-center align-items-center m-2">
    <img class="p-2" src="http://via.placeholder.com/370x275/dc659b/fff?text=Feature" alt="Features"/>
    </div>
    </section>`,
  });

  toAdd('Features') && bm.add('Content', {
    label: `<img src="images/block-feature6.jpg" height="40px" width="60px"/>
            <div>${c.feature6}<div>`,
    category: opt.categoryFeatures,
    content: `<section class="container">
    <div class="row">
    <div class="col">${subtitlecard}</div>
    <div class="col">${subtitlecard}</div>
    <div class="col">${subtitlecard}</div>
    </div>
    </section>`,
  });

  toAdd('Clients') && bm.add('client1', {
    label: `<img src="images/block-clients1.png" height="40px" width="60px"/>
            <div>${c.client1}<div>`,
    category: opt.categoryClients,
    content: `<section class="container py-3">
    <div class="row">
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo1.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo2.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo3.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo4.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo5.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo6.png" style="height:100px;width:100px;"/></div>
    </div>
    </section>`,
  });

  toAdd('Clients') && bm.add('client2', {
    label: `<img src="images/block-clients2.png" height="40px" width="60px"/>
            <div>${c.client2}<div>`,
    category: opt.categoryClients,
    content: `<section class="container-fluid py-3">
    <h5 class="text-center p-3">Trusted by Great Companies</h5>
    <div class="row container mx-auto">
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo1.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo2.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo3.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo4.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo5.png" style="height:100px;width:100px;"/></div>
    <div class="col-xs-6 col-sm-4 col-md-2"><img src="images/logo6.png" style="height:100px;width:100px;"/></div>
    </div>
    </section>`,
  });

  toAdd('Clients') && bm.add('client3', {
    label: `<img src="images/block-clients3.png" height="40px" width="60px"/>
            <div>${c.client3}<div>`,
    category: opt.categoryClients,
    content: `<section class="container-fluid py-3">
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

  toAdd('Clients') && bm.add('client4', {
    label: `<img src="images/block-clients4.png" height="40px" width="60px"/>
            <div>${c.client4}<div>`,
    category: opt.categoryClients,
    content: `<section class="container py-3">
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

  toAdd('Clients') && bm.add('client5', {
    label: `<img src="images/block-clients5.png" height="40px" width="60px"/>
            <div>${c.client5}<div>`,
    category: opt.categoryClients,
    content: `<section class="container-fluid py-3">
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


  toAdd('Steps') && bm.add('step1', {
    label: `<img src="images/block-step1.png" height="40px" width="60px"/>
            <div>${c.step1}<div>`,
    category: opt.categorySteps,
    content: `<div class="row mt-1">
    <div class="col-md-12 w-100 p-3">
      <ul class="progressBar">
        <li class="active">
          <a href="#!">
            <span class="label">First step</span>
          </a>
          <div class="step-content grey lighten-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere
              iusto
              quaerat
              vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore
              nostrum
              ut,
              nobis porro sapiente.</p>
          </div>
        </li>
        <li class="active">
          <a href="#!">
            <span class="label">Second step</span>
          </a>
          <div class="step-content grey lighten-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere
              iusto
              quaerat
              vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore
              nostrum
              ut,
              nobis porro sapiente.</p>
          </div>
        </li>
        <li class="active">
          <a href="#!">
            <span class="label">Third step</span>
          </a>
          <div class="step-content grey lighten-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse cupiditate voluptate facere
              iusto
              quaerat
              vitae excepturi, accusantium ut aliquam repellat atque nesciunt nostrum similique. Inventore
              nostrum
              ut,
              nobis porro sapiente.</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
  <style>
  .wrapper-progressBar {
    width: 100%
}

.progressBar {
}

.progressBar li {
    list-style-type: none;
    float: left;
    width: 33%;
    position: relative;
    text-align: center;
}

.progressBar li:before {
    content: " ";
    line-height: 30px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    display: block;
    text-align: center;
    margin: 0 auto 10px;
    background-color: white
}

.progressBar li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #ddd;
    top: 15px;
    left: -50%;
    z-index: -1;
}

.progressBar li:first-child:after {
    content: none;
}

.progressBar li.active {
    color: dodgerblue;
}

.progressBar li.active:before {
    border-color: dodgerblue;
    background-color: dodgerblue
}

.progressBar li.active + li:after {
    background-color: dodgerblue;
}
  </style>
  `,
  });

  // toAdd('Steps') && bm.add('step2', {
  //   label: `<img src="images/block-step2.png" height="40px" width="60px"/>
  //           <div>${c.step2}<div>`,
  //   category: opt.categorySteps,
  //   content: ``,
  // });

  // toAdd('Steps') && bm.add('step3', {
  //   label: `<img src="images/block-step3.png" height="40px" width="60px"/>
  //           <div>${c.step3}<div>`,
  //   category: opt.categorySteps,
  //   content: ``,
  // });

  toAdd('Buttons') && bm.add('button1', {
    label: `<img src="images/block-button1.jpg" height="40px" width="60px"/>
            <div>${c.button1}<div>`,
    category: opt.categoryButtons,
    content: `<a href="#" class="btn text-decoration-none p-3 text-light" style="background-color:#dc659b;">
    Button
  </a>`
  });

  toAdd('Buttons') && bm.add('button2', {
    label: `<img src="images/block-button2.jpg" height="40px" width="60px"/>
            <div>${c.button2}<div>`,
    category: opt.categoryButtons,
    content: `<a href="#" class="btn text-decoration-none p-3 text-light" style="background-color:#dc659b;border-radius:20px">
    Button
  </a>`,
  });

  toAdd('Buttons') && bm.add('button3', {
    label: `<img src="images/block-button4.jpg" height="40px" width="60px"/>
            <div>${c.button3}<div>`,
    category: opt.categoryButtons,
    content: `<a href="#" class="btn text-decoration-none p-3 border" style="color:#dc659b;border-radius:20px; border-color:#dc659b;">
    Button
  </a>`,
  });

  toAdd('Buttons') && bm.add('button4', {
    label: `<img src="images/block-button3.jpg" height="40px" width="60px"/>
            <div>${c.button4}<div>`,
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

  toAdd('CalltoAction') && bm.add('calltoAction1', {
    label: `<img src="images/block-cta1.png" height="40px" width="60px"/>
            <div>${c.callToAction1}<div>`,
    category: opt.categoryCallToActions,
    content: `<section class="container-fluid p-5">
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

  toAdd('CalltoAction') && bm.add('calltoAction2', {
    label: `<img src="images/block-cta2.png" height="40px" width="60px"/>
            <div>${c.callToAction2}<div>`,
    category: opt.categoryCallToActions,
    content: `<section class="container-fluid p-5">
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

  toAdd('CalltoAction') && bm.add('calltoAction3', {
    label: `<img src="images/block-cta3.png" height="40px" width="60px"/>
            <div>${c.callToAction3}<div>`,
    category: opt.categoryCallToActions,
    content: `<section class="container-fluid p-5">
    <div class="container">
    <h3 class="text-center p-1">See why 100,000 users from 1700 businesses worldwide trust Rapidgrow</h3>
    <form class="d-flex justify-content-center align-items-center">
    <a href="#" class="btn text-decoration-none p-3 text-light text-center w-25 align-self-center m-1" style="background-color:#dc659b;">Schedule a demo</a>
    <a href="#" class="btn text-decoration-none p-3 text-light text-center w-25 align-self-center m-1" style="background-color:#dc659b;">Start Now</a>
    </form>
    </div>
    </section>`,
  });

  // toAdd('CalltoAction') && bm.add('calltoAction4', {
  //   label: `<img src="images/block-button4.jpg" height="40px" width="60px"/>
  //           <div>${c.callToAction4}<div>`,
  //   category: opt.categoryCallToActions,
  //   content: ``,
  // });

  toAdd('Pricing') && bm.add('pricing', {
    label: `<img src="images/block-pricing1.jpg" height="40px" width="60px"/>
            <div>${c.pricing}<div>`,
    category: opt.categoryPricing,
    content: `<section class="container-fluid">
    <h2 class="p-2 text-center">Pricing Plan</h2>
    <div class="row">
    <div class="col">${priceChart}</div>
    <div class="col">${priceChart}</div>
    <div class="col">${priceChart}</div>
    </div>
    </section>`,
  });

  toAdd('Teams') && bm.add('team1', {
    label: `<img src="images/block-team1.jpg" height="40px" width="60px"/>
            <div>${c.team1}<div>`,
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

  toAdd('Teams') && bm.add('team2', {
    label: `<img src="images/block-team2.jpg" height="40px" width="60px"/>
            <div>${c.team2}<div>`,
    category: opt.categoryTeams,
    content: `<section class="container">
    <h2 class="p-2 text-center">Meet Our Team</h2>
    <div class="row">
    <div class="col m-3">${teamCard}</div>
    <div class="col m-3">${teamCard}</div>
    </div>
    </section>`,
  });

  toAdd('Testimonials') && bm.add('testimonial1', {
    label: `<img src="images/block-testim1.jpg" height="40px" width="60px"/>
            <div>${c.testimonial1}<div>`,
    category: opt.categoryTestimonials,
    content: `<div class="container"><div class="row">
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

  toAdd('Testimonials') && bm.add('testimonial2', {
    label: `<img src="images/block-testim2.jpg" height="40px" width="60px"/>
            <div>${c.testimonial2}<div>`,
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

  toAdd('Testimonials') && bm.add('testimonial4', {
    label: `<img src="images/block-testim4.jpg" height="40px" width="60px"/>
            <div>${c.testimonial4}<div>`,
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

  toAdd('Forms') && bm.add('Form1', {
    label: `<img src="images/block-form1.jpg" height="40px" width="60px"/>
            <div>${c.form1}<div>`,
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

  toAdd('Forms') && bm.add('Form2', {
    label: `<img src="images/block-form3.jpg" height="40px" width="60px"/>
            <div>${c.form2}<div>`,
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

  toAdd('Forms') && bm.add('Form3', {
    label: `<img src="images/block-form2.jpg" height="40px" width="60px"/>
            <div>${c.form3}<div>`,
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

  toAdd('Forms') && bm.add('Form4', {
    label: `<img src="images/block-form4.jpg" height="40px" width="60px"/>
            <div>${c.form4}<div>`,
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

  toAdd('FAQ') && bm.add('faq1', {
    label: `<img src="images/block-faq1.png" height="40px" width="60px"/>
            <div>${c.faq1}<div>`,
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
    </div>`
  });

  toAdd('FAQ') && bm.add('faq2', {
    label: `<img src="images/block-faq2.png" height="40px" width="60px"/>
            <div>${c.faq2}<div>`,
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


  toAdd('Footers') && bm.add('footer1', {
    label: `<img src="images/block-footer1.jpg" height="40px" width="60px"/>
            <div>${c.footer1}<div>`,
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

  toAdd('Footers') && bm.add('footer2', {
    label: `<img src="images/block-footer2.jpg" height="40px" width="60px"/>
            <div>${c.footer2}<div>`,
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

  toAdd('Footers') && bm.add('footer3', {
    label: `<img src="images/block-footer3.jpg" height="40px" width="60px"/>
            <div>${c.footer3}<div>`,
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

  // toAdd('Footers') && bm.add('footer4', {
  //   label: `<img src="images/block-footer4.jpg" height="40px" width="60px"/>
  //           <div>${c.footer4}<div>`,
  //   category: opt.categoryFooter,
  //   content: ``,
  // });


}


