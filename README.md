# WORLD HEALTH COMMINITY 


<a name="readme-top"></a>


# 📗 SETUP PORFOLIO FOR PHONE 

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->



# 📖 WORLD HEALTH COMMUNITY <a name="about-project"></a>

> The final capstone project is a significant milestone and culmination of an academic or professional program. It represents a culmination of the knowledge and skills acquired throughout the course of study. Whether it's in higher education, such as a bachelor's or master's degree, or in a professional setting, the final capstone project typically requires students to apply what they have learned to solve a real-world problem or demonstrate expertise in a particular area.

 The purpose of a final capstone project varies depending on the field of study or industry. In academia, it often serves as a comprehensive assessment of the student's learning outcomes. It allows students to demonstrate their understanding of theoretical concepts, research methodologies, critical thinking, and analytical skills. A capstone project may involve conducting original research, developing a practical solution, or creating a tangible product that addresses a specific issue or fills a gap in knowledge.

In professional settings, a final capstone project can be a practical demonstration of an individual's skills and capabilities, showcasing their ability to apply their knowledge in a real-world context. This could involve developing a business plan, implementing a new process or system, designing a prototype, or executing a comprehensive research project related to their field of work.


## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

> I can provide a general overview of the tech stack typically used for a portfolio website:
   
<details>
  <summary>Html</summary>
  <ul>
    <li><a href="https://www.w3schools.com/html/html_intro.asp">Html</a></li>
  </ul>
</details>

<details>
  <summary>Css</summary>
  <ul>
    <li><a href="https://www.w3schools.com/css/default.asp">Css</a></li>
  </ul>
</details>

<details>
<summary>Linters</summary>
  <ul>
    <li><a href="https://olegk.dev/go-linters-configuration-the-right-version">Linters</a></li>
  </ul>
</details>

<details>
<summary>JavaScript</summary>
  <ul>
    <li><a href="https://www.w3schools.com/js/js_intro.asp">JavaScript</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>

> Here's the feacture a UI can Hope 

- **[Full-website-design]**
- **[Best-responsive]**
- **[Web-UX]**

<p align="right">(<a href="#readme-top">back to the top pages</a>)</p>

<!-- LIVE DEMO -->

## Coming Soon
> Here you can fund the link of demon of this website 

><p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

>## 💻 Getting Started <a name="getting-started"></a>

> this project will be utilized by every developer because I designed it with the intention of making everything okay.

I make copies available to everyone as a shared developer skill, and I make code reviews that will actually assist the recipient understand.

>### Prerequisites

To carry out this project, you will need:

- Web browsers such as Chrome, Safari, Brave, and Opera-mini
- To be a developer, you need:
- Vscode - Node.js Apk (npm , npx)

Examples include npm run start, git status, git clone, and npm I (+ the name of a particular element).
>### Setup

Clone this repository to the folder of your choice:
>[Click on this Links](https://github.com/tchasinga/Setup-first-mobile.git) 

As a developer, every information is useful for learning and conducting research, thus I won't even enter a command.

>- Open your Code Editor 
>- create folder ".github/workflows"
>- Greate file "linters"
>- Go to the specific Template and make Copy 


>### Install

UWebpack is a popular module bundler for JavaScript applications. It allows developers to manage and bundle their code, including JavaScript, CSS, and other assets, for efficient deployment in web applications. Here's a step-by-step guide on installing and configuring Webpack:

Step 1: Install Node.js
Make sure you have Node.js installed on your machine. You can download and install it from the official Node.js website (https://nodejs.org). Node.js includes npm, the Node Package Manager, which we'll use to install Webpack.

Step 2: Create a new project directory
Create a new directory for your project and navigate to it using the command line.

Step 3: Initialize a new npm project
Run the following command to initialize a new npm project and create a `package.json` file:
```
npm init -y
```

Step 4: Install webpack and webpack-cli
Run the following command to install webpack and webpack-cli as dev dependencies in your project:
```
npm install webpack webpack-cli --save-dev
```

Step 5: Create a configuration file
Create a new file named `webpack.config.js` in the root of your project directory. This file will contain the configuration for webpack.

Step 6: Configure webpack
Open the `webpack.config.js` file in a text editor and add the following configuration:
```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',  // The entry point of your application
  output: {
    path: path.resolve(__dirname, 'dist'),  // The output directory for bundled files
    filename: 'bundle.js'  // The name of the bundled file
  },
  module: {
    rules: [
      {
        test: /\.js$/,  // Use babel-loader for JavaScript files
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,  // Use style-loader and css-loader for CSS files
        use: ['style-loader', 'css-loader']
      }
     
    ]
  }
};
```

This configuration specifies the entry point of your application (`./src/index.js`), the output directory for the bundled files (`dist`), and the bundled file name (`bundle.js`). It also includes rules for processing JavaScript files using Babel and CSS files using style-loader and css-loader.

Step 7: Build your project
In your terminal, run the following command to build your project using webpack:
```
npx webpack
```
This will bundle your code according to the configuration specified in `webpack.config.js` and create the bundled file (`bundle.js`) in the `dist` directory.

That's it! You have successfully installed and configured webpack for your project. You can now use webpack to bundle and optimize your JavaScript and other assets for deployment in your web application.
Check here : 

>- npm install --save-dev hint@7.x
>- npx hint .
>- npm init -y    

### Usage

>Use the following command to start the project
 
 >-  npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x


### Run tests

>Use the following command to start the project:

Command illustration: node run developer code
Remember to utilize your own setting argument in node properties; these are just some guidelines.
 
 >- npx stylelint "**/*.{css,scss}" --fix
 >-  npx stylelint "**/*.{css,scss}"     

### Deployment

>By using the website, [Click here](https://www.netlify.com/), you can deploy the project live here. is an helpful website for a developper

 it will be helpful for you  

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Tchasinga Balolebwami jacques <a name="authors"></a>

> Below is the programming I contributed to this project during its development.

👤 **Tchasinga jacques**

- GitHub: [@tchasinga](https://github.com/tchasinga)
- Twitter: [@tchasinga](https://twitter.com/tchasinga)
- LinkedIn: [tchasinga](https://linkedin.com/in/tchasinga)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

> here's any best  1 - 3 features  that I will add to the project.

- [ ] **[Full-management-designer]**
- [ ] **[UI-animating]**
- [ ] **[Wecpack]**

<p align="right">(<a href="#readme-top">return to top</a>)</p>

<!-- CONTRIBUTING -->

## 🚀 Live Demo <a name='demo'></a>
> If you wanna see the live version [Click here](https://tchasinga.github.io/Final-capstone-module-one/) 

In no time , if you wanna visit the github source [click here](https://github.com/tchasinga/Final-capstone-module-one)



## 🤝 Contributing <a name="contributing"></a>

>Thank you for inviting me to contribute to your project! I'd be happy to share some ideas and suggestions. Here are a few additional considerations to enhance your project:

1. **Code splitting and lazy loading**: Implement code splitting and lazy loading techniques to improve the performance of your application. This allows you to load only the necessary code for each page or component, reducing the initial bundle size and improving the load time.

2. **Environment-specific configurations**: Consider creating different configuration files for different environments (e.g., development, production) to tailor the build process and optimizations accordingly. This can include setting different values for variables, enabling specific plugins, or applying different optimizations based on the deployment environment.

3. **Asset optimization**: Explore additional optimization techniques for assets such as images, fonts, and other media files. You can utilize loaders and plugins specific to these file types to optimize their size and format, improving the overall performance of your application.

4. **Source mapping**: Enable source mapping for your JavaScript and CSS files. Source maps allow for easier debugging and help in identifying issues by mapping the minified/optimized code back to the original source code.

5. **Cache busting**: Implement cache-busting techniques to ensure that users receive the latest version of your bundled files when you make updates. This can be achieved by appending a unique hash to the filenames, forcing browsers to fetch the updated files instead of using cached versions.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

>If you like this project, please think about doing anything you can to support us! Spreading the word about our mission, volunteering your time and talents, or even just making a small donation all assist us to continue making a positive difference. With your assistance, we can transform the world and create a better future for everyone. I value your help and consideration.


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

## 🙏 Acknowledgments <a name="acknowledgements"></a>
 
  Cindy Shin  in Behance for share her design,

I wanted to take a moment to express my sincere gratitude for sharing your incredible design work on Behance. Your creativity and talent are truly inspiring. The attention to detail and innovative ideas showcased in your designs have captivated me.

Your willingness to share your work with the community is commendable and greatly appreciated. It has not only provided me with inspiration but has also helped me grow as a designer. Your designs have sparked new ideas and pushed me to think outside the box.

Thank you once again for your generosity in sharing your artistry on Behance. Your contributions have made a positive impact on the creative community. I look forward to seeing more of your amazing work in the future.
[ in Behance for share her design](https://www.behance.net/gallery/29845175/CC-Global-Summit-2015)

With heartfelt thanks,
>TCHASINGA BALOLEBWAMI JACK



<p align="right">(<a href="#readme-top">back to bottom</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ (OPTIONAL) <a name="faq"></a>

> Here's two question that developer can ask 

- **How do I install the project's dependencies, and what dependencies does it have?**

   -One response : 
>First response: The markup and style languages themselves are not specifically necessary for HTML and CSS projects. But, if you want to speed up development and include more features, you can leverage external libraries or frameworks.

For example, to simplify the design and styling of your HTML pages, you may utilize a front-end framework like Foundation or Bootstrap. If you want to give your pages interactive features, you may also use a JavaScript library like jQuery.

To install these dependencies, you can typically download the relevant files from the library's website or use a package manager like npm. You can use the command npm install bootstrap, for instance, to install Bootstrap using npm.

While utilizing external libraries and frameworks, it's crucial to keep in mind

It's crucial to keep in mind that while utilizing external libraries and frameworks can expedite development, they may also make your project more complex and challenging to manage. Only use dependencies that are absolutely necessary to accomplish the objectives of your project.


[Do you have any examples or documentation that I can use to start utilizing the project?]**

  - Answer Two
   > Absolutely, most open-source projects often give documentation and examples to help new developers get started with utilizing the project. The project's installation and configuration instructions, as well as tutorials and code samples illustrating how to use its different features and functionalities, may all be included in this documentation.

In addition to the official documentation, many open-source projects also include active communities of developers who may provide assistance and instruction to new users. These groups might provide discussion boards, chat rooms, or other platforms where programmers can exchange thoughts, ask questions, and receive assistance with any problems they run across while working on the project.

It's a good idea to start by perusing the available documentation and contacting the project's community for help and guidance if you're interested in using an open-source project. By doing so, you may ensure that you are using the project properly and efficiently and get up and running soon.

<p align="right">(<a href="#readme-top">return to top</a>)</p>

<!-- LICENSE -->

>## 📝 License
Learn more about [MIT](./LICENSE) licensed.



<p align="right">(<a href="#readme-top">back to top</a>)</p>