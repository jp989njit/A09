# project-part-4
<!DOCTYPE html>
<html>
<head>
  <title>About Me Website</title>
  <!-- Link Bootstrap CSS file -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
  <link rel="stylesheet" href="style.css">
  <link rel="stylesheet" href="style.css" type="text/css">
</head>
<body>





  <!-- Navigation Menu -->
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <!-- Brand/logo -->
    <a class="navbar-brand" href="index.html">Home</a>
    <!-- Toggler/collapsible Button -->
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- Navbar links -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="about.html">About Me</a>
        </li>
            
        <li class="nav-item active">
          <a class="nav-link" href="portfolio.html">Portfolio</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="resume.html">Resume/CV</a>
        </li>
        <li class="nav-item active">
          <a class="nav-link" href="contact.html">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  



  <!-- Home Page Content -->
  <div class="container mt-5">
    <h1 class="text-center">Welcome to My Website</h1>
    <div class="row mt-4">
      <div class="col-md-4">
        <div class="card">
          <img src="images/Benefits-of-Studying-Computer-Information-Systems-Courses-with-LBTC.jpg" alt="Studying IS" class="card-img-top">
          <div class="card-body">
            <h5 class="card-title">Introduction</h5>
            <p class="card-text">An introduction about yourself</p>
          </div>
        </div>
      </div>
      <div class="col-md -4">
        <div class="card">
          <img src="images/build_a_website_for_free_-_article_image.jpg" alt="Building Website" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title">Portfolio</h5>
          <p class="card-text">Showcase your portfolio projects</p>
          </div>
          </div>
          </div>
          <div class="col-md-4">
          <div class="card">
          <img src="images/AI-is-coming-—-and-HR-is-not-prepared.jpg" alt="AI is COMING" class="card-img-top">
          <div class="card-body">
          <h5 class="card-title">Resume/CV</h5>
          <p class="card-text">Display your resume or CV</p>
          </div>
          </div>
          </div>
          </div>
          
            </div>
            <!-- Contact Form -->
            <div class="container mt-5">
              <h2 class="text-center">Contact Me</h2>
              <form>
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label for="name">Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Your Name">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Your Email">
                  </div>
                </div>
                <div class="form-group">
                  <label for="message">Message</label>
                  <textarea class="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Send Message</button>
              </form>
            </div>

  <!-- Footer -->
  <footer class="bg-dark text-white text-center py-3">
    <p>&copy; 2023 Jenish Patel. All rights reserved.</p>
  </footer>

  <!-- Link Bootstrap JS file -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
<!-- DEVELOPER: Jenish Patel, IS117002, Spring 2023 ->
